import { NextResponse } from "next/server";
import https from "https";
import { URL } from "url";

type LeadPayload = Record<string, unknown>;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === "true" || value === "on";
}

/** Node fetch may strip Origin/Referer (forbidden headers); https.request keeps them. */
function postJson(
  webhookUrl: string,
  payload: unknown,
  extraHeaders: Record<string, string>,
): Promise<{ status: number; bodyText: string }> {
  const body = JSON.stringify(payload);
  const parsed = new URL(webhookUrl);
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": Buffer.byteLength(body),
          ...extraHeaders,
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
        res.on("end", () => {
          resolve({
            status: res.statusCode || 0,
            bodyText: Buffer.concat(chunks).toString("utf8"),
          });
        });
      },
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot / basic spam
  const honeypot = asString(body.website) || asString(body.honeypot) || asString(body._hp);
  if (honeypot) {
    // Silent success for bots
    return NextResponse.json({ ok: true, demo: true });
  }

  const contact =
    body.contact && typeof body.contact === "object"
      ? (body.contact as Record<string, unknown>)
      : {};
  const consent =
    body.consent && typeof body.consent === "object"
      ? (body.consent as Record<string, unknown>)
      : {};

  const firstName = asString(body.firstName) || asString(contact.firstName);
  const lastName = asString(body.lastName) || asString(contact.lastName);
  const name =
    asString(body.name) ||
    [firstName, lastName].filter(Boolean).join(" ") ||
    "";
  const email = asString(body.email) || asString(contact.email);
  const phone = asString(body.phone) || asString(contact.phone);

  const consentToContact =
    asBool(body.consent) ||
    asBool(consent.consentToContact) ||
    asBool(body.consentToContact);
  const medicalAccuracy = asBool(consent.medicalAccuracy) || asBool(body.medicalAccuracy);

  // Support legacy thin inquiry (name/email/phone/consent) and rich application
  const isRich = body.type === "application" || Boolean(body.interest || body.generalHealth);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and phone are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 });
  }

  if (isRich) {
    if (!consentToContact || !medicalAccuracy) {
      return NextResponse.json(
        {
          ok: false,
          error: "Consent to contact and medical accuracy attestation are required.",
        },
        { status: 400 },
      );
    }
  } else if (!consentToContact) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone, and consent are required." },
      { status: 400 },
    );
  }

  const { website: _w, honeypot: _h, _hp: _hpField, ...applicationRest } = body;

  const payload = {
    type: isRich ? "application" : "inquiry",
    name,
    firstName: firstName || name.split(" ")[0] || "",
    lastName: lastName || name.split(" ").slice(1).join(" ") || "",
    email,
    phone,
    preferredContact: asString(body.preferredContact) || asString(contact.preferredContact) || "",
    timezone: asString(body.timezone) || asString(contact.timezone) || "",
    // Structured sections for email/webhook notification
    contact: body.contact ?? {
      firstName,
      lastName,
      email,
      phone,
      preferredContact: asString(body.preferredContact),
      timezone: asString(body.timezone),
    },
    interest: body.interest ?? null,
    generalHealth: body.generalHealth ?? null,
    substanceHistory: body.substanceHistory ?? null,
    eatingSleep: body.eatingSleep ?? null,
    personalFamily: body.personalFamily ?? null,
    intentions: body.intentions ?? null,
    consent: {
      consentToContact,
      medicalAccuracy: isRich ? medicalAccuracy : true,
    },
    // Legacy thin message field
    message: asString(body.message),
    // Full application object for forwarders that want everything
    application: isRich ? applicationRest : null,
    source: "ibogaineinfusion.com",
    submittedAt: new Date().toISOString(),
    notificationPreference: {
      emailFields: ["name", "email", "phone", "preferredContact", "timezone", "interest", "consent"],
      includeFullApplication: true,
    },
  };

  // Prefer env; fall back to FormSubmit ajax so /apply leaves demo mode without paid Formspark.
  // Activate once via email link sent to hello@ibogaineinfusion.com (ImprovMX → Benny) if FormSubmit asks.
  const webhook =
    process.env.FORM_WEBHOOK_URL ||
    "https://formsubmit.co/ajax/hello@ibogaineinfusion.com";

  if (webhook) {
    try {
      const isFormSubmit = webhook.includes("formsubmit.co");
      const { status, bodyText } = await postJson(
        webhook,
        {
          ...payload,
          _subject: `Ibogaine Infusion ${payload.type}: ${payload.name}`,
          _template: "table",
          _replyto: payload.email,
        },
        isFormSubmit
          ? {
              Origin: "https://www.ibogaineinfusion.com",
              Referer: "https://www.ibogaineinfusion.com/apply",
            }
          : {},
      );

      let webhookBody: Record<string, unknown> | null = null;
      try {
        webhookBody = JSON.parse(bodyText) as Record<string, unknown>;
      } catch {
        webhookBody = null;
      }
      const successField = webhookBody?.success;
      const successOk = successField === true || successField === "true";
      // FormSubmit ajax returns JSON {success:"true"}; other webhooks may omit success.
      if (status < 200 || status >= 300 || (isFormSubmit && !successOk)) {
        const webhookMessage =
          typeof webhookBody?.message === "string" ? webhookBody.message : null;
        console.error(
          "[lead:webhook-fail]",
          JSON.stringify({
            status,
            isFormSubmit,
            successField,
            message: webhookMessage,
            bodyPreview: bodyText.slice(0, 300),
          }),
        );
        return NextResponse.json(
          {
            ok: false,
            error: webhookMessage || "Webhook rejected the submission.",
            formsubmitSuccess: successField ?? null,
            webhookStatus: status,
            webhookBodyPreview: bodyText.slice(0, 300),
            usedFormSubmit: isFormSubmit,
          },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true, demo: false });
    } catch (err) {
      console.error("[lead:webhook-error]", err instanceof Error ? err.message : "unknown");
      return NextResponse.json(
        { ok: false, error: "Unable to reach form webhook." },
        { status: 502 },
      );
    }
  }

  // Demo mode: accept without external delivery (avoid logging PHI in full)
  console.info(
    "[lead:demo]",
    JSON.stringify({
      type: payload.type,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      preferredContact: payload.preferredContact,
      submittedAt: payload.submittedAt,
      hasApplication: Boolean(payload.application),
    }),
  );
  return NextResponse.json({ ok: true, demo: true });
}
