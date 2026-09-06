import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
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
    body: "Ongoing telemetry, hydration/electrolytes, ataxia precautions, psychiatric check-ins, and clear escalation criteria. Luxury amenities never replace observation standards.",
  },
  {
    step: "05",
    title: "Integration and aftercare",
    body: "Relapse-prevention or continuing SUD care, therapy continuity for mood/PTSD goals, medication plans with outpatient clinicians, and honest expectation-setting: observational signals ≠ guaranteed remission.",
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
    q: "Is ibogaine FDA-approved?",
    a: "No. It is Schedule I in the U.S. and not FDA-approved for any indication.",
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
        description: 'How IV ibogaine infusion works: consult, cardiac screening, monitored intravenous ibogaine, recovery observation, and integration—plus oral-evidence honesty.',
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
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            How IV ibogaine infusion works
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            A physician-supervised medical journey in which{" "}
            <strong className="text-ink">psychoactive ibogaine is delivered intravenously</strong> — not
            merely an oral dose with a support IV: consult → cardiac screening → monitored IV infusion →
            recovery → integration.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl space-y-6">
          <div className="prose-clinical">
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
          </div>

          {steps.map((item) => (
            <article
              key={item.step}
              className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</p>
              <h2 className="mt-2 font-serif text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
            </article>
          ))}

          <div className="prose-clinical">
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
      <CTASection title="Begin with a confidential screening consult" />
    </>
  );
}
