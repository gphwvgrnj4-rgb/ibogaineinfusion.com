import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { Markdown } from "@/components/Markdown";
import { blogPosts, getPost } from "@/lib/blog";
import { breadcrumbList, faqPage } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const canonicalUp: Record<string, { href: string; label: string }> = {
  "what-is-iv-ibogaine-infusion": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
  "is-ibogaine-safe-screening-cardiac-risk": { href: "/safety-and-screening", label: "Safety & screening" },
  "ibogaine-oral-vs-iv": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
  "noribogaine-explained": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
  "ibogaine-ecg-checklist": { href: "/safety-and-screening", label: "Safety & screening" },
  "ibogaine-side-effects": { href: "/safety-and-screening", label: "Safety & screening" },
  "ibogaine-contraindications": { href: "/safety-and-screening", label: "Safety & screening" },
  "electrolytes-support-iv-vs-psychoactive-iv": { href: "/safety-and-screening", label: "Safety & screening" },
  "ibogaine-treatment-package": { href: "/blog/cost-of-ibogaine-treatment", label: "Cost of ibogaine treatment" },
  "does-insurance-cover-ibogaine": { href: "/blog/cost-of-ibogaine-treatment", label: "Cost of ibogaine treatment" },
  "cheap-ibogaine-clinic-red-flags": { href: "/blog/cost-of-ibogaine-treatment", label: "Cost of ibogaine treatment" },
  "ibogaine-program-duration": { href: "/blog/cost-of-ibogaine-treatment", label: "Cost of ibogaine treatment" },
  "ibogaine-for-fentanyl": { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
  "ibogaine-vs-methadone": { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
  "ibogaine-vs-suboxone": { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
  "ibogaine-vs-traditional-rehab": { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
  "ibogaine-treatment-resistant-depression": { href: "/ibogaine-for-depression", label: "Ibogaine for depression" },
  "stanford-ibogaine-mistic": { href: "/ibogaine-for-ptsd", label: "Ibogaine for PTSD" },
  "ibogaine-vs-ketamine-for-addiction": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
  "ibogaine-vs-ayahuasca": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
  "how-to-choose-an-ibogaine-clinic": { href: "/safety-and-screening", label: "Safety & screening" },
  "cost-of-ibogaine-treatment": { href: "/safety-and-screening", label: "Safety & screening" },
  "is-ibogaine-legal-us": { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion" },
};

function extractFaqs(content: string): { q: string; a: string }[] {
  const idx = content.search(/\n## FAQ\b/);
  if (idx < 0) return [];
  const section = content.slice(idx);
  const faqs: { q: string; a: string }[] = [];
  const re = /### (.+)\n([\s\S]*?)(?=\n### |\n## |$)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section))) {
    const q = m[1].trim();
    const a = m[2]
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\n+/g, " ")
      .trim();
    if (q && a) faqs.push({ q, a: a.slice(0, 500) });
  }
  return faqs.slice(0, 12);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const faqs = extractFaqs(post.content);
  const up = canonicalUp[slug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: post.title,
        description: post.description,
        url: `${siteConfig.url}/blog/${post.slug}`,
        datePublished: post.date,
      },
      ...(faqs.length ? [faqPage(faqs)] : []),
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-medium text-accent">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            · {post.date} · {post.readTime}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">{post.description}</p>
          <Disclaimer className="mt-8" />
          {up ? (
            <p className="mt-6 rounded-lg border border-forest/10 bg-sage/20 px-4 py-3 text-sm text-ink/80">
              Canonical overview:{" "}
              <Link href={up.href} className="font-semibold text-forest-mid hover:underline">
                {up.label}
              </Link>
              {" · "}
              <Link href="/safety-and-screening" className="font-semibold text-forest-mid hover:underline">
                Safety &amp; screening
              </Link>
              {" · "}
              <Link href="/apply" className="font-semibold text-forest-mid hover:underline">
                Apply
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-sm text-ink/70">
              <Link href="/safety-and-screening" className="font-semibold text-forest-mid hover:underline">
                Safety &amp; screening
              </Link>
              {" · "}
              <Link href="/apply" className="font-semibold text-forest-mid hover:underline">
                Apply
              </Link>
            </p>
          )}
          <div className="mt-10">
            <Markdown content={post.content} />
          </div>
        </Container>
      </article>
      <CTASection />
    </>
  );
}
