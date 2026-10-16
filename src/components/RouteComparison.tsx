import Link from "next/link";
import { Container } from "./Container";

export const routes = [
  {
    route: "Intravenous (IV)",
    tag: "The route we offer",
    points: [
      "Dose titrated in small increments, guided by the ECG and clinical response.",
      "The infusion can be slowed or stopped at any time.",
      "Predictable delivery that bypasses first-pass metabolism and gut-absorption variability.",
      "Given under continuous cardiac (ECG/QTc) monitoring with clinicians present.",
    ],
  },
  {
    route: "Oral",
    tag: "Most studied",
    points: [
      "The most studied route in published observational research.",
      "Once swallowed, the dose can't be reversed or titrated down.",
      "Absorption varies with the gut and with CYP2D6 metabolism.",
    ],
  },
  {
    route: "Intranasal",
    tag: "Not offered",
    points: [
      "Very little clinical data.",
      "Unpredictable absorption.",
      "Not a route we offer.",
    ],
  },
];

export function RouteComparison({ showPageLink = true }: { source?: string; showPageLink?: boolean }) {
  return (
    <section className="bg-cream py-24 sm:py-32" id="iv-vs-oral" data-route-comparison>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto divider-gold" />
          <p className="section-label mt-8">Route matters</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight text-forest sm:text-5xl">IV vs oral vs intranasal</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Why we work exclusively with intravenous ibogaine and what the evidence does and doesn’t show.
          </p>
        </div>
        <div className="mt-16 grid border-t border-accent/50 md:grid-cols-3 md:divide-x md:divide-accent/40">
          {routes.map((r) => (
            <div key={r.route} className="border-b border-accent/50 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-accent">{r.tag}</p>
              <h3 className="mt-3 font-serif text-3xl text-forest">{r.route}</h3>
              <ul className="mt-6 space-y-4">
                {r.points.map((p) => (
                  <li key={p} className="border-t border-[var(--line)] pt-4 text-sm leading-relaxed text-muted sm:text-base">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
          IV ibogaine is still being researched, and every route carries serious cardiac risk, so screening is essential.
          Nothing here is a promise of cure or benefit.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#waitlist" className="inline-flex min-h-12 items-center rounded-full bg-ink px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream hover:bg-forest">
            Join the waitlist
          </Link>
          {showPageLink ? (
            <Link href="/iv-vs-oral" className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline">
              Read the full comparison →
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
