import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { faqPage, organizationAndWebsite } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IV Ibogaine Infusion | Physician-Supervised Medical Care",
  description:
    "Intravenous ibogaine infusion under physician supervision—with cardiac screening and monitoring. Honest education on evidence gaps, safety, and next steps.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "What is IV ibogaine infusion?",
    a: "Intravenous delivery of ibogaine as the psychoactive treatment under physician supervision in a medical infusion setting, with cardiac screening, continuous monitoring, and integration afterward.",
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
    a: "Read safety and how-it-works education, then submit a confidential screening request at /apply.",
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
            IV ibogaine infusion: physician-supervised, monitored, screening-first
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Physician-supervised <strong className="text-cream">intravenous psychoactive ibogaine</strong> in
            a medical infusion setting — consult, cardiac screening, continuous monitoring, and structured
            integration afterward.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#c9a46a]"
            >
              Request confidential screening consult
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

      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Definition</h2>
          <p>
            <strong>IV ibogaine infusion</strong> (also called intravenous ibogaine) is the psychoactive
            delivery of ibogaine by intravenous infusion under physician supervision. The patient journey
            parallels ketamine infusion clinics: <strong>consult → cardiac screening → monitored IV infusion →
            integration</strong>. Continuous ECG/telemetry is non-negotiable because ibogaine can prolong the
            QTc interval.
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
        </Container>
      </section>

      <section className="bg-sage/25 py-14">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium text-forest">Cardiac safety (non-negotiable)</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
            <li>Pre-treatment ECG and medication/electrolyte review</li>
            <li>Continuous cardiac monitoring during the high-risk window</li>
            <li>Physician oversight and emergency preparedness</li>
            <li>Written clarity on psychoactive route and any concurrent support IV</li>
          </ul>
          <p className="mt-4 text-sm text-ink/75">
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

      <section className="py-16">
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

      <section className="border-t border-forest/10 bg-white py-14">
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
            <div key={item.q} className="mb-4">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </Container>
      </section>

      <CTASection title="Start with safety, then request screening" />
    </>
  );
}
