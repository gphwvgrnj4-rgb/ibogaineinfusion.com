import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQ on true IV ibogaine infusion vs oral-plus-fluids, screening, risks, and what this site will and will not claim.",
};

const faqs = [
  {
    q: "Is this medical advice?",
    a: "No. Ibogaine Infusion provides educational information and a confidential inquiry channel. It does not diagnose, treat, or prescribe.",
  },
  {
    q: "Do you guarantee results for addiction, depression, or PTSD?",
    a: "No. This site does not make cure claims or outcome guarantees. Individual responses vary, evidence is incomplete in many areas, and ongoing care often remains necessary.",
  },
  {
    q: "What do you mean by true IV ibogaine infusion?",
    a: "The psychoactive ibogaine is delivered intravenously — analogous in delivery model to ketamine IV infusion clinics. It is not oral ibogaine with an IV line used only for fluids or supportive care.",
  },
  {
    q: "Is this the same as oral ibogaine with an IV drip?",
    a: "No. Oral dosing plus supportive IV fluids is a different protocol. Our core offer framing is true psychoactive IV ibogaine infusion: the alkaloid itself given by vein under screening and monitoring.",
  },
  {
    q: "Why compare to ketamine infusion clinics?",
    a: "As a service-design parallel: screened patients, intravenous psychoactive medicine, supervised observation. It is not a claim that ibogaine and ketamine are medically equivalent or interchangeable.",
  },
  {
    q: "Is ibogaine safe?",
    a: "Ibogaine carries serious risks, including cardiac risk. Safety depends heavily on screening, setting, monitoring, and individual medical factors. No responsible source should call it casually safe. IV delivery does not eliminate those concerns.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Your inquiry is received for confidential review. If a webhook is configured, it is forwarded to that endpoint; otherwise the site runs in demo acceptance mode for local/testing environments.",
  },
  {
    q: "Can I start without medical screening?",
    a: "Not in any model this site endorses. Cardiac and medical screening are foundational for true IV ibogaine infusion. Programs that skip meaningful medical review should be treated with extreme caution.",
  },
  {
    q: "How much does treatment cost?",
    a: "Prices vary widely by location, medical intensity, and inclusions. We do not invent global averages. Ask what screening, IV administration, monitoring, and aftercare are included before comparing quotes.",
  },
  {
    q: "Is ibogaine legal where I live?",
    a: "Legal status varies by jurisdiction. Confirm local law and the legal context of any program location with qualified advisors. This site does not provide legal advice.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">FAQ</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Direct answers on true IV infusion, screening, and limits — clarity over hype.
          </p>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-forest/10 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-serif text-lg text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.a}</p>
            </details>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
