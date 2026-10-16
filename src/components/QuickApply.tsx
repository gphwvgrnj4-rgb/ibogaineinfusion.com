"use client";

import { FormEvent, useEffect, useState } from "react";
import { ApplicationForm, type ApplicationPrefill } from "./ApplicationForm";

const ENDPOINT = "https://formsubmit.co/ajax/hello@ibogaineinfusion.com";
const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid", "from", "intent"];
const STORE_KEY = "ii_attribution";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[var(--line)] bg-cream px-3.5 py-3 text-ink outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/30";
const labelClass = "block text-sm font-medium text-ink";
const card =
  "space-y-5 rounded-[1.5rem] border border-[var(--line)] bg-paper p-5 sm:p-7 shadow-[var(--shadow-soft)]";

const PURPOSES = [
  { value: "call", label: "A free, confidential call — I have questions first" },
  { value: "addiction", label: "Addiction / substance use" },
  { value: "depression", label: "Depression or mood" },
  { value: "ptsd", label: "PTSD or trauma" },
  { value: "family", label: "For a family member or loved one" },
  { value: "other", label: "Something else" },
];

/** Read tracking params safely; never throws, works with any ?utm_* combination. */
function readAttribution(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const stored = window.sessionStorage.getItem(STORE_KEY);
    if (stored) Object.assign(out, JSON.parse(stored));
  } catch {}
  try {
    const params = new URLSearchParams(window.location.search);
    for (const k of TRACK_KEYS) {
      const v = params.get(k);
      if (v) out[k] = v.slice(0, 200);
    }
    if (document.referrer && !out.referrer) out.referrer = document.referrer.slice(0, 300);
    out.landing = out.landing || window.location.pathname;
    window.sessionStorage.setItem(STORE_KEY, JSON.stringify(out));
  } catch {}
  return out;
}

export function QuickApply() {
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contact, setContact] = useState("email");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const m = readAttribution();
    setMeta(m);
    if (m.intent === "call") setPurpose("call");
  }, []);

  const isCall = purpose === "call";
  const needsPhone = contact !== "email";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Please enter a valid email.");
    if (!purpose) return setError("Please tell us what this is for.");
    if (needsPhone && !phone.trim()) return setError("Please add a number for that contact method.");
    setError("");
    setStatus("loading");
    if (website.trim()) {
      setStatus("done");
      return;
    }
    const purposeLabel = PURPOSES.find((p) => p.value === purpose)?.label || purpose;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          type: isCall ? "call-request" : "quick-application",
          name: name.trim(),
          email: email.trim(),
          purpose: purposeLabel,
          freeConfidentialCall: isCall ? "yes" : "no",
          bestContact: contact,
          phone: phone.trim(),
          ...meta,
          _subject: `Ibogaine Infusion ${isCall ? "FREE CALL request" : "application (step 1)"}: ${name.trim()}`,
          _template: "table",
          _replyto: email.trim(),
        }),
      });
      let json: { success?: boolean | string } = {};
      try {
        json = await res.json();
      } catch {}
      if (!res.ok || !(json.success === true || json.success === "true")) throw new Error("fail");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    const [firstName, ...rest] = name.trim().split(/\s+/);
    const prefill: ApplicationPrefill = {
      firstName,
      lastName: rest.join(" "),
      email: email.trim(),
      phone: phone.trim(),
      preferredContact: contact,
    };
    if (showDetail) return <ApplicationForm prefill={prefill} meta={meta} />;
    return (
      <div className={`${card} text-center`}>
        <div className="mx-auto h-px w-16 bg-accent/80" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Step 1 received</p>
        <h2 className="font-serif text-2xl text-forest">
          {isCall ? "We’ll be in touch to arrange your call" : "Thank you — we have your details"}
        </h2>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-ink/75">
          Our team will contact you confidentially by {contact === "email" ? "email" : contact}. Submitting is
          not admission to treatment; a physician reviews your history before anything else happens.
        </p>
        <div className="rounded-xl border border-[var(--line)] bg-cream px-5 py-5 text-left">
          <p className="font-medium text-ink">Optional step 2: detailed screening</p>
          <p className="mt-1 text-sm text-ink/70">
            About 10–15 minutes. Sharing your health and substance history now makes the first conversation
            faster and safer. You can skip it and do it later.
          </p>
          <button type="button" onClick={() => setShowDetail(true)} className="btn-primary mt-4">
            Continue to detailed screening
          </button>
        </div>
        <p className="text-xs text-ink/55">
          If you are in crisis, contact local emergency or crisis services now. This form is not crisis care.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`relative ${card}`} noValidate>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Step 1 of 2 · under a minute</p>
        <p className="text-xs text-ink/55">Step 2 optional</p>
      </div>
      <div className="h-px bg-accent/50" aria-hidden="true" />
      <h2 className="font-serif text-2xl text-forest">{isCall ? "Book a free, confidential call" : "Start your application"}</h2>

      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="qa-website">Website</label>
        <input id="qa-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div>
        <label htmlFor="qa-name" className={labelClass}>Name <span className="text-accent">*</span></label>
        <input id="qa-name" autoComplete="name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="qa-email" className={labelClass}>Email <span className="text-accent">*</span></label>
        <input id="qa-email" type="email" autoComplete="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="qa-purpose" className={labelClass}>What is this for? <span className="text-accent">*</span></label>
        <select id="qa-purpose" className={inputClass} value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="">Choose one…</option>
          {PURPOSES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="qa-contact" className={labelClass}>Best way to reach you <span className="text-accent">*</span></label>
        <select id="qa-contact" className={inputClass} value={contact} onChange={(e) => setContact(e.target.value)}>
          <option value="email">Email</option>
          <option value="phone">Phone call</option>
          <option value="text">Text / SMS</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
        {needsPhone ? (
          <input
            aria-label="Phone number"
            type="tel"
            autoComplete="tel"
            placeholder="Phone number with country code"
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        ) : null}
      </div>

      {error ? <p className="text-sm text-red-800" role="alert">{error}</p> : null}
      {status === "error" ? (
        <p className="text-sm text-red-800" role="alert">
          We could not send this automatically. Please email{" "}
          <a className="underline" href="mailto:hello@ibogaineinfusion.com">hello@ibogaineinfusion.com</a>.
        </p>
      ) : null}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-70">
        {status === "loading" ? "Sending…" : isCall ? "Request my free call" : "Apply now"}
      </button>
      {!isCall ? (
        <button type="button" onClick={() => setPurpose("call")} className="w-full text-center text-sm text-forest-mid underline underline-offset-3">
          Not ready to apply? Request a free confidential call instead
        </button>
      ) : null}
      <p className="text-xs leading-relaxed text-ink/55">
        Confidential. Not admission to treatment and not a promise of outcome. Screening and cardiac review come first.
      </p>
    </form>
  );
}
