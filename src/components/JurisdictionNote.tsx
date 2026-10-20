import Link from "next/link";

const blurbs = {
  home: (
    <>
      Ibogaine Infusion is a clinic dedicated exclusively to physician-supervised IV ibogaine
      therapy, with waitlist intakes at two locations:{" "}
      <strong className="font-semibold text-ink">Mexico and Gabon</strong>{" "}
      (not an approved U.S. clinic treatment). Ibogaine remains{" "}
      <strong className="font-semibold text-ink">Schedule I</strong> in the United States and is{" "}
      <strong className="font-semibold text-ink">not approved for any indication</strong>.
      Availability abroad is not a guarantee of suitability, legality for any individual, or clinical
      outcome. Cardiac screening and continuous monitoring remain essential. This is educational
      information, not legal or medical advice.
    </>
  ),
  safety: (
    <>
      Our physician-supervised IV ibogaine infusions take place at our{" "}
      <strong className="font-semibold text-ink">Mexico and Gabon intake locations</strong>, and
      are not an approved U.S. treatment. Traveling for care does{" "}
      <strong className="font-semibold text-ink">not</strong> reduce QTc / arrhythmia risk and does{" "}
      <strong className="font-semibold text-ink">not</strong> replace pre-infusion ECG,
      electrolytes, medication review, continuous telemetry, or emergency preparedness. Ibogaine is{" "}
      <strong className="font-semibold text-ink">Schedule I</strong> in the U.S. Availability
      abroad is not a guarantee of individual suitability, local compliance for every traveler, or
      clinical outcome. Not legal advice.
    </>
  ),
  apply: (
    <>
      Submitting this form requests a{" "}
      <strong className="font-semibold text-ink">confidential screening conversation</strong>{" "}
      about physician-supervised IV ibogaine infusion at our clinic. Waitlist intakes are open for{" "}
      <strong className="font-semibold text-ink">Mexico and Gabon</strong>. This is{" "}
      <strong className="font-semibold text-ink">not</strong> an approved U.S. clinic pathway,{" "}
      <strong className="font-semibold text-ink">not</strong> automatic admission, and{" "}
      <strong className="font-semibold text-ink">not</strong> a promise of legality, travel
      clearance, or outcome. Ibogaine is <strong className="font-semibold text-ink">Schedule I</strong>{" "}
      in the United States. Screening and cardiac monitoring remain mandatory before any treatment
      discussion.
    </>
  ),
  generic: (
    <>
      Ibogaine Infusion is a clinic dedicated exclusively to physician-supervised IV ibogaine
      therapy, with intakes in{" "}
      <strong className="font-semibold text-ink">Mexico and Gabon</strong> — not
      an approved U.S. clinic treatment. Ibogaine is Schedule I in the U.S. and not approved for any
      indication. Availability abroad is not a guarantee of suitability, legality, or outcome.
      Educational only; not legal or medical advice.
    </>
  ),
} as const;

export function JurisdictionNote({
  variant = "strip",
  context = "generic",
  className = "",
}: {
  variant?: "strip" | "card" | "inline";
  context?: keyof typeof blurbs;
  className?: string;
}) {
  const body = blurbs[context] ?? blurbs.generic;

  if (variant === "inline") {
    return (
      <p className={`text-sm leading-relaxed text-muted ${className}`}>{body}</p>
    );
  }

  if (variant === "card") {
    return (
      <aside
        className={`rounded-2xl border border-[var(--line)] bg-paper p-6 shadow-[var(--shadow-soft)] ${className}`}
        role="note"
      >
        <p className="section-label">Jurisdiction transparency</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
        <p className="mt-4 text-sm">
          <Link
            href="/safety-and-screening"
            className="font-medium text-forest-mid underline-offset-4 hover:underline"
          >
            Safety &amp; screening
          </Link>
          {" · "}
          <Link
            href="/blog/is-ibogaine-legal-us"
            className="font-medium text-forest-mid underline-offset-4 hover:underline"
          >
            US legality (educational)
          </Link>
          {" · "}
          <Link
            href="/apply"
            className="font-medium text-forest-mid underline-offset-4 hover:underline"
          >
            Start confidential application
          </Link>
        </p>
      </aside>
    );
  }

  return (
    <div className={`border-b border-[var(--line)] bg-stone/50 ${className}`} role="note">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-sm leading-relaxed text-muted sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-8 lg:px-10">
        <p>{body}</p>
        <Link
          href="/apply"
          className="shrink-0 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline"
        >
          Apply →
        </Link>
      </div>
    </div>
  );
}
