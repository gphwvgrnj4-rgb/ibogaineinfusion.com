import Link from "next/link";
import { Container } from "./Container";
import { WaitlistForm } from "./WaitlistForm";

export function CTASection({
  title = "Join the waiting list",
  body = "The clinic is not open yet. Leave your email and we will notify you when physician-screened IV ibogaine intake opens. Planned locations: Mexico and Gabon. Not an approved U.S. clinic.",
  source = "cta-section",
}: {
  title?: string;
  body?: string;
  source?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-28 text-cream sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-accent/70" aria-hidden="true" />
      <Container className="relative max-w-3xl text-center">
        <p className="section-label">Waiting list</p>
        <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
          {body}
        </p>
        <div className="mx-auto mt-10 max-w-xl text-left">
          <WaitlistForm source={source} variant="dark" />
        </div>
        <p className="mt-6 text-sm text-cream/55">
          Or open the{" "}
          <Link href="/apply" className="text-accent underline-offset-4 hover:underline">
            waiting list page
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
