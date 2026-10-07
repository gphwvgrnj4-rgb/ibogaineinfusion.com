export function Disclaimer({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <aside
      className={`rounded-2xl border px-5 py-4 text-sm leading-relaxed ${
        isDark
          ? "border-white/10 bg-white/5 text-cream/75 backdrop-blur-sm"
          : "border-[var(--line)] bg-stone/40 text-muted"
      } ${className}`}
      role="note"
    >
      <strong className={`font-medium ${isDark ? "text-accent" : "text-forest"}`}>
        Educational notice:
      </strong>{" "}
      Information on this site is for inquiry and education only. It is not medical
      advice, a diagnosis, or a promise of cure or benefit. Ibogaine involves serious
      medical risks, including cardiac risk. Medical screening is essential. Always
      consult qualified clinicians. Not an approved U.S. clinic pathway.
    </aside>
  );
}
