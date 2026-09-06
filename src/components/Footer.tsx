import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-forest/10 bg-forest text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <Image
          src="/brand/brand-motif.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <Container className="relative grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-cream/20">
              <Image
                src="/brand/brand-motif.png"
                alt=""
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <p className="font-serif text-xl font-semibold tracking-tight">
              Ibogaine <span className="text-accent">Infusion</span>
            </p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">
            {siteConfig.oneLiner}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Supervised IV ibogaine infusion inquiry and treatment are available{" "}
            <strong className="font-semibold text-cream">provisionally in Mexico</strong>.
            Not a U.S. FDA-approved clinic. Screening-first; jurisdiction discussed with transparency.
            No affiliation with Eleusis or other brands.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-cream/55">
            Educational and inquiry content only. No cure claims. Ibogaine involves
            significant medical risk, including cardiac risk. Screening is required.
          </p>
        </div>

        <div>
          <p className="section-label text-accent">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/85">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="hover:text-cream">
                Start confidential application
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="section-label text-accent">Conditions</p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/85">
            {siteConfig.conditionLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cream">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="relative border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-cream/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ibogaine Infusion. All rights reserved.</p>
          <p>www.ibogaineinfusion.com — screening-first · provisional Mexico availability</p>
        </Container>
      </div>
    </footer>
  );
}
