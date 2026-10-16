import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { Markdown } from "@/components/Markdown";
import { blogPosts, getPost, relatedPosts } from "@/lib/blog";
import { getEnhancement } from "@/lib/blog-enhancements";
import { blogExpansions } from "@/lib/blog-expansions";
import { InterestForm } from "@/components/InterestForm";
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

  const enhancement = getEnhancement(slug);
  // Structured FAQ (visible below) takes precedence for FAQPage schema.
  const expansion = blogExpansions[slug];
  const quickAnswers = [...(enhancement?.faqs ?? []), ...(expansion?.faqs ?? [])];
  const faqs = enhancement || expansion ? [...(enhancement ? [] : extractFaqs(post.content)), ...quickAnswers] : extractFaqs(post.content);
  const up = canonicalUp[slug];
  const related = enhancement?.related?.length
    ? enhancement.related.slice(0, 3)
    : relatedPosts(slug, 3).map((p) => ({ href: `/blog/${p.slug}`, label: p.title }));
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
      <article>
        <header className="border-b border-[var(--line)] bg-forest-deep py-16 text-cream sm:py-20">
          <Container className="max-w-3xl">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
              <Link href="/blog" className="hover:text-cream">
                Blog
              </Link>{" "}
              · {post.date} · {post.readTime}
            </p>
            <h1 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">{post.description}</p>
          </Container>
        </header>
        <Container className="max-w-3xl py-14 sm:py-16">
          <Disclaimer tone="light" />
          {up ? (
            <p className="mt-8 rounded-2xl border border-[var(--line)] bg-stone/40 px-5 py-4 text-sm text-muted">
              Canonical overview:{" "}
              <Link href={up.href} className="font-medium text-forest-mid hover:underline">
                {up.label}
              </Link>
              {" · "}
              <Link href="/safety-and-screening" className="font-medium text-forest-mid hover:underline">
                Safety &amp; screening
              </Link>
              {" · "}
              <Link href="/apply" className="font-medium text-forest-mid hover:underline">
                Apply
              </Link>
            </p>
          ) : (
            <p className="mt-8 text-sm text-muted">
              <Link href="/safety-and-screening" className="font-medium text-forest-mid hover:underline">
                Safety &amp; screening
              </Link>
              {" · "}
              <Link href="/apply" className="font-medium text-forest-mid hover:underline">
                Apply
              </Link>
            </p>
          )}
          <div className="mt-12">
            <Markdown content={post.content} />
          </div>
          {expansion ? (
            <div className="mt-10" data-expansion="oct16">
              <Markdown content={expansion.content} />
            </div>
          ) : null}
          {quickAnswers.length ? (
            <section aria-labelledby="quick-answers" className="mt-14 border-t border-[var(--line)] pt-10">
              <h2 id="quick-answers" className="font-serif text-3xl tracking-tight text-forest">
                Quick answers
              </h2>
              <dl className="mt-6 space-y-6">
                {quickAnswers.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium text-ink">{item.q}</dt>
                    <dd className="mt-2 leading-relaxed text-ink/80">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}
          {related.length ? (
            <nav aria-labelledby="related-reading" className="mt-12 border-t border-[var(--line)] pt-10">
              <p className="section-label">Keep reading</p>
              <h2 id="related-reading" className="mt-3 font-serif text-2xl tracking-tight text-forest">
                Related reading
              </h2>
              <ul className="mt-5 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between gap-4 py-4 font-medium text-forest-mid hover:text-forest"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true" className="text-accent">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <aside
            aria-labelledby="post-apply"
            className="relative mt-12 overflow-hidden rounded-2xl bg-forest-deep px-6 py-10 text-center text-cream sm:px-10"
          >
            <div className="mx-auto h-px w-16 bg-accent/80" aria-hidden="true" />
            <p className="section-label mt-6 text-accent">Next step</p>
            <h2 id="post-apply" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Considering IV ibogaine infusion?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-cream/70">
              Join the waitlist with just your name, email and WhatsApp. Intake opens in small, physician-screened cohorts. We reply confidentially —
              screening first, no obligation, no outcome promises.{" "}
              <Link href="/iv-vs-oral" className="text-accent underline-offset-4 hover:underline">Why IV, not oral?</Link>
            </p>
            <div className="mx-auto mt-8 max-w-xl text-left">
              <InterestForm source={`blog:${post.slug}`} />
            </div>
            <p className="mt-6 text-sm text-cream/60">
              Prefer the full application?{" "}
              <Link href={`/apply?from=${post.slug}`} className="text-accent underline-offset-4 hover:underline">
                Apply now
              </Link>{" "}
              ·{" "}
              <Link href={`/apply?intent=call&from=${post.slug}`} className="text-accent underline-offset-4 hover:underline">
                Free confidential call
              </Link>
            </p>
          </aside>
        </Container>
      </article>
      <CTASection />
    </>
  );
}
