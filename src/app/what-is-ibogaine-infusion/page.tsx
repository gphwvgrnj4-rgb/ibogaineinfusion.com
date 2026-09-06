import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "What Is True IV Ibogaine Infusion?",
  description:
    "True psychoactive IV ibogaine infusion means the alkaloid is delivered intravenously — like ketamine IV clinics — not oral ibogaine with supportive IV fluids.",
};

export default function WhatIsPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">
            What is true IV ibogaine infusion?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            <strong className="text-ink">True psychoactive IV ibogaine infusion</strong> means the
            ibogaine itself is administered intravenously under medical screening and monitoring —
            the same delivery idea as a ketamine IV infusion clinic. It is <em>not</em> oral
            ibogaine (capsules, extract, or root bark) with an IV line used only for fluids or
            supportive care.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>The ketamine parallel — delivery, not equivalence</h2>
          <p>
            Ketamine infusion clinics are familiar because they deliver a psychoactive medicine by
            vein in a supervised setting. Ibogaine Infusion positions <strong>true IV ibogaine</strong>{" "}
            the same way: intravenous administration of the psychoactive alkaloid, with screening,
            monitoring, and clinical accountability. Pharmacology and evidence differ; the
            infusion-clinic model is the differentiator we emphasize.
          </p>

          <h2>What we are clarifying against</h2>
          <p>
            Some programs describe an &quot;IV experience&quot; when patients swallow oral ibogaine
            while receiving saline or other supportive intravenous fluids. That is oral dosing with
            supportive IV care — useful to understand, but <strong>not</strong> what this site means
            by ibogaine infusion.
          </p>
          <ul>
            <li>
              <strong>True IV ibogaine infusion:</strong> psychoactive ibogaine delivered by vein
            </li>
            <li>
              <strong>Not our framing:</strong> oral ibogaine + IV fluids / monitoring only
            </li>
          </ul>

          <h2>Why screening still comes first</h2>
          <p>
            Intravenous delivery does not remove cardiac risk, medication interactions, or the need
            for medical exclusion criteria. If anything, a serious infusion posture makes screening
            and continuous monitoring non-negotiable — not optional brochure language.
          </p>

          <h2>How this differs from retreat marketing</h2>
          <ul>
            <li>Delivery route stated clearly (true IV psychoactive ibogaine)</li>
            <li>CTAs focused on qualification and confidential inquiry</li>
            <li>Explicit cardiac and safety disclaimers</li>
            <li>No fabricated statistics or cure promises</li>
          </ul>

          <p>
            Deeper explainer:{" "}
            <Link href="/blog/what-is-iv-ibogaine-infusion">What is IV ibogaine infusion?</Link>
          </p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
