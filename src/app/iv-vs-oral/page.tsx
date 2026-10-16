import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { InterestForm } from "@/components/InterestForm";
import { PageHero } from "@/components/PageHero";
import { RouteComparison } from "@/components/RouteComparison";

export const metadata: Metadata = {
  title: "IV vs Oral vs Intranasal Ibogaine: Routes Compared",
  description:
    "How intravenous, oral and intranasal ibogaine differ: titration, reversibility, absorption and cardiac monitoring. Evidence-honest comparison from a clinic dedicated exclusively to IV ibogaine therapy.",
  alternates: { canonical: "/iv-vs-oral" },
};

export default function IvVsOralPage() {
  return (
    <>
      <PageHero label="Route comparison" title="IV vs oral vs intranasal ibogaine">
        Ibogaine Infusion is a clinic dedicated exclusively to intravenous (IV) ibogaine therapy. Here is how
        the routes differ, and where the evidence is still thin.
      </PageHero>
      <RouteComparison showPageLink={false} />
      <section className="bg-paper py-20">
        <Container className="max-w-3xl space-y-6 text-muted">
          <h2 className="font-serif text-3xl text-forest">Reading the evidence honestly</h2>
          <p>
            Most published ibogaine research is observational and uses oral dosing. Controlled data on psychoactive
            IV ibogaine remain limited. The advantage of IV is control: clinicians can adjust or stop delivery while
            watching the ECG. That does not remove cardiac risk, which is why screening decides who can be treated.
          </p>
          <p>
            Learn more on <Link className="text-forest underline" href="/safety-and-screening">safety and screening</Link>{" "}
            and <Link className="text-forest underline" href="/what-is-ibogaine-infusion">what true IV infusion means</Link>.
          </p>
        </Container>
      </section>
      <section className="bg-forest-deep py-24 text-cream" id="waitlist">
        <Container className="max-w-2xl">
          <div className="divider-gold" />
          <p className="section-label mt-8 text-accent">Request early access</p>
          <h2 className="mt-4 font-serif text-4xl">Join the waitlist</h2>
          <p className="mt-4 text-cream/70">
            Intake opens in small, physician-screened cohorts. Places are limited because every infusion has
            one-to-one cardiac monitoring. Waitlist members get first access to screening and the intake date.
          </p>
          <div className="mt-8"><InterestForm source="iv-vs-oral" /></div>
        </Container>
      </section>
    </>
  );
}
