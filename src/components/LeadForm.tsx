"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string; demo?: boolean };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to submit right now.");
      }

      setStatus("success");
      setMessage(
        json.demo
          ? "Inquiry received (demo mode). We will follow up if this environment is connected to a webhook."
          : "Inquiry received. Our team will review your message confidentially.",
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-md border border-forest/20 bg-cream px-3 py-2.5 text-ink outline-none ring-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-md border border-forest/20 bg-cream px-3 py-2.5 text-ink outline-none ring-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1.5 w-full rounded-md border border-forest/20 bg-cream px-3 py-2.5 text-ink outline-none ring-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-md border border-forest/20 bg-cream px-3 py-2.5 text-ink outline-none ring-accent focus:ring-2"
          placeholder="Share relevant history, medications, or questions — only what you are comfortable providing."
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
        />
        <span>
          I understand this is a confidential educational inquiry, not a guarantee of
          treatment eligibility, and that ibogaine involves serious medical risks requiring
          professional screening.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-forest px-4 py-3 text-sm font-semibold text-cream transition hover:bg-forest-mid disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Submit confidential inquiry"}
      </button>

      {message && (
        <p
          role="status"
          className={`text-sm ${status === "error" ? "text-red-700" : "text-forest-mid"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
