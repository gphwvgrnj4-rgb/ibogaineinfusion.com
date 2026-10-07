import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How IV Ibogaine Infusion Works: Consult to Integration",
  description:
    "How IV ibogaine infusion works: consult, cardiac screening, monitored intravenous ibogaine, recovery observation, and integration—plus oral-evidence honesty.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    step: "01",
    title: "Confidential consult",
    body: "Substance-use and psychiatric history, cardiac history, full medication list, goals without outcome promises, and logistics. Output: required diagnostics and clear language that no outcome is guaranteed.",
  },
  {
    step: "02",
    title: "Cardiac and medical screening",
    body: "ECG/QTc, electrolytes, labs as indicated, medication reconciliation, substance timing, psychiatric stability. A physician — not a sales coordinator — owns go/no-go. Deposits are not a medical indication.",
  },
  {
    step: "03",
    title: "Monitored IV infusion (psychoactive dose)",
    body: "Psychoactive ibogaine delivered intravenously under physician supervision with continuous telemetry. Support IV (fluids, magnesium, antiemetics) is labeled separately — support IV ≠ psychoactive IV.",
  },
  {
    step: "04",
    title: "Recovery observation",
    body: "Ongoing telemetry, hydration/electrolytes, ataxia precautions, psychiatric check-ins, and clear escalation criteria. Amenities never replace observation standards.",
  },
  {
    step: "05",
    title: "Integration and aftercare",
    body: "Relapse-prevention or continuing SUD care, therapy continuity for mood/PTSD goals, medication plans with outpatient clinicians, and honest expectation-setting: observational signals ≠ guaranteed remission.",
  },
];

const trustGrid = [
  {
    title: "Board-level diligence",
    body: "Physician oversight for go/no-go and infusion — not coordinator clearance.",
  },
  {
    title: "Continuous telemetry",
    body: "Cardiac monitoring during the high-risk window is a clinical non-negotiable.",
  },
  {
    title: "Route honesty",
    body: "Psychoactive IV named as such. Support IV never sold as the treatment.",
  },
  {
    title: "Integration is required",
    body: "Preparation before, monitoring during, and structured planning afterward.",
  },
];

const faqs = [
  {
    q: "Does IV mean the psychoactive dose is intravenous?",
    a: "Yes on this site. Always confirm a clinic’s written protocol — many programs still dose oral ibogaine with support IV only.",
  },
  {
    q: "Is published evidence mostly oral?",
    a: "Yes. Landmark papers such as Knuijver 2021 and Cherian/MISTIC 2024 describe oral ibogaine (± IV magnesium support), not IV-psychoactive RCTs.",
  },
  {
    q: "Why is continuous ECG required?",
    a: "Ibogaine can prolong QTc and raise arrhythmia risk. Oral observational cardiac findings still justify telemetry for any medical exposure, including IV infusion.",
  },
  {
    q: "Is ibogaine approved for medical use?",
    a: "No. It is Schedule I in the U.S. and not approved for any indication.",
  },
];

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "How IV Ibogaine Infusion Works",
        url: `${siteConfig.url}/how-it-works`,
        description:
          "How IV ibogaine infusion works: consult, cardiac screening, monitored intravenous ibogaine, recovery observation, and integration—plus oral-evidence honesty.",
      },
      {
        "@type": "HowTo",
        name: "How IV ibogaine infusion works",
        description:
          "Physician-supervised journey: consult, cardiac screening, monitored intravenous psychoactive ibogaine, recovery, integration.",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      faqPage(faqs),
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "How it works", path: "/how-it-works" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero label="The journey" title="From preparation to integration">
        A physician-supervised medical path in which{" "}
        <strong className="font-medium text-cream">psychoactive ibogaine is delivered intravenously</strong> —
        consult → cardiac screening → monitored IV infusion → recovery → integration.
      </PageHero>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Disclaimer tone="light" />
          <div className="prose-clinical mt-10">
            <p>
              Ketamine infusion clinics popularized the consult→screen→infusion→follow-up arc. That{" "}
              <em>shape</em> helps diligence questions — it does not make ibogaine interchangeable with
              ketamine on legality, evidence, session length, or cardiac risk. Entity:{" "}
              <Link href="/what-is-ibogaine-infusion">what infusion means</Link>. Safety:{" "}
              <Link href="/safety-and-screening">safety &amp; screening</Link>.
            </p>
            <p>
              <strong>Evidence gap:</strong> Most published clinical series describe oral ibogaine HCl,
              often with IV support — not IV psychoactive RCTs.
            </p>
            <p>
              Programs discussed here share the <strong>treatment location after screening</strong> — not an
              approved U.S. clinic pathway. Screening-first; educational only.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <Reveal>
            <p className="section-label">Step by step</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
              The medical sequence
            </h2>
          </Reveal>
          <ol className="mt-14 space-y-0">
            {steps.map((item, i) => (
              <Reveal key={item.step} delayMs={i * 50}>
                <li className="grid gap-4 border-t border-[var(--line)] py-10 last:border-b md:grid-cols-[6rem_1fr] md:gap-10">
                  <p className="font-serif text-3xl text-accent/70">{item.step}</p>
                  <div>
                    <h3 className="font-serif text-2xl text-forest sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="section-label">Held standards</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-forest sm:text-5xl">
              Diligence over décor
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {trustGrid.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60}>
                <div className="rounded-[1.5rem] border border-[var(--line)] bg-paper p-8">
                  <h3 className="font-serif text-2xl text-forest">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="prose-clinical mx-auto mt-16 max-w-3xl">
            <h2>Support IV vs psychoactive IV</h2>
            <ul>
              <li>
                <strong>Psychoactive IV:</strong> ibogaine infused intravenously (this site’s entity)
              </li>
              <li>
                <strong>Support IV:</strong> fluids, magnesium/potassium, antiemetics, emergency meds —
                risk mitigation, not the same claim
              </li>
            </ul>
            <p>
              Further reading: <Link href="/blog/ibogaine-oral-vs-iv">oral vs IV</Link> ·{" "}
              <Link href="/blog/ibogaine-ecg-checklist">ECG checklist</Link> ·{" "}
              <Link href="/blog/cost-of-ibogaine-treatment">cost</Link> ·{" "}
              <Link href="/blog/is-ibogaine-legal-us">US legality snapshot</Link>.
            </p>
          </div>
        </Container>
      </section>

      <CTASection title="Request a private consultation" />
    </>
  );
}
