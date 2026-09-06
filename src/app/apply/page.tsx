import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for IV Ibogaine Infusion Screening Consult",
  description:
    "Request a confidential screening consult for physician-supervised IV ibogaine infusion. Cardiac-first diligence, no cure claims, clear next steps.",
  alternates: { canonical: "/apply" },
};

const faqs = [
  {
    q: "Does submitting this form admit me to treatment?",
    a: "No. It requests a confidential screening conversation. Admission requires medical review and physician go/no-go.",
  },
  {
    q: "Do I need an ECG before I apply?",
    a: "Helpful but not always available on day one. Expect ECG discussion before any infusion clearance.",
  },
  {
    q: "Will you promise results for addiction, depression, or PTSD?",
    a: "No. We do not make cure or guaranteed-outcome claims.",
  },
  {
    q: "Is my information confidential?",
    a: "Treat submissions as sensitive health-related inquiries under the published privacy policy.",
  },
  {
    q: "Is ibogaine FDA-approved?",
    a: "No. It is not FDA-approved and is Schedule I under U.S. federal law.",
  },
];

export default function ApplyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Apply for IV Ibogaine Infusion Screening Consult",
        url: `${siteConfig.url}/apply`,
        description: 'Request a confidential screening consult for physician-supervised IV ibogaine infusion. Cardiac-first diligence, no cure claims, clear next steps.',
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
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Confidential inquiry
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-forest">
              Apply: screening consult for IV ibogaine infusion
            </h1>
            <p className="mt-4 leading-relaxed text-ink/75">
              Requesting screening starts a confidential medical conversation — not automatic admission.
              This is about physician-supervised{" "}
              <strong className="text-ink">intravenous psychoactive ibogaine</strong> (consult → cardiac
              screen → monitored IV infusion → integration). Published research is mostly oral;
              psychoactive IV evidence is sparse. Ibogaine is not FDA-approved.
            </p>
            <Disclaimer className="mt-6" />

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
                • <strong>Evidence gap.</strong> Much cited literature is oral (Knuijver 2021; Cherian/MISTIC
                2024 oral + IV Mg). We do not invent IV trials.
              </li>
              <li>
                • <strong>No cure claims</strong> for addiction, depression, or PTSD.
              </li>
              <li>
                • <strong>Legal reality.</strong> U.S. Schedule I; not FDA-approved.{" "}
                <Link href="/blog/is-ibogaine-legal-us" className="text-forest-mid underline">
                  Legality snapshot
                </Link>
              </li>
            </ul>

            <h2 className="mt-8 font-serif text-2xl text-forest">What to prepare</h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-ink/75">
              <li>Recent ECG/EKG report if available</li>
              <li>Current medications and supplements (doses)</li>
              <li>Substance-use history and last-use timing if applicable</li>
              <li>Relevant psychiatric and medical history</li>
              <li>Questions about observation length, cost tier, and aftercare</li>
            </ol>
            <p className="mt-4 text-sm text-ink/75">
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
          <LeadForm />
        </Container>
      </section>
    </>
  );
}
