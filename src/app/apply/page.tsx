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
    "Start a confidential multi-step application for physician-supervised IV ibogaine infusion screening. Medical intake, readiness review, and discovery — provisionally available in Mexico.",
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
    a: "Physician-supervised IV ibogaine infusion programs discussed on this site are provisionally available in Mexico. This is not an FDA-approved U.S. clinic pathway, not automatic admission, and not a promise of legality, travel clearance, or outcome. Ibogaine is Schedule I in the United States. Screening and cardiac monitoring remain mandatory.",
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
          "Start a confidential multi-step application for physician-supervised IV ibogaine infusion screening. Medical intake, readiness review, and discovery — provisionally available in Mexico.",
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
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Confidential application
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-forest">
              Thorough screening application for IV ibogaine infusion
            </h1>
            <p className="mt-4 leading-relaxed text-ink/75">
              This is a deeper intake — not a short inquiry. Fill out as much as you are comfortable
              with. The path is confidential intake → medical/psych readiness review → discovery call.
              We discuss{" "}
              <strong className="text-ink">true psychoactive intravenous ibogaine</strong> under
              physician supervision (consult → cardiac screen → monitored IV infusion → integration).
            </p>
            <JurisdictionNote variant="card" context="apply" className="mt-6" />
            <Disclaimer className="mt-6" />

            <h2 className="mt-8 font-serif text-2xl text-forest">What this application covers</h2>
            <ol className="mt-4 space-y-2 text-sm text-ink/75">
              <li>
                <strong className="text-ink">1. Contact</strong> — how we reach you confidentially
              </li>
              <li>
                <strong className="text-ink">2. Interest</strong> — why IV ibogaine, concern, travel window
              </li>
              <li>
                <strong className="text-ink">3. General health</strong> — meds, conditions, EKG history
                (file optional later)
              </li>
              <li>
                <strong className="text-ink">4. Substance history</strong> — current/past patterns
              </li>
              <li>
                <strong className="text-ink">5. Eating &amp; sleep</strong> — patterns and supports
              </li>
              <li>
                <strong className="text-ink">6. Personal &amp; family</strong> — support, stressors,
                optional trauma detail
              </li>
              <li>
                <strong className="text-ink">7. Intentions &amp; consent</strong> — goals and Mexico
                provisional acknowledgment
              </li>
            </ol>

            <h2 className="mt-8 font-serif text-2xl text-forest">Trust bullets</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/75">
              <li>
                • <strong>Cardiac-first.</strong> Expect ECG/electrolyte discussion.{" "}
                <Link href="/safety-and-screening" className="text-forest-mid underline">
                  Safety
                </Link>
              </li>
              <li>
                • <strong>Route honesty.</strong> Psychoactive IV, not oral flood marketed as “infusion.”{" "}
                <Link href="/blog/ibogaine-oral-vs-iv" className="text-forest-mid underline">
                  Oral vs IV
                </Link>
              </li>
              <li>
                • <strong>No cure claims</strong> for addiction, depression, or PTSD.
              </li>
              <li>
                • <strong>Provisional Mexico.</strong> Not a U.S. FDA-approved clinic; screening required.
              </li>
            </ul>

            <p className="mt-6 text-sm text-ink/75">
              Prefer to read first?{" "}
              <Link href="/what-is-ibogaine-infusion" className="text-forest-mid underline">
                Definition
              </Link>{" "}
              ·{" "}
              <Link href="/how-it-works" className="text-forest-mid underline">
                How it works
              </Link>{" "}
              ·{" "}
              <Link href="/faq" className="text-forest-mid underline">
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
