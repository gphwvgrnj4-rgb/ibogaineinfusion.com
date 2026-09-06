import Link from "next/link";
import { Container } from "./Container";

export function CTASection({
  title = "Start with a confidential application",
  body = "Screening comes before any treatment conversation — not after a sales pitch. Supervised IV ibogaine infusion inquiry is available provisionally in Mexico; not a U.S. FDA-approved clinic.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-sage/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <p className="section-label">Next step</p>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/85">{body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/apply"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink shadow-[0_10px_28px_rgba(176,141,87,0.28)] hover:bg-[#c9a46a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Start confidential application
          </Link>
          <Link
            href="/safety-and-screening"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/35 px-7 py-3 text-sm font-medium text-cream hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Review safety &amp; screening
          </Link>
        </div>
      </Container>
    </section>
  );
}
