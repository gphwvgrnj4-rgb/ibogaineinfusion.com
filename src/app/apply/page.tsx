import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Check If You Qualify",
  description:
    "Submit a confidential inquiry for screening-first ibogaine infusion conversation. Educational inquiry only — not a treatment guarantee.",
};

export default function ApplyPage() {
  return (
    <section className="py-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Confidential inquiry
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">
            Check if you qualify
          </h1>
          <p className="mt-4 leading-relaxed text-ink/75">
            Tell us how to reach you. This inquiry is about interest in true psychoactive IV
            ibogaine infusion (intravenous alkaloid delivery — not oral dosing with supportive
            fluids only). Submitting this form does not enroll you in treatment and does not mean
            you are medically cleared.
          </p>
          <Disclaimer className="mt-6" />
          <ul className="mt-6 space-y-2 text-sm text-ink/75">
            <li>• We prioritize privacy and serious intent over volume sales.</li>
            <li>• Cardiac and medical screening remain required for any supervised path.</li>
            <li>• If you are in crisis, contact local emergency or crisis services now.</li>
          </ul>
        </div>
        <LeadForm />
      </Container>
    </section>
  );
}
