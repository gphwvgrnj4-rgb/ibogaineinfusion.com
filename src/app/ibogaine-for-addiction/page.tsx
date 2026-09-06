import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Ibogaine for Addiction",
  description:
    "Educational overview of how ibogaine is discussed for substance use and addiction — with screening, risk, and aftercare emphasis.",
};

export default function AddictionPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">Ibogaine for addiction</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            People exploring ibogaine for addiction are often looking for interruption of withdrawal,
            craving, or compulsive use patterns — especially with opioids. Interest does not equal
            proven, universal effectiveness. Medical risk and aftercare remain central.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>What the conversation usually includes</h2>
          <p>
            In published discussion and clinical anecdote, ibogaine is frequently associated with
            acute opioid withdrawal interruption for some individuals. Findings are heterogeneous.
            Study designs, dosing, setting quality, and follow-up vary widely. Treat bold online
            success rates with skepticism unless methodology is transparent.
          </p>

          <h2>Addiction is rarely a one-event problem</h2>
          <p>
            Even when an acute episode reduces withdrawal intensity, long-term recovery typically
            depends on supports that outlast any single intervention: counseling, peer support,
            medication-assisted treatment when appropriate, psychiatric care, housing stability, and
            relapse-prevention planning.
          </p>
          <p>
            A screening-first infusion inquiry should ask how a program coordinates with ongoing
            addiction care — not replace it with mystique.
          </p>

          <h2>Risk themes specific to substance-use contexts</h2>
          <ul>
            <li>Recent use patterns and polysubstance risk</li>
            <li>Medication interactions and QT-related concerns</li>
            <li>Dehydration, electrolytes, and physical frailty</li>
            <li>Post-acute vulnerability and overdose risk if tolerance changes</li>
          </ul>

          <h2>Who this page is for</h2>
          <p>
            Adults considering a serious, medically screened conversation — including families
            helping someone research options. It is not a DIY protocol and not an invitation to
            self-administer anything.
          </p>

          <p>
            Next steps: review{" "}
            <Link href="/safety-and-screening">safety &amp; screening</Link>, read{" "}
            <Link href="/what-is-ibogaine-infusion">what infusion means</Link>, then{" "}
            <Link href="/apply">submit a confidential inquiry</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Inquire about addiction-focused screening" />
    </>
  );
}
