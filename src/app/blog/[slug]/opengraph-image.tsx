import { blogPosts, getPost } from "@/lib/blog";
import { renderOgCard } from "@/lib/og";

export const alt = "Ibogaine Infusion Journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgCard({ title: post?.title ?? "Ibogaine Infusion Journal", label: "Journal" });
}
