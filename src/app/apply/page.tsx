import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { JurisdictionNote } from "@/components/JurisdictionNote";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidential Application | IV Ibogaine Infusion Screening",
  description:
    "Start a confidential multi-step application for physician-supervised IV ibogaine infusion screening. Medical intake, readiness review, and discovery — treatment location shared after screening.",
  alternates: { canonical: "/apply" },
};

const faqs = [
  {
    q: "Does submitting this application admit me to treatment?",
    a: "No. It starts confidential intake and screening. Admission requires medical review and physician go/no-go.",
  },
  {
    q: "Do I need an ECG before I apply?",
    a: "Helpful but not required to submit. You can complete the application without an EKG file; we can collect reports later. Expect ECG discussion before any infusion clearance.",
  },
  {
    q: "Will you promise results for addiction, depression, or PTSD?",
    a: "No. We do not make cure or guaranteed-outcome claims.",
  },
  {
    q: "Is my information confidential?",
    a: "Treat submissions as sensitive health-related intake under the published privacy policy.",
  },
  {
    q: "Where is treatment available?",
    a: "Physician-supervised IV ibogaine infusion programs discussed on this site share the treatment location after screening. This is not an approved U.S. clinic pathway, not automatic admission, and not a promise of legality, travel clearance, or outcome. Ibogaine is Schedule I in the United States. Screening and cardiac monitoring remain mandatory.",
  },
];

export default function ApplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Confidential Application | IV Ibogaine Infusion Screening",
        url: `${siteConfig.url}/apply`,
        description:
          "Start a confidential multi-step application for physician-supervised IV ibogaine infusion screening. Medical intake, readiness review, and discovery — treatment location shared after screening.",
      },
      faqPage(faqs),
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Apply", path: "/apply" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-forest-deep py-20 text-cream sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,149,106,0.25),_transparent_55%)]" />
        </div>
        <Container className="relative max-w-3xl">
          <p className="section-label text-accent">Confidential application</p>
          <h1 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Thorough screening application for IV ibogaine infusion
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            This is a deeper intake — not a short inquiry. Fill out as much as you are comfortable
            with. The path is confidential intake → medical/psych readiness review → discovery call.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div>
            <p className="leading-relaxed text-muted">
              We discuss{" "}
              <strong className="font-medium text-ink">true psychoactive intravenous ibogaine</strong> under
              physician supervision (consult → cardiac screen → monitored IV infusion → integration).
            </p>
            <JurisdictionNote variant="card" context="apply" className="mt-8" />
            <Disclaimer tone="light" className="mt-6" />

            <h2 className="mt-12 font-serif text-3xl text-forest">What this application covers</h2>
            <ol className="mt-6 space-y-0 text-sm text-muted">
              {[
                ["1. Contact", "how we reach you confidentially"],
                ["2. Interest", "why IV ibogaine, concern, travel window"],
                ["3. General health", "meds, conditions, EKG history (file optional later)"],
                ["4. Substance history", "current/past patterns"],
                ["5. Eating & sleep", "patterns and supports"],
                ["6. Personal & family", "support, stressors, optional trauma detail"],
                ["7. Intentions & consent", "goals and consent provisional acknowledgment"],
              ].map(([title, body]) => (
                <li key={title} className="border-b border-[var(--line)] py-4 first:border-t">
                  <strong className="font-medium text-ink">{title}</strong>
                  <span className="mt-1 block">{body}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-serif text-3xl text-forest">Trust bullets</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li>
                <strong className="text-ink">Cardiac-first.</strong> Expect ECG/electrolyte discussion.{" "}
                <Link href="/safety-and-screening" className="text-forest-mid underline underline-offset-3">
                  Safety
                </Link>
              </li>
              <li>
                <strong className="text-ink">Route honesty.</strong> Psychoactive IV, not oral flood marketed as “infusion.”{" "}
                <Link href="/blog/ibogaine-oral-vs-iv" className="text-forest-mid underline underline-offset-3">
                  Oral vs IV
                </Link>
              </li>
              <li>
                <strong className="text-ink">No cure claims</strong> for addiction, depression, or PTSD.
              </li>
              <li>
                <strong className="text-ink">Treatment location shared after screening.</strong> Not an approved U.S. clinic; screening required.
              </li>
            </ul>

            <p className="mt-8 text-sm text-muted">
              Prefer to read first?{" "}
              <Link href="/what-is-ibogaine-infusion" className="text-forest-mid underline underline-offset-3">
                Definition
              </Link>{" "}
              ·{" "}
              <Link href="/how-it-works" className="text-forest-mid underline underline-offset-3">
                How it works
              </Link>{" "}
              ·{" "}
              <Link href="/faq" className="text-forest-mid underline underline-offset-3">
                FAQ
              </Link>
              . If you are in crisis, contact local emergency or crisis services now.
            </p>
          </div>
          <ApplicationForm />
        </Container>
      </section>
    </>
  );
}
