import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-xl font-semibold">
            Ibogaine <span className="text-accent">Infusion</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
            {siteConfig.oneLiner}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-cream/60">
            Educational and inquiry content only. No cure claims. Ibogaine involves
            significant medical risk, including cardiac risk. Screening is required.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply" className="hover:text-cream">
                Apply / Inquiry
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Conditions</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
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
      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-cream/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ibogaine Infusion. All rights reserved.</p>
          <p>ibogaineinfusion.com — screening-first inquiry</p>
        </Container>
      </div>
    </footer>
  );
}
