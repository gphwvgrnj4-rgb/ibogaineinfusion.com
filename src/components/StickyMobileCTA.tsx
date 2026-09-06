import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/15 bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/apply"
        className="flex min-h-12 w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-ink shadow-[0_8px_20px_rgba(176,141,87,0.25)] hover:bg-[#c9a46a]"
      >
        Start confidential application
      </Link>
    </div>
  );
}
