import { siteConfig } from "@/lib/site";

export type FaqItem = { q: string; a: string };

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqPage(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function medicalWebPage(opts: {
  name: string;
  description: string;
  path: string;
  faqs?: FaqItem[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${siteConfig.url}${opts.path}#webpage`,
      url: `${siteConfig.url}${opts.path}`,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: {
        "@type": "MedicalEntity",
        name: "IV ibogaine infusion",
        description:
          "Intravenous psychoactive ibogaine under physician supervision with cardiac screening and monitoring. Not FDA-approved.",
      },
    },
  ];
  if (opts.faqs?.length) graph.push(faqPage(opts.faqs));
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function organizationAndWebsite() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.oneLiner,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}
