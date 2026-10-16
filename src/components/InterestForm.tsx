"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/hello@ibogaineinfusion.com";
const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid", "from", "intent"];
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

const input =
  "w-full rounded-full border border-[#B8956A]/40 bg-[#071C16]/70 px-5 py-3 text-sm text-cream placeholder:text-cream/45 outline-none transition focus:border-[#B8956A] focus:ring-2 focus:ring-[#B8956A]/30";

/** Minimal indication-of-interest form: name, email, WhatsApp. Browser FormSubmit delivery to hello@. */
export function InterestForm({ source }: { source: string }) {
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => setMeta(readAttribution()), []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Please enter a valid email.");
    if (whatsapp.replace(/\D/g, "").length < 7) return setError("Please enter your WhatsApp number with country code.");
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
          type: "interest",
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          source,
          ...meta,
          _subject: `Ibogaine Infusion INTEREST: ${name.trim()}`,
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
      <div className="rounded-2xl border border-[#B8956A]/40 bg-[#071C16]/70 p-6 text-cream" role="status" data-interest="success">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8956A]">Interest registered</p>
        <p className="mt-3 font-serif text-2xl">Thank you, {name.trim().split(/\s+/)[0]}.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          We’ll reach out confidentially by email or WhatsApp. Registering is not admission to treatment; a
          physician reviews your history first.
        </p>
        <Link
          href={`/apply?from=${encodeURIComponent(source)}`}
          className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#B8956A]/60 px-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream hover:bg-[#B8956A]/15"
        >
          Optional: complete the full application →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-3" aria-label="Register interest">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="sr-only" htmlFor={`ii-name-${source}`}>Name</label>
        <input id={`ii-name-${source}`} className={input} placeholder="Name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="sr-only" htmlFor={`ii-email-${source}`}>Email</label>
        <input id={`ii-email-${source}`} className={input} type="email" placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="sr-only" htmlFor={`ii-wa-${source}`}>WhatsApp number</label>
        <input id={`ii-wa-${source}`} className={input} type="tel" placeholder="WhatsApp (+country)" autoComplete="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink hover:bg-white disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Register interest"}
      </button>
      {error ? <p className="text-sm text-[#F2C9A0]" role="alert">{error}</p> : null}
      {status === "error" ? (
        <p className="text-sm text-[#F2C9A0]" role="alert">
          We couldn’t send that just now. Please email{" "}
          <a className="underline" href={`mailto:hello@ibogaineinfusion.com?subject=Interest&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}`)}`}>
            hello@ibogaineinfusion.com
          </a>{" "}
          or try again.
        </p>
      ) : null}
      <p className="text-xs text-cream/50">Confidential. No obligation. Not crisis care.</p>
    </form>
  );
}
