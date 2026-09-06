import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Safety and Screening",
  description:
    "Why cardiac screening and medical review are central to any serious ibogaine conversation. Educational risk overview — not a clearance protocol.",
};

export default function SafetyPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            Safety and screening
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Ibogaine is associated with serious medical risks, including cardiac complications.
            Screening is not bureaucracy — it is the ethical center of a supervised path.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Cardiac risk is not fine print</h2>
          <p>
            Discussions of ibogaine safety repeatedly return to cardiac conduction concerns,
            including QT-related risk themes and arrhythmia potential in susceptible people. That is
            why ECG evaluation, medication review, and electrolyte considerations appear so often in
            responsible materials. True IV infusion does not erase those risks — it raises the bar
            for monitoring during intravenous administration.
          </p>

          <h2>What screening conversations typically cover</h2>
          <ul>
            <li>Cardiovascular history and current symptoms</li>
            <li>Prescription drugs, OTC agents, and supplements</li>
            <li>Substance-use timing and polysubstance factors</li>
            <li>Liver, metabolic, and general medical status as indicated</li>
            <li>Psychiatric stability and support planning</li>
            <li>Informed consent that names uncertainty</li>
          </ul>
          <p>
            This is illustrative education — not a do-it-yourself clearance checklist.
          </p>

          <h2>Being declined can protect you</h2>
          <p>
            A program that rarely says no may be optimizing enrollment over safety. Exclusion
            criteria are a feature of serious medicine.
          </p>

          <h2>Further reading</h2>
          <p>
            <Link href="/blog/is-ibogaine-safe-screening-cardiac-risk">
              Is ibogaine safe? Screening &amp; cardiac risk
            </Link>
          </p>
        </Container>
      </section>
      <CTASection title="Request a screening-first conversation" />
    </>
  );
}
