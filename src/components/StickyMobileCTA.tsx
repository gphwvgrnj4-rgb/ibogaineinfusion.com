import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/apply"
        className="flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-[0.7rem] font-medium uppercase tracking-[0.16em] text-cream"
      >
        Request a private consultation
      </Link>
    </div>
  );
}
