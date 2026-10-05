import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { JurisdictionNote } from "@/components/JurisdictionNote";
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

const pathways = [
  {
    href: "/ibogaine-for-addiction",
    title: "Addiction & opioid detox",
    body: "Observational literature (mostly oral) explores substance-use contexts. Interest is real; cure claims are not. IV controlled evidence remains sparse.",
  },
  {
    href: "/ibogaine-for-depression",
    title: "Depression & mood",
    body: "People compare ibogaine with ketamine clinics. Evidence for depression is limited; legality and cardiac risk diverge sharply.",
  },
  {
    href: "/ibogaine-for-ptsd",
    title: "PTSD & veteran-adjacent",
    body: "Public attention rose around magnesium–ibogaine protocols. MISTIC used oral ibogaine with IV magnesium — cite carefully.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Screening-first",
    body: "Cardiac history, ECG, medications, and go/no-go before any infusion conversation.",
  },
  {
    num: "02",
    title: "True IV psychoactive",
    body: "Ibogaine itself by intravenous infusion — not oral dosing labeled as “infusion.”",
  },
  {
    num: "03",
    title: "Monitored sanctuary",
    body: "Physician oversight, continuous telemetry, and a calm clinical setting designed for dignity.",
  },
];

const journey = [
  {
    step: "01",
    title: "Consult",
    body: "History, goals, medications, and contraindications — a private clinical conversation.",
  },
  {
    step: "02",
    title: "Cardiac & medical screening",
    body: "ECG, labs as indicated, and a clear go/no-go before any infusion is considered.",
  },
  {
    step: "03",
    title: "Monitored IV infusion",
    body: "Psychoactive intravenous ibogaine with continuous telemetry and physician oversight.",
  },
  {
    step: "04",
    title: "Integration",
    body: "Psychosocial planning after the acute window — structured, not ornamental.",
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

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-forest-deep text-cream">
        <Image
          src="/brand/hero-atmosphere.png"
          alt="Physician-supervised medical infusion room with cardiac monitor, IV pole, and white coat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center cinematic-img"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <Container className="relative flex min-h-[92vh] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32">
          <p className="section-label text-accent">Physician-supervised · Screening-first</p>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.75rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
            IV ibogaine infusion — discreet, monitored, exacting
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">
            True <strong className="font-medium text-cream">psychoactive intravenous ibogaine</strong>{" "}
            in a medical infusion setting: consult, cardiac screening, continuous monitoring, and
            structured integration afterward.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/apply" className="btn-gold">
              Start confidential application
            </Link>
            <Link href="/what-is-ibogaine-infusion" className="btn-ghost">
              What true IV infusion means
            </Link>
          </div>
          <div className="mt-14 max-w-2xl">
            <Disclaimer tone="dark" />
          </div>
        </Container>
      </section>

      <JurisdictionNote context="home" />

      {/* Definition / editorial */}
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto divider-gold" />
            <p className="section-label mt-6">Definition</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight text-forest sm:text-5xl lg:text-[3.25rem]">
              Clarity over clinic marketing language
            </h2>
          </div>
          <div className="prose-clinical mx-auto mt-12 max-w-2xl text-center [&_p]:text-[1.1rem]">
            <p>
              <strong>IV ibogaine infusion</strong> (also called intravenous ibogaine) is the psychoactive
              delivery of ibogaine by intravenous infusion under physician supervision. The patient journey
              parallels ketamine infusion clinics in <strong>journey shape only</strong> (
              <strong>consult → cardiac screening → monitored IV infusion → integration</strong>) —{" "}
              <em>not</em> legal, evidence, or risk equivalence. Continuous ECG/telemetry is non-negotiable
              because ibogaine can prolong the QTc interval.
            </p>
            <p>
              <strong>Evidence gap:</strong> Most published clinical literature — including Cherian et al.,{" "}
              <em>Nature Medicine</em> 2024 — describes <strong>oral</strong> ibogaine HCl, often with{" "}
              <strong>IV magnesium</strong> support, not IV ibogaine as the psychoactive dose. Controlled
              evidence for psychoactive IV ibogaine remains sparse. Ibogaine is U.S. Schedule I and not
              approved.
            </p>
            <p>
              On this site, “infusion” is not a spa label for oral dosing with a saline lock.{" "}
              <strong>Support IV ≠ psychoactive IV.</strong>{" "}
              <Link href="/what-is-ibogaine-infusion">Read the definition hub</Link>.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-paper p-8 sm:p-9"
              >
                <p className="font-serif text-3xl text-accent/80">{item.num}</p>
                <h3 className="mt-5 font-serif text-2xl text-forest">{item.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Setting — cinematic split */}
      <section className="relative overflow-hidden bg-forest-deep text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[480px] lg:min-h-[640px]">
            <Image
              src="/brand/suite-atmosphere.png"
              alt="Ketamine-clinic style infusion bay with ECG monitor, IV drip, and blood pressure cuff"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center cinematic-img"
            />
            <div className="suite-overlay absolute inset-0 lg:hidden" aria-hidden="true" />
          </div>
          <div className="relative flex items-center px-6 py-20 sm:px-12 sm:py-24 lg:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
              <Image
                src="/brand/brand-motif.png"
                alt=""
                fill
                sizes="50vw"
                className="object-cover object-right cinematic-img"
              />
            </div>
            <div className="relative max-w-lg">
              <p className="section-label">The setting</p>
              <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
                A monitored medical infusion setting
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
                White-coat medical care — not a hotel spa. Physician oversight, continuous cardiac
                monitoring, and a true psychoactive IV ibogaine infusion pathway in a clinical
                setting. Treatment location is{" "}
                <strong className="font-medium text-cream">shared after screening</strong> — not an
                approved U.S. clinic pathway.
              </p>
              <ul className="mt-8 space-y-4 border-t border-cream/15 pt-8 text-sm text-cream/70">
                <li className="flex gap-3 border-b border-cream/10 pb-4">
                  <span className="text-accent">—</span>
                  Continuous cardiac monitoring during the high-risk window
                </li>
                <li className="flex gap-3 border-b border-cream/10 pb-4">
                  <span className="text-accent">—</span>
                  Written clarity on psychoactive route vs support IV
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">—</span>
                  Integration planning after the acute window
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/how-it-works" className="btn-ghost !min-h-11">
                  How the journey works
                </Link>
                <Link href="/safety-and-screening" className="btn-gold !min-h-11">
                  Safety &amp; screening
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="section-label">The path</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
              How the medical journey works
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Four deliberate stages. No sales pitch between them — screening decides whether
              infusion conversation begins.
            </p>
          </div>
          <ol className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, i) => (
              <li
                key={item.step}
                className={`border-t border-[var(--line)] pt-8 pr-6 ${
                  i < journey.length - 1 ? "lg:border-r lg:pr-8" : ""
                } ${i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8 lg:pl-0"} lg:pl-0 ${
                  i > 0 ? "lg:pl-8" : ""
                }`}
              >
                <p className="font-serif text-4xl text-accent/70">{item.step}</p>
                <h3 className="mt-5 font-serif text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-muted">
            Step-by-step:{" "}
            <Link href="/how-it-works" className="font-medium text-forest-mid underline-offset-4 hover:underline">
              how it works
            </Link>
            . Cost diligence:{" "}
            <Link href="/blog/cost-of-ibogaine-treatment" className="font-medium text-forest-mid underline-offset-4 hover:underline">
              cost overview
            </Link>{" "}
            ·{" "}
            <Link href="/blog/how-to-choose-an-ibogaine-clinic" className="font-medium text-forest-mid underline-offset-4 hover:underline">
              clinic vetting
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Cardiac safety */}
      <section className="bg-forest py-24 text-cream sm:py-28">
        <Container className="max-w-3xl">
          <p className="section-label text-accent">Non-negotiable</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Cardiac safety
          </h2>
          <ul className="mt-10 space-y-0 text-base leading-relaxed text-cream/75">
            {[
              "Pre-treatment ECG and medication/electrolyte review",
              "Continuous cardiac monitoring during the high-risk window",
              "Physician oversight and emergency preparedness",
              "Written clarity on psychoactive route and any concurrent support IV",
            ].map((line) => (
              <li
                key={line}
                className="flex gap-4 border-b border-cream/10 py-5 first:border-t"
              >
                <span className="mt-1 text-accent" aria-hidden="true">
                  ◆
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm">
            <JurisdictionNote variant="inline" context="home" className="!text-cream/70 [&_strong]:!text-cream" />
            <p className="mt-4 text-sm text-cream/60">
              <Link href="/safety-and-screening" className="font-medium text-accent hover:underline">
                Safety &amp; screening
              </Link>{" "}
              ·{" "}
              <Link href="/blog/ibogaine-ecg-checklist" className="font-medium text-accent hover:underline">
                ECG checklist
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* By concern */}
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="section-label">Explore</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
                By concern
              </h2>
              <p className="mt-4 text-lg text-muted">
                Condition pages explain common questions in plain language — without inventing outcomes.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline"
            >
              See how the process works →
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pathways.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-[1.75rem] border border-[var(--line)] bg-paper p-8 transition hover:border-accent/40 hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-serif text-2xl text-forest group-hover:text-forest-mid">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                <span className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Compare + FAQ */}
      <section className="border-t border-[var(--line)] bg-paper py-24 sm:py-32">
        <Container className="grid gap-20 lg:grid-cols-2">
          <div>
            <p className="section-label">Context</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest">
              Compare carefully
            </h2>
            <ul className="mt-10 space-y-0">
              {[
                {
                  href: "/blog/ibogaine-vs-ketamine-for-addiction",
                  label: "Ketamine infusion",
                  note: "Shared IV journey shape; different legality, evidence, cardiac profile",
                },
                {
                  href: "/blog/ibogaine-vs-ayahuasca",
                  label: "Ayahuasca",
                  note: "Different chemistry and setting",
                },
                {
                  href: "/blog/ibogaine-vs-traditional-rehab",
                  label: "Traditional rehab",
                  note: "Different model; not interchangeable",
                },
                {
                  href: "/blog/ibogaine-oral-vs-iv",
                  label: "Oral vs IV",
                  note: "Route honesty for readers and LLMs",
                },
              ].map((item) => (
                <li key={item.href} className="border-b border-[var(--line)] py-5 first:border-t">
                  <Link href={item.href} className="group block">
                    <span className="font-serif text-xl text-forest group-hover:text-forest-mid">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Questions</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest">
              Have questions?
            </h2>
            <div className="mt-10">
              {homeFaqs.map((item) => (
                <details key={item.q} className="faq-item group py-5">
                  <summary className="flex items-start justify-between gap-4 font-serif text-xl text-forest">
                    <span>{item.q}</span>
                    <span
                      className="mt-1 shrink-0 text-accent transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Start with safety, then apply confidentially" />
    </>
  );
}
