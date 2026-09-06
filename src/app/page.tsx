import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "True IV Ibogaine Infusion | Medical Screening",
  description: siteConfig.oneLiner,
};

const pillars = [
  {
    title: "Screening first",
    body: "Cardiac and medical review are the starting point — not an afterthought buried under testimonials.",
  },
  {
    title: "True IV infusion",
    body: "Psychoactive ibogaine delivered intravenously — parallel to ketamine IV clinics — not oral ibogaine with supportive IV fluids only.",
  },
  {
    title: "Honest limits",
    body: "No cure claims. Educational inquiry only. Serious risk discussion, including cardiac considerations.",
  },
];

const pathways = [
  {
    href: "/ibogaine-for-addiction",
    title: "Addiction",
    body: "How ibogaine is discussed in substance-use contexts — and why supervision and aftercare still matter.",
  },
  {
    href: "/ibogaine-for-depression",
    title: "Depression",
    body: "A careful overview of mood-related interest, evidence limits, and medical caution.",
  },
  {
    href: "/ibogaine-for-ptsd",
    title: "PTSD",
    body: "Trauma-informed inquiry themes without promising resolution or minimizing complexity.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
        </div>
        <Container className="relative py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Clinical-luxury · Screening-first
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            True IV ibogaine infusion — supervised, screening-first
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            {siteConfig.oneLiner}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#c9a46a]"
            >
              Check if you qualify
            </Link>
            <Link
              href="/what-is-ibogaine-infusion"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/35 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              What true IV infusion means
            </Link>
          </div>
          <div className="mt-10 max-w-3xl">
            <Disclaimer className="border-cream/20 bg-cream/10 text-cream/90 [&_strong]:text-accent" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl">
              Not a retreat brochure
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Many ibogaine pages sell atmosphere — or blur oral ceremonies with an IV pole in the
              background. This site is about <strong className="text-forest">true psychoactive IV
              ibogaine infusion</strong>: the medicine itself given intravenously under medical
              screening and monitoring. If you need beach photography and guaranteed transformation
              copy, this is not that site.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sage/25 py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-medium text-forest">Explore by concern</h2>
              <p className="mt-2 max-w-xl text-ink/75">
                Condition pages explain common questions in plain language — without inventing outcomes.
              </p>
            </div>
            <Link href="/how-it-works" className="text-sm font-semibold text-forest-mid underline-offset-4 hover:underline">
              See how the process works →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pathways.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-forest/10 bg-cream p-6 transition hover:border-accent/50 hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl">
              Why true IV infusion?
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Ketamine infusion clinics deliver medicine intravenously. This site&apos;s
              differentiator is the same idea applied to ibogaine: true psychoactive IV ibogaine
              infusion — not oral dosing plus an IV bag for hydration. Screening, controlled IV
              administration, observation, and follow-up define the inquiry model. The drugs differ;
              the infusion-clinic posture is intentional.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/80">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                Pre-qualification and cardiac-focused screening discussion
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                Intravenous psychoactive ibogaine — not oral-only protocols dressed up with fluids
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                Confidential CTAs: check eligibility, then talk — not impulse checkout
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-forest">Start with safety</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Read how screening is framed, then submit a confidential inquiry if you want a human
              review of next-step questions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/safety-and-screening"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-forest/20 px-4 text-sm font-semibold text-forest hover:bg-sage/30"
              >
                Safety &amp; screening
              </Link>
              <Link
                href="/faq"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-forest/20 px-4 text-sm font-semibold text-forest hover:bg-sage/30"
              >
                FAQ
              </Link>
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-forest px-4 text-sm font-semibold text-cream hover:bg-forest-mid"
              >
                Confidential inquiry
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
