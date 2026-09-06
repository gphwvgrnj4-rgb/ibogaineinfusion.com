import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Ibogaine for Depression",
  description:
    "Educational overview of ibogaine and depression: evidence limits, psychiatric caution, and why screening matters.",
};

export default function DepressionPage() {
  return (
    <>
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">Ibogaine for depression</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Depression care already includes established pathways — psychotherapy, medications,
            interventional psychiatry, and more. Ibogaine appears in some exploratory conversations
            about mood, but it is not a validated first-line antidepressant protocol on this site,
            and it carries distinct medical risks.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Keep established care in the frame</h2>
          <p>
            If you are living with depression, the priority is continuity with qualified clinicians.
            Exploring ibogaine as an educational topic should not interrupt medications abruptly or
            replace urgent mental-health care.
          </p>

          <h2>What remains uncertain</h2>
          <p>
            Reports of mood change after ibogaine are not the same as controlled evidence that it
            treats major depression across populations. Duration of any effect, who responds, and
            how depression subtype matters are open questions.
          </p>

          <h2>Psychiatric and medical caution</h2>
          <ul>
            <li>Active suicidal crisis requires emergency and psychiatric pathways — not an inquiry form</li>
            <li>Medication washout or changes must be clinician-directed</li>
            <li>Cardiac screening remains relevant regardless of psychiatric motivation</li>
            <li>Integration support matters when intense experiences intersect with mood disorders</li>
          </ul>

          <h2>A serious tone for a serious illness</h2>
          <p>
            Clinical-luxury here means respect: clear language, no miracle framing, and CTAs that
            route to screening conversations rather than hype.
          </p>
          <p>
            See also <Link href="/blog/ibogaine-vs-ketamine-for-addiction">ibogaine vs ketamine context</Link>{" "}
            in our blog (including how infusion clinics differ), and{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Ask about mood-related screening questions" />
    </>
  );
}
