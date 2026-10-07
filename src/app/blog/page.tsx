import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educational articles on IV ibogaine infusion, screening, cost honesty, and how to evaluate clinics — without cure claims.",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero label="Journal" title="Insights">
        Screening-first explainers for people comparing serious options — not psychedelic tourism content.
      </PageHero>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delayMs={(i % 4) * 40}>
                <article className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-paper p-7 transition hover:border-accent/40 hover:shadow-[var(--shadow-soft)] sm:p-8">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl leading-snug text-forest sm:text-[1.65rem]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-forest-mid">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent group-hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
