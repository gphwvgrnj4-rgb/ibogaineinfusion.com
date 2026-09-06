import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();
  const consent = Boolean(body.consent);

  if (!name || !email || !phone || !consent) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone, and consent are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone,
    message,
    consent,
    source: "ibogaineinfusion.com",
    submittedAt: new Date().toISOString(),
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

  // Demo mode: accept without external delivery
  console.info("[lead:demo]", JSON.stringify(payload));
  return NextResponse.json({ ok: true, demo: true });
}
