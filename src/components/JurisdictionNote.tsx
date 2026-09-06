import Link from "next/link";

const blurbs = {
  home: (
    <>
      Physician-supervised IV ibogaine infusion programs discussed on this site are{" "}
      <strong className="font-semibold text-forest">provisionally available in Mexico</strong>{" "}
      (not an FDA-approved U.S. clinic treatment). Ibogaine remains{" "}
      <strong className="font-semibold text-forest">Schedule I</strong> in the United States and is{" "}
      <strong className="font-semibold text-forest">not FDA-approved</strong> for any indication.
      Availability abroad is not a guarantee of suitability, legality for any individual, or clinical
      outcome. Cardiac screening and continuous monitoring remain essential. This is educational
      information, not legal or medical advice.
    </>
  ),
  safety: (
    <>
      Programs discussed here for physician-supervised IV ibogaine infusion are{" "}
      <strong className="font-semibold text-forest">provisionally offered in Mexico</strong>, not as
      an FDA-approved U.S. treatment. Traveling for care does{" "}
      <strong className="font-semibold text-forest">not</strong> reduce QTc / arrhythmia risk and does{" "}
      <strong className="font-semibold text-forest">not</strong> replace pre-infusion ECG,
      electrolytes, medication review, continuous telemetry, or emergency preparedness. Ibogaine is{" "}
      <strong className="font-semibold text-forest">Schedule I</strong> in the U.S. Availability
      abroad is not a guarantee of individual suitability, local compliance for every traveler, or
      clinical outcome. Not legal advice.
    </>
  ),
  apply: (
    <>
      Submitting this form requests a{" "}
      <strong className="font-semibold text-forest">confidential screening conversation</strong>{" "}
      about physician-supervised IV ibogaine infusion programs that are{" "}
      <strong className="font-semibold text-forest">provisionally available in Mexico</strong>. This
      is <strong className="font-semibold text-forest">not</strong> an FDA-approved U.S. clinic
      pathway, <strong className="font-semibold text-forest">not</strong> automatic admission, and{" "}
      <strong className="font-semibold text-forest">not</strong> a promise of legality, travel
      clearance, or outcome. Ibogaine is <strong className="font-semibold text-forest">Schedule I</strong>{" "}
      in the United States. Screening and cardiac monitoring remain mandatory before any treatment
      discussion.
    </>
  ),
  generic: (
    <>
      Physician-supervised IV ibogaine infusion programs discussed on this site are{" "}
      <strong className="font-semibold text-forest">provisionally available in Mexico</strong> — not
      an FDA-approved U.S. clinic treatment. Ibogaine is Schedule I in the U.S. and not FDA-approved.
      Availability abroad is not a guarantee of suitability, legality, or outcome. Educational only;
      not legal or medical advice.
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
      <p className={`text-sm leading-relaxed text-ink/75 ${className}`}>{body}</p>
    );
  }

  if (variant === "card") {
    return (
      <aside
        className={`rounded-2xl border border-forest/10 bg-cream p-5 shadow-[0_8px_30px_rgba(15,61,46,0.06)] ${className}`}
        role="note"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Jurisdiction transparency
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">{body}</p>
        <p className="mt-3 text-sm">
          <Link
            href="/safety-and-screening"
            className="font-semibold text-forest-mid underline-offset-4 hover:underline"
          >
            Safety &amp; screening
          </Link>
          {" · "}
          <Link
            href="/blog/is-ibogaine-legal-us"
            className="font-semibold text-forest-mid underline-offset-4 hover:underline"
          >
            US legality (educational)
          </Link>
          {" · "}
          <Link
            href="/apply"
            className="font-semibold text-forest-mid underline-offset-4 hover:underline"
          >
            Start confidential application
          </Link>
        </p>
      </aside>
    );
  }

  return (
    <div className={`border-b border-forest/10 bg-sage/35 ${className}`} role="note">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3.5 text-sm leading-relaxed text-ink/80 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
        <p>{body}</p>
        <Link
          href="/apply"
          className="shrink-0 font-semibold text-forest-mid underline-offset-4 hover:underline"
        >
          Start confidential application →
        </Link>
      </div>
    </div>
  );
}
