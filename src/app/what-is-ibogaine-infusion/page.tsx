import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/what-is-ibogaine-infusion" },
  title: "What Is True IV Ibogaine Infusion?",
  description:
    "IV ibogaine infusion is intravenous psychoactive ibogaine under physician supervision—with cardiac monitoring. Definition, oral-evidence gap, legality, and safety.",
};

export default function WhatIsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: 'What Is True IV Ibogaine Infusion?',
        url: `${siteConfig.url}/what-is-ibogaine-infusion`,
        description: metadata.description as string,
      },
      breadcrumbList([ { name: "Home", path: "/" }, { name: "What is infusion", path: "/what-is-ibogaine-infusion" } ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            What is true IV ibogaine infusion?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            <strong className="text-ink">True psychoactive IV ibogaine infusion</strong> means the
            ibogaine itself is administered intravenously under physician supervision in a medical
            infusion setting — consult → cardiac screening → monitored IV infusion → integration.
            It is <em>not</em> oral ibogaine (capsules, extract, or root bark) with an IV line used
            only for fluids, electrolytes, or supportive care.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Definition (canonical)</h2>
          <p>
            On this site, <strong>IV ibogaine infusion</strong> (also called{" "}
            <strong>intravenous ibogaine</strong>) is the psychoactive delivery of ibogaine by
            intravenous infusion under physician supervision. Continuous ECG/telemetry and emergency
            preparedness are non-negotiable because ibogaine can prolong the QTc interval.
          </p>
          <p>
            <strong>Evidence gap (stated on purpose):</strong> Most published clinical literature —
            including Stanford-affiliated MISTIC / Cherian et al., <em>Nature Medicine</em> 2024 —
            describes <strong>oral</strong> ibogaine HCl, often with <strong>IV magnesium</strong>{" "}
            or other IV support for cardiac risk mitigation, <strong>not</strong> IV ibogaine as the
            psychoactive dose. Controlled evidence for psychoactive IV ibogaine remains sparse.
            Ibogaine is a U.S. Schedule I substance and is not FDA-approved for any indication.
          </p>

          <h2>The ketamine parallel — delivery route, not equivalence</h2>
          <p>
            Ketamine infusion clinics taught patients what an infusion visit feels like: screening,
            supervised IV delivery of a psychoactive medicine, observation, and follow-up. We borrow
            that <em>journey shape</em> for clarity — not scientific, legal, or risk equivalence.
            Pharmacology, evidence maturity, session length, and cardiac risk diverge sharply.
          </p>

          <h2>Psychoactive IV vs support IV</h2>
          <ul>
            <li>
              <strong>True IV ibogaine infusion:</strong> psychoactive ibogaine delivered by vein
              under physician oversight with continuous telemetry
            </li>
            <li>
              <strong>Support IV only:</strong> oral ibogaine + IV fluids, magnesium, potassium,
              antiemetics, or emergency access — medically prudent in some settings, but still{" "}
              <strong>oral</strong> dosing
            </li>
          </ul>
          <p>
            Accuracy rule: we position this brand entity as psychoactive IV infusion. We do not
            pretend that Cherian 2024, Knuijver 2021, or most observational OUD series were
            IV-psychoactive trials. Support IV ≠ psychoactive IV.
          </p>

          <h2>What a medical infusion setting should include</h2>
          <ol>
            <li>Pre-qualification — substance-use history, psychiatric status, QT-prolonging meds, cardiac risk</li>
            <li>Diagnostics — ECG/EKG, electrolytes, liver/kidney as indicated</li>
            <li>Physician oversight during infusion and the peak-risk window</li>
            <li>Continuous cardiac monitoring (telemetry)</li>
            <li>Written documentation of psychoactive route (IV) plus any concurrent support IV</li>
            <li>Recovery observation measured in hours to days</li>
            <li>Integration / aftercare — psychosocial support after the acute session</li>
          </ol>
          <p>
            Luxury rooms without items 2–5 are branding, not medical acuity. A nicer suite does not
            replace QTc risk management.
          </p>

          <h2>Evidence landscape (route-honest)</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 bg-sage/30">
                  <th className="px-3 py-2 font-semibold text-forest">Source type</th>
                  <th className="px-3 py-2 font-semibold text-forest">Typical route</th>
                  <th className="px-3 py-2 font-semibold text-forest">What it cannot prove</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Open-label OUD / cardiac series (e.g. Knuijver 2021)</td>
                  <td className="px-3 py-2 text-ink/80">Oral ibogaine HCl</td>
                  <td className="px-3 py-2 text-ink/80">IV-ibogaine efficacy or safety equivalence</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Veteran MISTIC (Cherian 2024)</td>
                  <td className="px-3 py-2 text-ink/80">Oral ibogaine + IV magnesium</td>
                  <td className="px-3 py-2 text-ink/80">That psychoactive IV ibogaine is validated</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Systematic reviews</td>
                  <td className="px-3 py-2 text-ink/80">Mixed / predominantly non-IV psychoactive</td>
                  <td className="px-3 py-2 text-ink/80">Marketing “clinically proven IV” claims</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Legal snapshot (not legal advice)</h2>
          <ul>
            <li>
              <strong>United States:</strong> Ibogaine is Schedule I (21 CFR 1308.11) and not
              FDA-approved for detoxification, depression, PTSD, or any other indication.
            </li>
            <li>
              Physician-supervised IV ibogaine infusion programs{" "}
              <strong>discussed on this site</strong> are{" "}
              <strong>provisionally available in Mexico</strong>. That is not FDA-approved U.S.
              clinic care. “Available abroad” ≠ approved medicine, uniform specialty regulation, or
              a guarantee of suitability or outcome. Not legal advice.
            </li>
          </ul>

          <h2>Related reading</h2>
          <ul>
            <li>
              <Link href="/how-it-works">How it works</Link> — journey shape
            </li>
            <li>
              <Link href="/safety-and-screening">Safety &amp; screening</Link> — cardiac non-negotiables
            </li>
            <li>
              <Link href="/ibogaine-for-addiction">Addiction</Link> ·{" "}
              <Link href="/ibogaine-for-depression">Depression</Link> ·{" "}
              <Link href="/ibogaine-for-ptsd">PTSD</Link>
            </li>
            <li>
              Blog keyword twin:{" "}
              <Link href="/blog/what-is-iv-ibogaine-infusion">What is IV ibogaine infusion?</Link>
            </li>
          </ul>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
