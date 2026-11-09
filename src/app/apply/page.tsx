import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { JurisdictionNote } from "@/components/JurisdictionNote";
import { PageHero } from "@/components/PageHero";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Waiting List | IV Ibogaine Infusion",
  description:
    "The clinic is not open yet. Leave your email to join the Ibogaine Infusion waiting list and be notified when physician-screened IV ibogaine intake opens. Planned locations: Mexico and Gabon.",
  alternates: { canonical: "/apply" },
};

const faqs = [
  {
    q: "Is the clinic open now?",
    a: "No. Leave your email on the waiting list and we will notify you when intake opens. Joining is not admission to treatment.",
  },
  {
    q: "What happens after I join the waiting list?",
    a: "We email this address when intake opens and share next steps for confidential screening. A physician review and cardiac screening come before any treatment conversation.",
  },
  {
    q: "Will you promise results for addiction, depression, or PTSD?",
    a: "No. We do not make cure or guaranteed-outcome claims.",
  },
  {
    q: "Is my email confidential?",
    a: "Treat submissions as sensitive intake contact under the published privacy policy. We use your email to notify you about opening and screening follow-up.",
  },
  {
    q: "Where will treatment be offered when open?",
    a: "Planned waitlist intakes are in Mexico and Gabon. That is not an approved U.S. clinic pathway, not automatic admission, and not a promise of legality, travel clearance, or outcome. Ibogaine is Schedule I in the United States. Screening and cardiac monitoring remain mandatory when intake opens.",
  },
];

export default function ApplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Join the Waiting List | IV Ibogaine Infusion",
        url: `${siteConfig.url}/apply`,
        description:
          "The clinic is not open yet. Leave your email to join the waiting list and be notified when physician-screened IV ibogaine intake opens.",
      },
      faqPage(faqs),
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Waiting list", path: "/apply" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero label="Waiting list" title="Join the waiting list">
        The clinic is not open yet. Leave your email and we will notify you when
        physician-screened IV ibogaine intake opens. Joining is not admission and not a medical
        consult.
      </PageHero>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div>
            <JurisdictionNote variant="card" context="apply" />
            <Disclaimer tone="light" className="mt-6" />

            <h2 className="mt-12 font-serif text-3xl text-forest">What joining means</h2>
            <ol className="mt-6 space-y-0 text-sm text-muted">
              {[
                ["1. Email only", "one field now — we notify you when intake opens"],
                ["2. Not open yet", "no bookings, deposits, or treatment dates from this form"],
                ["3. Screening later", "when open, cardiac/medical review comes before any infusion talk"],
                ["4. Planned locations", "Mexico and Gabon intakes when programs are ready"],
              ].map(([title, body]) => (
                <li key={title} className="border-b border-[var(--line)] py-4 first:border-t">
                  <strong className="font-medium text-ink">{title}</strong>
                  <span className="mt-1 block">{body}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-serif text-3xl text-forest">Trust</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li>
                <strong className="text-ink">Cardiac-first.</strong> Expect ECG/electrolyte discussion when
                screening begins.{" "}
                <Link href="/safety-and-screening" className="text-forest-mid underline underline-offset-3">
                  Safety
                </Link>
              </li>
              <li>
                <strong className="text-ink">Route honesty.</strong> Psychoactive IV, not oral flood marketed
                as “infusion.”{" "}
                <Link href="/blog/ibogaine-oral-vs-iv" className="text-forest-mid underline underline-offset-3">
                  Oral vs IV
                </Link>
              </li>
              <li>
                <strong className="text-ink">No cure claims</strong> for addiction, depression, or PTSD.
              </li>
              <li>
                <strong className="text-ink">Not open yet.</strong> Waiting-list email only until intake
                launches.
              </li>
            </ul>

            <p className="mt-8 text-sm text-muted">
              Prefer to read first?{" "}
              <Link href="/what-is-ibogaine-infusion" className="text-forest-mid underline underline-offset-3">
                Approach
              </Link>{" "}
              ·{" "}
              <Link href="/how-it-works" className="text-forest-mid underline underline-offset-3">
                Journey
              </Link>{" "}
              ·{" "}
              <Link href="/faq" className="text-forest-mid underline underline-offset-3">
                FAQ
              </Link>
              . If you are in crisis, contact local emergency or crisis services now.
            </p>
          </div>
          <div className="order-first lg:order-none">
            <div className="space-y-5 rounded-[1.5rem] border border-[var(--line)] bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Not open yet · email only
              </p>
              <div className="h-px bg-accent/50" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-forest">Get notified when we open</h2>
              <p className="text-sm leading-relaxed text-ink/70">
                Leave your email. We’ll contact you when physician-screened intake opens for planned
                locations in Mexico and Gabon.
              </p>
              <WaitlistForm source="apply-page" variant="light" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
