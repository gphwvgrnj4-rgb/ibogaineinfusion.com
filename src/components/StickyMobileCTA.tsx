import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <Link href="/apply" className="btn-gold flex w-full">
        Start confidential application
      </Link>
    </div>
  );
}
