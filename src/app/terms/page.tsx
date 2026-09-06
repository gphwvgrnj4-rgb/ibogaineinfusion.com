import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use stub for Ibogaine Infusion educational inquiry website.",
};

export default function TermsPage() {
  return (
    <section className="py-14">
      <Container className="prose-clinical max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-forest">Terms of Use</h1>
        <p className="text-sm text-ink/60">Last updated: September 6, 2026 · Stub for legal review</p>
        <h2>Educational purpose</h2>
        <p>
          Content on ibogaineinfusion.com is for education and confidential inquiry only. It is not
          medical advice, diagnosis, treatment, or a promise of eligibility or outcomes.
        </p>
        <h2>No cure claims</h2>
        <p>
          You agree not to interpret site copy as a guarantee that ibogaine will cure addiction,
          depression, PTSD, or any other condition.
        </p>
        <h2>Medical risk</h2>
        <p>
          Ibogaine involves significant risks, including cardiac risk. You are responsible for
          seeking qualified medical guidance. Do not self-administer substances based on this site.
        </p>
        <h2>Jurisdictional variation</h2>
        <p>
          Legal status of ibogaine and related activities varies. This site does not provide legal
          advice.
        </p>
        <h2>Limitation stub</h2>
        <p>
          Replace with counsel-drafted limitation of liability, indemnity, and governing-law clauses
          before public launch.
        </p>
      </Container>
    </section>
  );
}
