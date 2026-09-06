import { NextResponse } from "next/server";

type LeadPayload = Record<string, unknown>;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === "true" || value === "on";
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
  const mexicoAcknowledgment =
    asBool(consent.mexicoAcknowledgment) || asBool(body.mexicoAcknowledgment);

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
    if (!consentToContact || !medicalAccuracy || !mexicoAcknowledgment) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Consent to contact, medical accuracy attestation, and Mexico provisional acknowledgment are required.",
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
      mexicoAcknowledgment: isRich ? mexicoAcknowledgment : false,
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

  const webhook = process.env.FORM_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json(
          { ok: false, error: "Webhook rejected the submission." },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true, demo: false });
    } catch {
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
