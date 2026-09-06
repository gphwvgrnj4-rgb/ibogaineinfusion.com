import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/ibogaine-for-depression" },
  title: "Ibogaine for Depression",
  description:
    "IV ibogaine infusion for depression is an area of interest with limited controlled evidence. Medical context, oral-lit gap, risks, and how it differs from ketamine.",
};

export default function DepressionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: 'Ibogaine for Depression',
        url: `${siteConfig.url}/ibogaine-for-depression`,
        description: metadata.description as string,
      },
      breadcrumbList([ { name: "Home", path: "/" }, { name: "Ibogaine for depression", path: "/ibogaine-for-depression" } ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">Ibogaine for depression</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Depression care already includes established pathways — psychotherapy, medications,
            interventional psychiatry, and more. People sometimes ask whether{" "}
            <strong className="text-ink">IV ibogaine infusion</strong> might help mood symptoms.
            Evidence for mood benefit is limited; much public conversation extrapolates from
            addiction studies or oral-route observational work. Ibogaine is not FDA-approved for
            depression.
          </p>
          <Disclaimer className="mt-8" />
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Programs discussed on this site for physician-supervised IV ibogaine infusion are{" "}
            <strong className="text-ink">provisionally available in Mexico</strong> — not an
            FDA-approved U.S. clinic treatment. Educational only; not legal advice.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Keep established care in the frame</h2>
          <p>
            If you are living with depression, continuity with qualified clinicians comes first.
            Exploring ibogaine as an educational topic should not interrupt medications abruptly or
            replace urgent mental-health care. Active suicidal crisis requires emergency and
            psychiatric pathways — not an inquiry form.
          </p>

          <h2>What we can responsibly say</h2>
          <ul>
            <li>There is research interest in ibogaine/noribogaine and mood-related outcomes</li>
            <li>
              Some observational contexts (including veteran cohorts with PTSD/depression symptom
              measures) report open-label changes — often after <strong>oral</strong> ibogaine
              protocols
            </li>
            <li>Cardiac risk (QTc) is a central safety theme across exposure routes</li>
            <li>
              This site’s entity is IV psychoactive infusion under physician supervision, with
              honest labeling that IV controlled evidence is sparse
            </li>
          </ul>
          <p>
            <strong>Cannot say:</strong> FDA-approved antidepressant; guaranteed remission;
            “proven by Nature Medicine as IV therapy” (Cherian 2024 is oral ibogaine + IV
            magnesium, open-label); equivalent evidence maturity to ketamine clinic protocols.
          </p>

          <h2>IV ibogaine vs ketamine for depression</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 bg-sage/30">
                  <th className="px-3 py-2 font-semibold text-forest">Axis</th>
                  <th className="px-3 py-2 font-semibold text-forest">Ketamine / esketamine</th>
                  <th className="px-3 py-2 font-semibold text-forest">IV ibogaine infusion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Evidence maturity</td>
                  <td className="px-3 py-2 text-ink/80">More clinical infrastructure</td>
                  <td className="px-3 py-2 text-ink/80">Limited; sparse IV controlled data</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">U.S. regulatory posture</td>
                  <td className="px-3 py-2 text-ink/80">Approved anesthetic; esketamine labeled pathway</td>
                  <td className="px-3 py-2 text-ink/80">Schedule I; not FDA-approved</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Dominant risk narrative</td>
                  <td className="px-3 py-2 text-ink/80">Dissociation, BP/HR, rare psych AEs</td>
                  <td className="px-3 py-2 text-ink/80">QTc / arrhythmia + prolonged intensity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Deep dive:{" "}
            <Link href="/blog/ibogaine-vs-ketamine-for-addiction">ibogaine vs ketamine</Link>.
          </p>

          <h2>How the infusion journey relates to depression care</h2>
          <ol>
            <li>Psychiatric history and current regimen review (including QT-prolonging agents)</li>
            <li>Medical/cardiac clearance</li>
            <li>Physician-supervised IV ibogaine infusion with telemetry</li>
            <li>Observation through the acute window</li>
            <li>Integration: therapy continuity, medication plan, safety planning</li>
          </ol>

          <h2>Overlap with PTSD narratives</h2>
          <p>
            Depression searches often co-travel with PTSD and veteran TBI discussions. Open-label
            magnesium–ibogaine work in special operations veterans measured multiple symptom domains
            after <strong>oral</strong> ibogaine with <strong>IV magnesium</strong>. That paper is
            research landscape — not proof that IV psychoactive ibogaine is an approved depression
            treatment. See <Link href="/ibogaine-for-ptsd">ibogaine for PTSD</Link>.
          </p>

          <h2>Psychiatric and medical caution</h2>
          <ul>
            <li>Medication washout or changes must be clinician-directed</li>
            <li>Cardiac screening remains relevant regardless of psychiatric motivation</li>
            <li>Integration support matters when intense experiences intersect with mood disorders</li>
            <li>Expectancy and temporary afterglow are not the same as durable remission</li>
          </ul>

          <p>
            Continue with <Link href="/safety-and-screening">safety &amp; screening</Link>,{" "}
            <Link href="/what-is-ibogaine-infusion">what infusion means</Link>, and{" "}
            <Link href="/apply">confidential inquiry</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Ask about mood-related screening questions" />
    </>
  );
}
