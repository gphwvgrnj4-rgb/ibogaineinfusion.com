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
    <section className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-medium text-forest sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Screening-first explainers for people comparing serious options — not psychedelic tourism content.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-forest">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 text-sm font-semibold text-forest-mid hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
