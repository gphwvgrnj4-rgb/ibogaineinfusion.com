import { NextResponse } from "next/server";

type LeadPayload = Record<string, unknown>;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === "true" || value === "on";
}

/**
 * Optional / secondary lead endpoint (validation + log).
 * /apply delivers via browser FormSubmit to hello@ibogaineinfusion.com —
 * server-side FormSubmit from Vercel is blocked by Cloudflare.
 */
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

  console.info(
    "[lead:secondary]",
    JSON.stringify({
      type: isRich ? "application" : "inquiry",
      name,
      email,
      phone,
      submittedAt: new Date().toISOString(),
      note: "Primary delivery is browser FormSubmit from /apply",
    }),
  );

  return NextResponse.json({ ok: true, demo: false });
}
