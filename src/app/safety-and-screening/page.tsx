import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JurisdictionNote } from "@/components/JurisdictionNote";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/safety-and-screening" },
  title: "Safety and Screening — Cardiac Risk & QTc",
  description:
    "Ibogaine can prolong QTc and raise arrhythmia risk. Cardiac screening, ECG, electrolytes, continuous monitoring for IV ibogaine infusion. Provisional Mexico availability; not a U.S. FDA-approved clinic.",
};

export default function SafetyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: 'Safety and Screening',
        url: `${siteConfig.url}/safety-and-screening`,
        description: metadata.description as string,
      },
      breadcrumbList([ { name: "Home", path: "/" }, { name: "Safety and screening", path: "/safety-and-screening" } ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            Safety and screening
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Ibogaine safety centers on cardiac risk management. In{" "}
            <strong className="text-ink">IV ibogaine infusion</strong> — intravenous psychoactive
            ibogaine under physician supervision — patients undergo consult and screening, then
            receive a monitored IV infusion with continuous ECG/telemetry. Screening is not
            bureaucracy; it is the ethical center of a supervised path.
          </p>
          <Disclaimer className="mt-8" />
          <JurisdictionNote variant="card" context="safety" className="mt-6" />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="prose-clinical max-w-3xl">
          <h2>The risk you cannot market away</h2>
          <p>
            Deaths associated with ibogaine in non-medical and medical-adjacent settings have been
            reported, with cardiac mechanisms — particularly arrhythmias preceded by QT prolongation —
            frequently discussed. This page is the trust home for safety questions across condition pages
            and inquiry conversations on this site.
          </p>
          <p>
            <strong>Evidence gap:</strong> Much of the best-known QTc literature (e.g., Knuijver et
            al., <em>Addiction</em>, 2021) observed <strong>oral</strong> ibogaine HCl; Cherian et
            al. (<em>Nature Medicine</em>, 2024) used <strong>oral</strong> ibogaine with{" "}
            <strong>IV magnesium</strong>. Those papers inform risk thinking but are not
            IV-psychoactive RCTs. True IV infusion does not erase risk — it raises the bar for
            monitoring during intravenous administration.
          </p>

          <h2>QTc prolongation in plain language</h2>
          <p>
            The QT interval on an ECG reflects ventricular recovery. Corrected for heart rate
            (QTc), excessive prolongation raises risk for torsades de pointes — a polymorphic
            ventricular tachycardia that can degenerate to fatal arrhythmia. Ibogaine pharmacology
            has been associated with hERG potassium channel effects that delay repolarization.
            Clinical observation confirms this is not theoretical only.
          </p>

          <h3>Landmark open-label cardiac observation (oral route)</h3>
          <p>
            Knuijver et al. (<em>Addiction</em>, 2021) studied oral ibogaine HCl in opioid-dependent
            patients. Reported findings included clinically relevant QTc prolongation, a substantial
            share of subjects reaching QTc &gt;500 ms during observation, bradycardia and blood-pressure
            decreases, and severe transient ataxia. Absence of torsades in a small sample does not
            equal absence of risk.
          </p>
          <p>
            <strong>Route label:</strong> These are oral-exposure findings. They still justify
            non-negotiable monitoring for IV psychoactive protocols, which change pharmacokinetics
            and must not be assumed safer without data.
          </p>

          <h2>Support IV electrolytes vs psychoactive IV ibogaine</h2>
          <p>
            Nausea, vomiting, poor intake, and prior substance use can deplete potassium and
            magnesium — electrolytes intertwined with cardiac repolarization. Medical programs
            emphasize baseline labs, repletion when indicated, IV access for ongoing correction, and
            avoiding hotel magnesium as a safety plan.
          </p>
          <p>
            Magnesium coadministration in veteran-focused observational protocols is a
            support/coadministration story with <strong>oral</strong> ibogaine — not proof that
            psychoactive IV ibogaine is validated. See{" "}
            <Link href="/what-is-ibogaine-infusion">what infusion means</Link>.
          </p>

          <h2>Pre-infusion screening themes (educational, not a protocol)</h2>
          <ul>
            <li>Full medication and supplement list (QT-prolonging agents, stimulants, opioids, alcohol, benzos)</li>
            <li>Personal/family history of sudden death, long QT, syncope, cardiomyopathy</li>
            <li>Baseline 12-lead ECG with QTc</li>
            <li>Electrolytes (K, Mg, Ca as indicated), renal/hepatic labs as indicated</li>
            <li>Substance-use timing (withdrawal state can itself stress physiology)</li>
            <li>Psychiatric risk assessment and observation plan</li>
            <li>Written confirmation of psychoactive route (IV) and monitoring duration</li>
          </ul>

          <h2>Contraindications and cautions (non-exhaustive)</h2>
          <p>
            <strong>Often discussed as high concern:</strong> congenital or acquired long QT;
            baseline QTc already markedly prolonged; decompensated heart failure, recent MI,
            unstable angina, serious arrhythmia history; uncorrected severe electrolyte derangement;
            combinations of multiple QT-prolonging drugs without a specialist plan.
          </p>
          <p>
            <strong>Relative / contextual cautions:</strong> structural heart disease; severe liver
            disease affecting metabolism; unstable medical illness; inability to be continuously
            monitored. Physician judgment rules — this list is educational, not a clearance
            algorithm.
          </p>

          <h2>Being declined can protect you</h2>
          <p>
            A program that rarely says no may be optimizing enrollment over safety. Exclusion
            criteria are a feature of serious medicine. Prefer programs that describe emergency
            transfer plans, ACLS-capable staffing, and refund / medical-cancel policies when
            screening fails.
          </p>

          <h2>Further reading</h2>
          <ul>
            <li>
              Blog long-tail twin:{" "}
              <Link href="/blog/is-ibogaine-safe-screening-cardiac-risk">
                Is ibogaine safe? Screening and cardiac risk
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-choose-an-ibogaine-clinic">How to choose an ibogaine clinic</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link> · <Link href="/apply">Apply / screening consult</Link>
            </li>
          </ul>
        </Container>
      </section>
      <CTASection title="Request a screening-first conversation" />
    </>
  );
}
