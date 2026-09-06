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
    "Intravenous ibogaine infusion under physician supervision—with cardiac screening and monitoring. Provisional Mexico availability. Honest education on evidence gaps, safety, and next steps.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "What is IV ibogaine infusion?",
    a: "Intravenous delivery of ibogaine as the psychoactive treatment under physician supervision in a medical infusion setting, with cardiac screening, continuous monitoring, and integration afterward.",
  },
  {
    q: "Are programs available in Mexico?",
    a: "Physician-supervised IV ibogaine infusion programs discussed on this site are provisionally available in Mexico. That is not the same as FDA-approved care in the United States. Ibogaine remains Schedule I federally and is not FDA-approved. Foreign availability is not legal advice, not a guarantee you will qualify, and not a prediction of benefit or safety. See /safety-and-screening and /blog/is-ibogaine-legal-us (educational only).",
  },
  {
    q: "Is published research mostly oral?",
    a: "Yes. Landmark examples include Knuijver et al. (Addiction, 2021; oral HCl, QTc) and Cherian et al. (Nature Medicine, 2024; oral ibogaine + IV magnesium). Controlled IV-psychoactive evidence is sparse.",
  },
  {
    q: "Is ibogaine FDA-approved?",
    a: "No. It is not FDA-approved for any indication and is Schedule I in the United States.",
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
    title: "Screening-first",
    body: "Cardiac history, ECG, medications, and go/no-go before any infusion conversation.",
  },
  {
    title: "True IV psychoactive",
    body: "Ibogaine itself by intravenous infusion — not oral dosing labeled as “infusion.”",
  },
  {
    title: "Monitored sanctuary",
    body: "Physician oversight, continuous telemetry, and a calm clinical setting designed for dignity.",
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

      <section className="relative min-h-[88vh] overflow-hidden bg-forest text-cream">
        <Image
          src="/brand/hero-atmosphere.png"
          alt="Physician-supervised medical infusion room with cardiac monitor, IV pole, and white coat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <Container className="relative flex min-h-[88vh] flex-col justify-center py-20 sm:py-28">
          <p className="section-label text-accent">Medical infusion clinic · Screening-first</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4rem]">
            IV ibogaine infusion — physician-supervised, monitored, honest
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/88 sm:text-xl">
            True <strong className="font-semibold text-cream">psychoactive intravenous ibogaine</strong>{" "}
            in a medical infusion setting: consult, cardiac screening, continuous monitoring, and
            structured integration afterward.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/apply"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink shadow-[0_12px_32px_rgba(176,141,87,0.35)] hover:bg-[#c9a46a]"
            >
              Start confidential application
            </Link>
            <Link
              href="/what-is-ibogaine-infusion"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 bg-cream/5 px-7 py-3 text-sm font-medium text-cream backdrop-blur-sm hover:bg-cream/12"
            >
              What true IV infusion means
            </Link>
          </div>
          <div className="mt-12 max-w-3xl">
            <Disclaimer className="border-cream/20 bg-cream/10 text-cream/90 backdrop-blur-sm [&_strong]:text-accent" />
          </div>
        </Container>
      </section>

      <JurisdictionNote context="home" />

      <section className="border-b border-forest/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">Definition</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-forest sm:text-4xl">
              Clarity over clinic marketing language
            </h2>
          </div>
          <div className="prose-clinical mx-auto mt-10 max-w-3xl">
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
              FDA-approved.
            </p>
            <p>
              On this site, “infusion” is not a spa label for oral dosing with a saline lock.{" "}
              <strong>Support IV ≠ psychoactive IV.</strong>{" "}
              <Link href="/what-is-ibogaine-infusion">Read the definition hub</Link>.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title} className="card-elevated p-7">
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest py-0 text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/brand/suite-atmosphere.png"
              alt="Ketamine-clinic style infusion bay with ECG monitor, IV drip, and blood pressure cuff"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="suite-overlay absolute inset-0 lg:hidden" aria-hidden="true" />
          </div>
          <div className="relative flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
            <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
              <Image
                src="/brand/brand-motif.png"
                alt=""
                fill
                sizes="50vw"
                className="object-cover object-right"
              />
            </div>
            <div className="relative max-w-xl">
              <p className="section-label">The setting</p>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                A monitored medical infusion setting
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/85">
                White-coat medical care — not a hotel spa. Physician oversight, continuous cardiac
                monitoring, and a true psychoactive IV ibogaine infusion pathway in a clinical
                setting. Programs discussed on this site are{" "}
                <strong className="text-cream">provisionally available in Mexico</strong> — not an
                FDA-approved U.S. clinic pathway.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
                <li>• Continuous cardiac monitoring during the high-risk window</li>
                <li>• Written clarity on psychoactive route vs support IV</li>
                <li>• Integration planning after the acute window</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/how-it-works"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-cream/35 px-6 py-2.5 text-sm font-medium text-cream hover:bg-cream/10"
                >
                  How the journey works
                </Link>
                <Link
                  href="/safety-and-screening"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-ink hover:bg-[#c9a46a]"
                >
                  Safety &amp; screening
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage/25 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="section-label">Non-negotiable</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-forest sm:text-4xl">
            Cardiac safety
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-ink/80">
            <li>Pre-treatment ECG and medication/electrolyte review</li>
            <li>Continuous cardiac monitoring during the high-risk window</li>
            <li>Physician oversight and emergency preparedness</li>
            <li>Written clarity on psychoactive route and any concurrent support IV</li>
          </ul>
          <JurisdictionNote variant="card" context="home" className="mt-10" />
          <p className="mt-6 text-sm text-ink/75">
            <Link href="/safety-and-screening" className="font-semibold text-forest-mid hover:underline">
              Safety &amp; screening
            </Link>{" "}
            ·{" "}
            <Link href="/blog/ibogaine-ecg-checklist" className="font-semibold text-forest-mid hover:underline">
              ECG checklist
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Explore</p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                By concern
              </h2>
              <p className="mt-3 max-w-xl text-ink/75">
                Condition pages explain common questions in plain language — without inventing outcomes.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-forest-mid underline-offset-4 hover:underline"
            >
              See how the process works →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pathways.map((item) => (
              <Link key={item.href} href={item.href} className="card-elevated block bg-cream p-7">
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-forest/10 bg-white py-20 sm:py-24">
        <Container className="prose-clinical max-w-3xl">
          <h2>How the medical journey works</h2>
          <ol>
            <li>Consult — history, goals, medications, contraindications</li>
            <li>Cardiac &amp; medical screening — ECG, labs as indicated, go/no-go</li>
            <li>Monitored IV infusion — psychoactive intravenous ibogaine + telemetry</li>
            <li>Integration / aftercare — psychosocial planning after the acute window</li>
          </ol>
          <p>
            Step-by-step: <Link href="/how-it-works">how it works</Link>. Cost diligence:{" "}
            <Link href="/blog/cost-of-ibogaine-treatment">cost overview</Link> ·{" "}
            <Link href="/blog/how-to-choose-an-ibogaine-clinic">clinic vetting</Link>.
          </p>

          <h2>Compare carefully</h2>
          <ul>
            <li>
              <Link href="/blog/ibogaine-vs-ketamine-for-addiction">Ketamine infusion</Link> — shared IV
              journey shape; different legality, evidence, cardiac profile
            </li>
            <li>
              <Link href="/blog/ibogaine-vs-ayahuasca">Ayahuasca</Link> — different chemistry and setting
            </li>
            <li>
              <Link href="/blog/ibogaine-vs-traditional-rehab">Traditional rehab</Link> — different model;
              not interchangeable
            </li>
            <li>
              <Link href="/blog/ibogaine-oral-vs-iv">Oral vs IV</Link> — route honesty for readers and LLMs
            </li>
          </ul>

          <h2>Homepage FAQ</h2>
          {homeFaqs.map((item) => (
            <div key={item.q} className="mb-5">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </Container>
      </section>

      <CTASection title="Start with safety, then apply confidentially" />
    </>
  );
}
