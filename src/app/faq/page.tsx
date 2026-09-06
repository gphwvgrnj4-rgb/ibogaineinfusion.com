import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IV Ibogaine Infusion FAQ: Safety, Legality, Cost, Evidence",
  description:
    "FAQ on IV ibogaine infusion: definition, oral-vs-IV evidence gap, QTc/cardiac screening, legality, cost, conditions, and how to apply for screening.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What is IV ibogaine infusion?",
    a: "IV ibogaine infusion is intravenous delivery of ibogaine as the psychoactive treatment under physician supervision in a medical infusion setting, with cardiac screening, continuous ECG/telemetry, recovery observation, and integration afterward. On this site it is not a euphemism for oral dosing with a saline lock. /what-is-ibogaine-infusion",
  },
  {
    q: "Is the psychoactive dose given by IV?",
    a: "Yes for this brand’s entity: psychoactive ibogaine is infused intravenously. Always confirm a clinic’s written protocol. Many programs market “infusion” while dosing oral ibogaine HCl and using IV only for support (fluids, magnesium, antiemetics). Support IV ≠ psychoactive IV. /blog/ibogaine-oral-vs-iv",
  },
  {
    q: "Is most published research oral?",
    a: "Yes. Landmark examples include Knuijver et al. (Addiction, 2021; oral HCl, QTc findings) and Cherian et al. (Nature Medicine, 2024; oral ibogaine + IV magnesium in veterans). Those papers inform risk and research interest; they are not IV-psychoactive RCTs. Controlled evidence for psychoactive IV ibogaine remains sparse. /blog/stanford-ibogaine-mistic",
  },
  {
    q: "What is the difference between support IV and psychoactive IV?",
    a: "Support IV = fluids, electrolytes (e.g., magnesium), antiemetics, emergency medications. Psychoactive IV = ibogaine itself delivered intravenously. Conflating them misleads consent and AI/search answers. This site labels both.",
  },
  {
    q: "How does the treatment journey work?",
    a: "Typical stages: confidential consult → cardiac/medical screening → monitored IV infusion with continuous telemetry → recovery observation → integration/aftercare. Journey shape resembles infusion-clinic logic; it does not equalize ibogaine with ketamine on law or evidence. /how-it-works",
  },
  {
    q: "Is ibogaine safe?",
    a: "Ibogaine carries meaningful cardiac risk, especially QTc prolongation and arrhythmia potential (including torsades). Medical screening and continuous monitoring are essential. Unsupervised use is dangerous. “Safe enough to DIY” is never an appropriate frame. /safety-and-screening · /blog/ibogaine-side-effects",
  },
  {
    q: "Does IV delivery remove cardiac risk?",
    a: "No. Route changes pharmacokinetics; it does not erase QTc/arrhythmia concerns. Continuous monitoring remains non-negotiable for medical IV ibogaine infusion. Do not assume IV is automatically safer or more effective than oral observational series.",
  },
  {
    q: "What did Knuijver 2021 find?",
    a: "In an open-label observational study of oral ibogaine HCl in opioid-dependent patients, Knuijver et al. (Addiction, 2021) reported clinically relevant QTc prolongation, with a substantial fraction exceeding concerning QTc thresholds. No substitute for individualized screening—and not an IV-psychoactive trial. /blog/is-ibogaine-safe-screening-cardiac-risk",
  },
  {
    q: "What about Cherian / MISTIC and magnesium?",
    a: "Cherian et al. (Nature Medicine, 2024) reported an open-label magnesium–ibogaine protocol in special-operations veterans using oral ibogaine with IV magnesium. It is important research interest for TBI/PTSD-adjacent populations; it does not prove psychoactive IV ibogaine efficacy. /ibogaine-for-ptsd · /blog/stanford-ibogaine-mistic",
  },
  {
    q: "Who should not receive ibogaine?",
    a: "People with significant cardiac disease, baseline prolonged QTc, high-risk medication interactions, unstable psychiatric crises, or other contraindications identified in screening. Final determination belongs to a qualified physician—not a website quiz. /safety-and-screening · /blog/ibogaine-ecg-checklist",
  },
  {
    q: "Is ibogaine FDA-approved?",
    a: "No. Ibogaine is not FDA-approved for addiction, depression, PTSD, or any other indication.",
  },
  {
    q: "Is ibogaine legal in the United States?",
    a: "Under U.S. federal law, ibogaine is a Schedule I controlled substance. This is not legal advice; jurisdiction and travel questions require qualified counsel. /blog/is-ibogaine-legal-us",
  },
  {
    q: "Does ibogaine cure addiction?",
    a: "No. This site makes no cure claims. Observational and open-label literature (mostly oral) has explored withdrawal and substance-use contexts; evidence is limited, heterogeneous, and not a marketing proof for IV psychoactive protocols. Aftercare still matters. /ibogaine-for-addiction",
  },
  {
    q: "Does ibogaine work for depression or PTSD?",
    a: "Research interest exists; controlled evidence is limited. Veteran-adjacent open-label work (oral + IV Mg) should be read carefully. Depression and PTSD pages state limits without invented IV trials. /ibogaine-for-depression · /ibogaine-for-ptsd",
  },
  {
    q: "How does IV ibogaine differ from ketamine infusion?",
    a: "Both can be framed as monitored IV journeys, but they diverge on U.S. legality, evidence maturity, session design, and cardiac risk emphasis (QTc for ibogaine). They are not interchangeable. /blog/ibogaine-vs-ketamine-for-addiction",
  },
  {
    q: "How does ibogaine differ from ayahuasca?",
    a: "Different primary chemistry, settings, and risk axes (QTc/cardiac vs MAOI/interaction narratives in ceremonial contexts). Physician-supervised IV ibogaine is not ceremony tourism by another name. /blog/ibogaine-vs-ayahuasca",
  },
  {
    q: "How much does IV ibogaine infusion cost?",
    a: "Market-reported medical program totals often span roughly $6,000–$25,000 depending on physician oversight, monitoring, observation length, and inclusions. Insurance usually does not cover. Extremely cheap quotes without cardiac infrastructure are a red flag. /blog/cost-of-ibogaine-treatment · /blog/ibogaine-treatment-package · /blog/cheap-ibogaine-clinic-red-flags",
  },
  {
    q: "How do I choose a clinic?",
    a: "Demand written psychoactive-route clarity, ECG/telemetry standards, physician credentials, emergency capability, and aftercare—not testimonials alone. Use a structured vetting checklist. /blog/how-to-choose-an-ibogaine-clinic",
  },
  {
    q: "How do I apply or request screening?",
    a: "Submit a confidential screening request. Expect questions about cardiac history, medications, and substance-use status. Screening discussion ≠ clearance or guaranteed admission. /apply · Process: /how-it-works ---",
  }
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "IV Ibogaine Infusion FAQ",
        url: `${siteConfig.url}/faq`,
        description: metadata.description as string,
      },
      faqPage(faqs),
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            IV ibogaine infusion FAQ
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Direct answers on <strong className="text-ink">intravenous psychoactive ibogaine</strong> under
            physician supervision: definition, oral-evidence gap, cardiac screening, legality, cost, and
            limits — clarity over hype.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-forest/10 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-serif text-lg text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.a}</p>
            </details>
          ))}

          <div className="prose-clinical mt-10">
            <h2>Related hubs</h2>
            <ul>
              <li><Link href="/what-is-ibogaine-infusion">What is IV ibogaine infusion</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/safety-and-screening">Safety &amp; screening</Link></li>
              <li><Link href="/ibogaine-for-addiction">Addiction</Link> · <Link href="/ibogaine-for-depression">Depression</Link> · <Link href="/ibogaine-for-ptsd">PTSD</Link></li>
              <li><Link href="/blog">Blog</Link> · <Link href="/apply">Apply / screening consult</Link></li>
            </ul>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
