import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Step-by-step overview of a screening-first ibogaine infusion inquiry: confidential contact, medical review themes, and aftercare expectations.",
};

const steps = [
  {
    step: "01",
    title: "Confidential inquiry",
    body: "Share basic contact details and optional context. This is an educational intake conversation starter — not automatic approval.",
  },
  {
    step: "02",
    title: "Initial fit discussion",
    body: "A human review focuses on goals, timing, medical complexity signals, and whether a fuller screening path even makes sense.",
  },
  {
    step: "03",
    title: "Medical screening emphasis",
    body: "Cardiac evaluation, history, medications, and contraindications are treated as gatekeepers. Being screened out is a success of the process, not a failure.",
  },
  {
    step: "04",
    title: "True IV administration posture",
    body: "If a clinical pathway proceeds in an appropriate jurisdiction and setting, the model emphasizes intravenous delivery of psychoactive ibogaine (not oral-plus-fluids), continuous monitoring, and medical accountability.",
  },
  {
    step: "05",
    title: "Aftercare planning",
    body: "Integration, addiction or psychiatric follow-up, and relapse-risk planning are part of a serious path — not optional branding.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">How it works</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            A screening-first sequence toward true IV ibogaine infusion inquiry — clarity before commitment.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl space-y-6">
          {steps.map((item) => (
            <article
              key={item.step}
              className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</p>
              <h2 className="mt-2 font-serif text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.body}</p>
            </article>
          ))}
        </Container>
      </section>
      <CTASection title="Begin with a confidential inquiry" />
    </>
  );
}
