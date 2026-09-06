export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`rounded-xl border border-sage/80 bg-sage/30 px-4 py-3.5 text-sm leading-relaxed text-ink/80 ${className}`}
      role="note"
    >
      <strong className="font-semibold text-forest">Educational notice:</strong>{" "}
      Information on this site is for inquiry and education only. It is not medical
      advice, a diagnosis, or a promise of cure or benefit. Ibogaine involves serious
      medical risks, including cardiac risk. Medical screening is essential. Always
      consult qualified clinicians. Not a U.S. FDA-approved clinic.
    </aside>
  );
}
