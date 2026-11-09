"use client";

import { FormEvent, useEffect, useState } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/hello@ibogaineinfusion.com";
const TRACK_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
  "from",
  "intent",
  "cta",
];
const STORE_KEY = "ii_attribution";

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

type Variant = "light" | "dark";

/**
 * Email-only opening waitlist. Tags FormSubmit payloads as waitlist.
 * The multi-step ApplicationForm / QuickApply remain in the repo for recovery
 * but are not mounted while the clinic is not yet open.
 */
export function WaitlistForm({
  source,
  variant = "light",
  idSuffix,
}: {
  source: string;
  variant?: Variant;
  /** Optional suffix so multiple forms on one page keep unique ids */
  idSuffix?: string;
}) {
  const suffix = idSuffix || source.replace(/[^a-zA-Z0-9_-]/g, "-");
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => setMeta(readAttribution()), []);

  const dark = variant === "dark";
  const inputClass = dark
    ? "w-full min-w-0 flex-1 rounded-full border border-[#B8956A]/40 bg-[#071C16]/70 px-5 py-3 text-sm text-cream placeholder:text-cream/45 outline-none transition focus:border-[#B8956A] focus:ring-2 focus:ring-[#B8956A]/30"
    : "w-full min-w-0 flex-1 rounded-full border border-[var(--line)] bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/30";
  const buttonClass = dark
    ? "inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-cream px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink hover:bg-white disabled:opacity-60"
    : "inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-ink px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream hover:bg-forest disabled:opacity-60";
  const hintClass = dark ? "text-xs text-cream/50" : "text-xs text-ink/55";
  const alertClass = dark ? "text-sm text-[#F2C9A0]" : "text-sm text-red-800";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setStatus("loading");
    if (website.trim()) {
      setStatus("done");
      return;
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          lead_tag: "waitlist",
          form: "waitlist-email",
          email: email.trim(),
          source,
          ...meta,
          _subject: `Ibogaine Infusion WAITLIST: ${email.trim()}`,
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
    return (
      <div
        className={
          dark
            ? "rounded-2xl border border-[#B8956A]/40 bg-[#071C16]/70 p-6 text-cream"
            : "rounded-2xl border border-[var(--line)] bg-paper p-6 text-ink"
        }
        role="status"
        data-waitlist="success"
      >
        <p
          className={
            dark
              ? "text-xs font-semibold uppercase tracking-[0.2em] text-[#B8956A]"
              : "text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          }
        >
          You’re on the waiting list
        </p>
        <p className={dark ? "mt-3 font-serif text-2xl" : "mt-3 font-serif text-2xl text-forest"}>
          We’ll email you when we open.
        </p>
        <p className={dark ? "mt-2 text-sm leading-relaxed text-cream/70" : "mt-2 text-sm leading-relaxed text-ink/70"}>
          The clinic is not open yet. Joining the waiting list is not admission, not a medical
          consult, and not a promise of treatment. When intake opens, we’ll email this address first.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative space-y-3"
      aria-label="Join the waiting list"
      data-waitlist-form={source}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor={`ii-waitlist-email-${suffix}`}>
          Email
        </label>
        <input
          id={`ii-waitlist-email-${suffix}`}
          className={inputClass}
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={status === "loading"} className={buttonClass}>
          {status === "loading" ? "Sending…" : "Join the waiting list"}
        </button>
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>
      {error ? (
        <p className={alertClass} role="alert">
          {error}
        </p>
      ) : null}
      {status === "error" ? (
        <p className={alertClass} role="alert">
          We couldn’t send that just now. Please email{" "}
          <a
            className="underline"
            href={`mailto:hello@ibogaineinfusion.com?subject=Waitlist&body=${encodeURIComponent(`Email: ${email}`)}`}
          >
            hello@ibogaineinfusion.com
          </a>{" "}
          or try again.
        </p>
      ) : null}
      <p className={hintClass}>
        Clinic not open yet. We’ll email you when intake opens. Confidential · no obligation · not
        crisis care.
      </p>
    </form>
  );
}
