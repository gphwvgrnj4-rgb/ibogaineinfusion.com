import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
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
      <section className="border-b border-[var(--line)] bg-forest-deep py-20 text-cream sm:py-24">
        <Container className="max-w-3xl">
          <p className="section-label text-accent">Journal</p>
          <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-6xl">Blog</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            Screening-first explainers for people comparing serious options — not psychedelic tourism content.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-[1.5rem] border border-[var(--line)] bg-paper p-7 transition hover:border-accent/40 hover:shadow-[var(--shadow-soft)] sm:p-8"
              >
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
