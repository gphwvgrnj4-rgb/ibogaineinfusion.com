import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/ibogaine-for-addiction" },
  title: "Ibogaine for Addiction & Opioid Detox",
  description:
    "What research suggests about ibogaine for opioid detox—IV infusion under medical supervision, cardiac risks, and why most published evidence is still oral/observational.",
};

export default function AddictionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: 'Ibogaine for Addiction',
        url: `${siteConfig.url}/ibogaine-for-addiction`,
        description: metadata.description as string,
      },
      breadcrumbList([ { name: "Home", path: "/" }, { name: "Ibogaine for addiction", path: "/ibogaine-for-addiction" } ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">
            Ibogaine for addiction &amp; opioid detox
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            In addiction contexts, <strong className="text-ink">IV ibogaine infusion</strong> means
            intravenous psychoactive delivery of ibogaine under physician supervision — sometimes
            explored for interrupting opioid withdrawal. Interest is real. Proof of a universal,
            regulator-approved cure is not. Cardiac risk and aftercare remain central.
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
          <h2>Honest bottom line</h2>
          <p>
            Some open-label and observational reports — <strong>predominantly oral-route</strong> —
            describe meaningful short-term reductions in withdrawal severity or opioid use for{" "}
            <em>some</em> participants. That is not a proven, FDA-approved treatment for opioid use
            disorder (OUD), and it is not automatic proof that a psychoactive{" "}
            <strong>IV</strong> protocol will match those outcomes.
          </p>
          <p>
            Systematic reviews repeatedly conclude that therapeutic signals are intriguing but
            constrained by small samples, bias risk, heterogeneous methods, and cardiac safety
            concerns.
          </p>

          <h2>Why opioids dominate the conversation</h2>
          <p>
            Historical clinical and underground interest focused on opioid withdrawal interruption.
            Ibogaine’s complex pharmacology — including effects relevant to opioid pathways and its
            metabolite noribogaine — led researchers to study craving and withdrawal outcomes.
          </p>
          <p>Hope statements you will see online (which we will not turn into guarantees):</p>
          <ul>
            <li>Shorter acute withdrawal window than unaided detox</li>
            <li>Reduced craving for a period after the session</li>
            <li>A psychologically motivating “reset” for recovery work</li>
          </ul>
          <p>
            Even when withdrawal relief is reported, addiction is a chronic, relapsing condition.
            Medical detox interruption ≠ long-term recovery without psychosocial care, overdose
            prevention planning, and often ongoing evidence-based treatment (including MOUD when
            appropriate).
          </p>

          <h2>What the evidence can and cannot say</h2>
          <h3>Observational signals (mostly oral)</h3>
          <p>
            Cardiac-focused observational work (e.g., Knuijver et al., <em>Addiction</em>, 2021)
            documented clinically relevant QTc prolongation after <strong>oral</strong> ibogaine HCl
            in opioid-dependent patients — reinforcing that anti-withdrawal interest and cardiac
            risk travel together.
          </p>
          <h3>IV psychoactive evidence gap</h3>
          <p>
            Peer-reviewed controlled trials of psychoactive IV ibogaine infusion are not established
            like oral observational series. Brand positioning as IV infusion must not launder oral
            study percentages into “IV success rates.”
          </p>

          <h2>Where medical IV care fits</h2>
          <ul>
            <li>Withdrawal and polysubstance status change vital signs and electrolytes</li>
            <li>QTc risk requires continuous monitoring, not intermittent spot-checks</li>
            <li>Physician-supervised IV psychoactive infusion needs clear dosing/stop rules and emergency capability</li>
            <li>Support IV (fluids, Mg/K, antiemetics) may still be used — labeled separately</li>
            <li>Aftercare planning, including overdose risk if relapse occurs, is part of ethical care</li>
          </ul>

          <h2>How this differs from standard OUD tools</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 bg-sage/30">
                  <th className="px-3 py-2 font-semibold text-forest">Approach</th>
                  <th className="px-3 py-2 font-semibold text-forest">Role (simplified)</th>
                  <th className="px-3 py-2 font-semibold text-forest">Access / evidence posture</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Methadone / buprenorphine (MOUD)</td>
                  <td className="px-3 py-2 text-ink/80">Evidence-based maintenance / treatment</td>
                  <td className="px-3 py-2 text-ink/80">Guideline-supported where available</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Medical detox / symptomatic care</td>
                  <td className="px-3 py-2 text-ink/80">Stabilize withdrawal</td>
                  <td className="px-3 py-2 text-ink/80">Standard pathways; not a cure alone</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">IV ibogaine infusion (investigational interest)</td>
                  <td className="px-3 py-2 text-ink/80">Acute interrupt curiosity under medical monitoring</td>
                  <td className="px-3 py-2 text-ink/80">Not FDA-approved; sparse IV controlled data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Risk themes specific to substance-use contexts</h2>
          <ul>
            <li>Recent use patterns and polysubstance risk</li>
            <li>Medication interactions and QT-related concerns</li>
            <li>Dehydration, electrolytes, and physical frailty</li>
            <li>Post-acute vulnerability and overdose risk if tolerance changes after an interrupt</li>
          </ul>

          <h2>Next steps</h2>
          <p>
            Review <Link href="/safety-and-screening">safety &amp; screening</Link>, read{" "}
            <Link href="/what-is-ibogaine-infusion">what infusion means</Link>, compare cost
            transparency on{" "}
            <Link href="/blog/cost-of-ibogaine-treatment">cost of treatment</Link>, then{" "}
            <Link href="/apply">submit a confidential inquiry</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Inquire about addiction-focused screening" />
    </>
  );
}
