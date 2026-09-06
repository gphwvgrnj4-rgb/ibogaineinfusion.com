import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Ibogaine for PTSD",
  description:
    "Educational overview of ibogaine and PTSD: trauma-informed caution, evidence limits, and screening-first inquiry.",
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
            intensive experience might shift trauma-related patterns. Hope is understandable.
            Guarantees are not responsible. Trauma-informed care and medical screening both matter.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Trauma work is not tourism</h2>
          <p>
            Intense altered-state experiences can surface difficult material. Programs that market
            rapid healing without preparation, consent quality, or aftercare planning are misaligned
            with a serious clinical posture.
          </p>

          <h2>Evidence posture</h2>
          <p>
            Research interest exists in psychedelic and related approaches for trauma symptoms, but
            ibogaine-specific PTSD evidence is not something this site will inflate. Individual
            stories are not a substitute for careful evaluation with your clinicians.
          </p>

          <h2>Practical considerations</h2>
          <ul>
            <li>Stability, support systems, and psychiatric co-care</li>
            <li>Risk of re-traumatization without skilled support</li>
            <li>Substance-use overlap common in some trauma histories — screen thoroughly</li>
            <li>Cardiac and medication review remain non-negotiable</li>
          </ul>

          <h2>If you are in crisis</h2>
          <p>
            If you are in immediate danger or acute psychiatric crisis, contact local emergency
            services or crisis resources. A marketing site inquiry form is not crisis care.
          </p>

          <p>
            Continue with <Link href="/how-it-works">how it works</Link> and{" "}
            <Link href="/apply">confidential inquiry</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Confidential PTSD-related inquiry" />
    </>
  );
}
