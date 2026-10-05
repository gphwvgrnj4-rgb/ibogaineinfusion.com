import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { JurisdictionNote } from "@/components/JurisdictionNote";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";
import { faqPage, organizationAndWebsite } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IV Ibogaine Infusion | Physician-Supervised Medical Care",
  description:
    "Intravenous ibogaine infusion under physician supervision—with cardiac screening and monitoring. Treatment location shared after screening. Honest education on evidence gaps, safety, and next steps.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "What is IV ibogaine infusion?",
    a: "Intravenous delivery of ibogaine as the psychoactive treatment under physician supervision in a medical infusion setting, with cardiac screening, continuous monitoring, and integration afterward.",
  },
  {
    q: "Where is treatment offered?",
    a: "Physician-supervised IV ibogaine infusion programs discussed on this site share the treatment location after screening. That is not the same as approved care in the United States. Ibogaine remains Schedule I federally and is not approved for any indication. Foreign availability is not legal advice, not a guarantee you will qualify, and not a prediction of benefit or safety. See /safety-and-screening and /blog/is-ibogaine-legal-us (educational only).",
  },
  {
    q: "Is published research mostly oral?",
    a: "Yes. Landmark examples include Knuijver et al. (Addiction, 2021; oral HCl, QTc) and Cherian et al. (Nature Medicine, 2024; oral ibogaine + IV magnesium). Controlled IV-psychoactive evidence is sparse.",
  },
  {
    q: "Is ibogaine approved for medical use?",
    a: "No. It is not approved for any indication and is Schedule I in the United States.",
  },
  {
    q: "Is cardiac screening required?",
    a: "Yes. Ibogaine can prolong QTc. Screening and continuous monitoring are ethical and clinical non-negotiables for any medical program.",
  },
  {
    q: "How do I start?",
    a: "Read safety and how-it-works education, then submit a confidential application at /apply.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Screening-first medicine",
    body: "Cardiac history, ECG, medications, and a clear go/no-go before any infusion conversation begins.",
  },
  {
    num: "02",
    title: "True IV psychoactive",
    body: "Ibogaine itself by intravenous infusion — not oral dosing labeled as an “infusion.”",
  },
  {
    num: "03",
    title: "Monitored sanctuary",
    body: "Physician oversight, continuous telemetry, and a calm clinical setting designed for dignity.",
  },
  {
    num: "04",
    title: "Integration afterward",
    body: "Structured psychosocial planning after the acute window — deliberate, not ornamental.",
  },
];

const funnel = [
  {
    title: "Discover",
    body: "Read the definition of true IV infusion, the evidence gap, and what cardiac diligence requires — before any application.",
    href: "/what-is-ibogaine-infusion",
  },
  {
    title: "Apply & align",
    body: "Submit a confidential multi-step application. We review readiness signals and schedule a discovery conversation.",
    href: "/apply",
  },
  {
    title: "Screen",
    body: "ECG, labs as indicated, medication review, and physician go/no-go. Treatment location is shared only after screening.",
    href: "/safety-and-screening",
  },
  {
    title: "Monitored infusion",
    body: "Psychoactive intravenous ibogaine under continuous telemetry and physician supervision in a medical setting.",
    href: "/how-it-works",
  },
  {
    title: "Integration",
    body: "Aftercare planning that translates the acute window into grounded next steps — without outcome promises.",
    href: "/how-it-works",
  },
];

export default function HomePage() {
  const base = organizationAndWebsite();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...(base["@graph"] as Record<string, unknown>[]),
      faqPage(homeFaqs),
    ],
  };
  const journal = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1. Hero — Eleusis-style full viewport */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-deep text-cream sm:items-center">
        <Image
          src="/brand/hero-cinematic.webp"
          alt="Cinematic still-life of a quiet private infusion suite at dusk — soft side light, IV line, deep forest and gold tones"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center sm:block"
        />
        <Image
          src="/brand/hero-cinematic-mobile.webp"
          alt="Cinematic still-life of a quiet private infusion suite at dusk — soft side light, IV line, deep forest and gold tones"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:hidden"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <Container className="relative w-full pb-20 pt-32 sm:pb-28 sm:pt-36">
          <div className="mx-auto max-w-4xl text-center sm:mx-0 sm:max-w-3xl sm:text-left">
            <div className="mx-auto divider-gold sm:mx-0" />
            <h1 className="mt-10 font-serif text-[3.1rem] leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Quiet. Monitored.
              <br />
              Exact.
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:mx-0 sm:text-lg">
              Physician-supervised IV ibogaine infusion — screening first, continuous cardiac
              monitoring, structured integration afterward.
            </p>
            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/apply"
                className="inline-flex min-h-12 items-center rounded-full bg-cream px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink hover:bg-white"
              >
                Request a private consultation
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                Explore the journey
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Jurisdiction — below fold, not in hero */}
      <JurisdictionNote context="home" />

      {/* 2. Ecosystem pillars */}
      <section className="bg-cream py-28 sm:py-36">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto divider-gold" />
            <p className="section-label mt-8">The ecosystem</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight text-forest sm:text-5xl lg:text-[3.4rem]">
              A complete path — not a spa label
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Four disciplines held together: medical screening, route honesty, monitored infusion,
              and integration. Curiosity is welcome; cure claims are not.
            </p>
          </Reveal>
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <div className="flex h-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-paper p-8">
                  <p className="font-serif text-3xl text-accent/75">{item.num}</p>
                  <h3 className="mt-6 font-serif text-2xl text-forest">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Feature mosaic — science / setting */}
      <section className="bg-paper py-8 sm:py-12">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-forest-deep text-cream">
              <div className="relative min-h-[280px]">
                <Image
                  src="/brand/suite-atmosphere.png"
                  alt="Monitored medical infusion bay with telemetry and IV equipment"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover cinematic-img opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="section-label text-accent">Clarity</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                  Science meets honesty
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-cream/65 sm:text-base">
                  Most published literature describes <strong className="text-cream/90">oral</strong>{" "}
                  ibogaine — often with IV magnesium support. Controlled evidence for psychoactive IV
                  ibogaine remains sparse. We say so plainly.{" "}
                  <Link href="/what-is-ibogaine-infusion" className="text-accent underline-offset-4 hover:underline">
                    Read the definition
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-[var(--line)] bg-cream p-8 sm:p-10">
              <div>
                <p className="section-label">Non-negotiable</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight text-forest sm:text-4xl">
                  Cardiac diligence
                </h3>
                <ul className="mt-8 space-y-0 text-sm text-muted sm:text-base">
                  {[
                    "Pre-treatment ECG and medication / electrolyte review",
                    "Continuous cardiac monitoring during the high-risk window",
                    "Physician oversight and emergency preparedness",
                    "Written clarity on psychoactive route vs support IV",
                  ].map((line) => (
                    <li key={line} className="flex gap-4 border-b border-[var(--line)] py-4 first:border-t">
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/safety-and-screening"
                className="mt-10 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline"
              >
                Review safety →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. Crafted for calm — large imagery band */}
      <section className="relative mt-6 min-h-[70vh] overflow-hidden bg-forest-deep text-cream sm:mt-10 sm:min-h-[80vh]">
        <Image
          src="/brand/suite-atmosphere.png"
          alt="Quiet clinical infusion setting prepared for monitored care"
          fill
          sizes="100vw"
          className="object-cover cinematic-img"
        />
        <div className="absolute inset-0 bg-forest-deep/55" aria-hidden="true" />
        <Container className="relative flex min-h-[70vh] items-end py-20 sm:min-h-[80vh] sm:py-24">
          <Reveal className="max-w-xl">
            <p className="section-label text-accent">The setting</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Crafted for calm
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
              White-coat medical care — not a hotel spa. A monitored medical infusion setting where
              continuous telemetry is non-negotiable. Treatment location is shared after screening.
            </p>
            <Link href="/how-it-works" className="btn-ghost mt-10 !inline-flex">
              How the journey works
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 5. Trust */}
      <section className="bg-cream py-28 sm:py-36">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">Diligence</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight text-forest sm:text-5xl lg:text-[3.4rem]">
              Professionals you can question
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Screening decides whether an infusion conversation begins — not a sales call. Journey
              shape may resemble infusion-clinic care; that is not legal, evidence, or risk equivalence
              with ketamine.
            </p>
            <Link
              href="/faq"
              className="mt-10 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream hover:bg-forest"
            >
              Visit FAQ
            </Link>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-[2rem] border border-[var(--line)] bg-paper p-8 sm:p-10">
              <p className="font-serif text-2xl text-forest sm:text-3xl">True transformation starts with refusal of shortcuts.</p>
              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
                No invented outcomes for addiction, depression, or PTSD. No marketing “infusion” for
                oral flood dosing. Support IV ≠ psychoactive IV.
              </p>
              <div className="mt-8 divider-gold" />
              <p className="mt-8 text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                Educational only · Not medical advice
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6. FAQ */}
      <section className="border-t border-[var(--line)] bg-paper py-28 sm:py-36">
        <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="section-label">Questions</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
              Have
              <br />
              questions?
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Straight answers on route, screening, and evidence — without marketing fog.
            </p>
            <Link
              href="/faq"
              className="btn-outline mt-10 !inline-flex"
            >
              Visit full FAQ
            </Link>
          </Reveal>
          <Reveal delayMs={80}>
            <div>
              {homeFaqs.map((item) => (
                <details key={item.q} className="faq-item group py-6">
                  <summary className="flex items-start justify-between gap-6 font-serif text-xl text-forest sm:text-2xl">
                    <span>{item.q}</span>
                    <span className="mt-1 shrink-0 text-accent transition group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7. Journal */}
      <section className="bg-cream py-28 sm:py-36">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Journal</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
                Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline"
            >
              View all →
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {journal.map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-paper p-7">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl leading-snug text-forest">
                    <Link href={`/blog/${post.slug}`} className="hover:text-forest-mid">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent"
                  >
                    Read →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Transformation funnel */}
      <section className="bg-forest-deep py-28 text-cream sm:py-36">
        <Container>
          <Reveal className="max-w-2xl">
            <div className="divider-gold" />
            <p className="section-label mt-8 text-accent">The path</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.4rem]">
              From inquiry to integration
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/60">
              Each step is curated for safety and clarity — not urgency.
            </p>
          </Reveal>
          <ol className="mt-16 space-y-0">
            {funnel.map((step, i) => (
              <Reveal key={step.title} delayMs={i * 60}>
                <li className="grid gap-4 border-t border-cream/10 py-10 last:border-b md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-10">
                  <p className="font-serif text-3xl text-accent/70">0{i + 1}</p>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/60 sm:text-base">
                      {step.body}
                    </p>
                  </div>
                  <Link
                    href={step.href}
                    className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent hover:text-cream md:pt-2"
                  >
                    Learn →
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Educational notice relocated from hero */}
      <section className="border-y border-[var(--line)] bg-stone/40 py-10">
        <Container className="max-w-3xl text-center text-sm leading-relaxed text-muted">
          <strong className="font-medium text-forest">Educational notice:</strong> Information on this
          site is for inquiry and education only. It is not medical advice, a diagnosis, or a promise
          of cure or benefit. Ibogaine involves serious medical risks, including cardiac risk. Medical
          screening is essential. Always consult qualified clinicians. Not an approved U.S. clinic
          pathway.
        </Container>
      </section>
    </>
  );
}
