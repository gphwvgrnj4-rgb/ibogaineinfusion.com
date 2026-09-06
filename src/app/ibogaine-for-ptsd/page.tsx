import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Ibogaine for PTSD",
  description:
    "IV ibogaine for PTSD: what open-label veteran research reports (oral ibogaine + IV magnesium), what it doesn’t prove for IV psychoactive ibogaine, and why cardiac screening is essential.",
};

export default function PtsdPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">Ibogaine for PTSD</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Post-traumatic stress is complex. Some people research ibogaine because they hope an
            intensive, monitored experience might shift trauma-related patterns. Hope is
            understandable. Guarantees are not responsible. The highest-profile recent human data
            used <strong className="text-ink">oral</strong> ibogaine with{" "}
            <strong className="text-ink">IV magnesium</strong> — not IV ibogaine as the psychoactive
            dose.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Definition (route-honest)</h2>
          <p>
            <strong>Ibogaine for PTSD</strong> refers to investigational and observational interest
            in whether ibogaine — including programs that follow{" "}
            <Link href="/what-is-ibogaine-infusion">IV ibogaine infusion</Link> standards
            (intravenous psychoactive ibogaine under physician supervision) — is associated with
            changes in post-traumatic stress symptoms. Randomized controlled trials are still needed;
            controlled evidence for psychoactive IV ibogaine is sparse. Ibogaine is not FDA-approved
            for PTSD.
          </p>

          <h2>How to read Cherian et al. / MISTIC carefully</h2>
          <p>
            Cherian et al. (<em>Nature Medicine</em>, 2024) reported open-label observational
            findings in special operations veterans with traumatic brain injuries and associated
            psychiatric symptoms after a magnesium–ibogaine protocol. Critical framing:
          </p>
          <ul>
            <li>
              <strong>Psychoactive ibogaine route in that report:</strong> oral
            </li>
            <li>
              <strong>IV component highlighted:</strong> magnesium sulfate (support /
              coadministration) — not “IV ibogaine proves efficacy”
            </li>
            <li>
              <strong>Design:</strong> open-label, not an RCT
            </li>
            <li>
              <strong>Implication:</strong> signals warrant further research; they do not authorize
              cure marketing or automatic transfer to an IV psychoactive brand protocol
            </li>
          </ul>

          <h2>Brand IV protocol vs MISTIC route</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 bg-sage/30">
                  <th className="px-3 py-2 font-semibold text-forest">Element</th>
                  <th className="px-3 py-2 font-semibold text-forest">MISTIC / Cherian landscape</th>
                  <th className="px-3 py-2 font-semibold text-forest">IV ibogaine infusion (this entity)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Psychoactive route</td>
                  <td className="px-3 py-2 text-ink/80">Oral HCl (as reported)</td>
                  <td className="px-3 py-2 text-ink/80">Intravenous psychoactive infusion</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">IV magnesium / support IV</td>
                  <td className="px-3 py-2 text-ink/80">Yes (IV Mg emphasized)</td>
                  <td className="px-3 py-2 text-ink/80">May be used as support — labeled separately</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Evidence type</td>
                  <td className="px-3 py-2 text-ink/80">Open-label observational</td>
                  <td className="px-3 py-2 text-ink/80">Protocol education; sparse IV controlled trials</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Trauma work is not tourism</h2>
          <p>
            Intense altered-state experiences can surface difficult material. Programs that market
            rapid healing without preparation, consent quality, or aftercare planning are misaligned
            with a serious clinical posture. Trauma-informed integration — not “one vision replaces
            therapy” — belongs in any serious conversation.
          </p>

          <h2>Where medical IV care fits PTSD programs</h2>
          <ol>
            <li>Psychiatric diagnosis clarification (PTSD vs complex PTSD vs other frameworks)</li>
            <li>Cardiac and medication screening (many psychotropics affect QTc)</li>
            <li>Physician-supervised infusion and prolonged observation</li>
            <li>Trauma-informed integration and continuity with existing care where applicable</li>
          </ol>

          <h2>Cardiac reminder for PTSD seekers</h2>
          <p>
            QTc prolongation after <strong>oral</strong> ibogaine HCl is documented in open-label
            OUD research (Knuijver et al., <em>Addiction</em>, 2021). That risk narrative informs
            monitoring standards for any medical ibogaine exposure, including IV infusion protocols.
            Magnesium interest in veteran protocols does not make unmonitored use safe. See{" "}
            <Link href="/safety-and-screening">safety &amp; screening</Link>.
          </p>

          <h2>If you are in crisis</h2>
          <p>
            If you are in immediate danger or acute psychiatric crisis, contact local emergency
            services or crisis resources. A marketing site inquiry form is not crisis care.
          </p>

          <p>
            Continue with <Link href="/how-it-works">how it works</Link>,{" "}
            <Link href="/ibogaine-for-depression">depression overlap</Link>,{" "}
            <Link href="/ibogaine-for-addiction">addiction co-occurrence</Link>, and{" "}
            <Link href="/apply">confidential inquiry</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Confidential PTSD-related inquiry" />
    </>
  );
}
