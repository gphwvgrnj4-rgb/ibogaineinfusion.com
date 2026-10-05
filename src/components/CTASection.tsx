import Link from "next/link";
import { Container } from "./Container";

export function CTASection({
  title = "Start with a confidential application",
  body = "Screening comes before any treatment conversation — not after a sales pitch. Treatment location is shared after screening. Not an approved U.S. clinic.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 text-cream sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-accent/60"
        aria-hidden="true"
      />
      <Container className="relative max-w-3xl text-center">
        <p className="section-label">Next step</p>
        <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
          {body}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/apply" className="btn-gold">
            Start confidential application
          </Link>
          <Link href="/safety-and-screening" className="btn-ghost">
            Review safety &amp; screening
          </Link>
        </div>
      </Container>
    </section>
  );
}
