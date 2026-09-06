import Link from "next/link";

export function JurisdictionNote({
  variant = "strip",
  className = "",
}: {
  variant?: "strip" | "card" | "inline";
  className?: string;
}) {
  if (variant === "inline") {
    return (
      <p className={`text-sm leading-relaxed text-ink/75 ${className}`}>
        Supervised IV ibogaine infusion inquiry and treatment are available{" "}
        <strong className="font-semibold text-forest">provisionally in Mexico</strong>{" "}
        — not a U.S. FDA-approved clinic. Screening comes first; jurisdiction and legal
        context are discussed transparently before any travel or treatment conversation.
      </p>
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
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          Supervised IV ibogaine infusion inquiry and treatment are available{" "}
          <strong className="text-forest">provisionally in Mexico</strong>. This is not a
          U.S. FDA-approved clinic or treatment. Screening is required; we do not claim
          affiliation with other brands or centers.
        </p>
        <p className="mt-3 text-sm">
          <Link href="/safety-and-screening" className="font-semibold text-forest-mid underline-offset-4 hover:underline">
            Safety &amp; screening
          </Link>
          {" · "}
          <Link href="/apply" className="font-semibold text-forest-mid underline-offset-4 hover:underline">
            Start confidential application
          </Link>
        </p>
      </aside>
    );
  }

  return (
    <div
      className={`border-b border-forest/10 bg-sage/35 ${className}`}
      role="note"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3.5 text-sm leading-relaxed text-ink/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-forest">Provisionally available in Mexico</span>
          {" — "}
          supervised IV ibogaine infusion inquiry/treatment. Not a U.S. FDA-approved clinic;
          screening-first with clear jurisdiction transparency.
        </p>
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
