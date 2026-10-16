import { blogPosts } from "@/lib/blog";

/** Indexable static routes (also used by sitemap.ts). */
export const staticRoutes = [
  "",
  "/ibogaine-for-addiction",
  "/ibogaine-for-depression",
  "/ibogaine-for-ptsd",
  "/what-is-ibogaine-infusion",
  "/how-it-works",
  "/iv-vs-oral",
  "/safety-and-screening",
  "/faq",
  "/apply",
  "/blog",
  "/privacy",
  "/terms",
] as const;

/** Every live internal path, used to turn plain-text paths in blog copy into real links. */
export const internalPaths: ReadonlySet<string> = new Set<string>([
  ...staticRoutes.filter((p) => p !== ""),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
]);
