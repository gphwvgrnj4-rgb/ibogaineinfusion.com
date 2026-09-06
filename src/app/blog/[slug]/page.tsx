import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { Markdown } from "@/components/Markdown";
import { blogPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
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
          <div className="mt-10">
            <Markdown content={post.content} />
          </div>
        </Container>
      </article>
      <CTASection />
    </>
  );
}
