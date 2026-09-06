import Link from "next/link";
import { Container } from "./Container";

export function CTASection({
  title = "Check if a supervised path may be appropriate",
  body = "Start with a confidential inquiry. Screening comes before any treatment conversation — not after a sales pitch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-forest py-14 text-cream">
      <Container className="text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-cream/85 leading-relaxed">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/apply"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#c9a46a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Check if you qualify
          </Link>
          <Link
            href="/safety-and-screening"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Review safety &amp; screening
          </Link>
        </div>
      </Container>
    </section>
  );
}
