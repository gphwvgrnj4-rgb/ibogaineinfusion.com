import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-forest-deep text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true">
        <Image
          src="/brand/brand-motif.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center cinematic-img"
        />
      </div>
      <Container className="relative grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-infinity-iboga.png"
              alt="Ibogaine Infusion logo: differentiated infinity symbol"
              width={72}
              height={48}
              className="h-8 w-auto rounded-md bg-cream/95 p-0.5"
            />
            <p className="font-serif text-2xl tracking-tight">
              Ibogaine <span className="text-accent">Infusion</span>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-cream/65">
            {siteConfig.oneLiner}
          </p>
          <p className="mt-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm tracking-wide text-cream/90 underline-offset-4 hover:text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-8 max-w-md text-xs leading-relaxed text-cream/45">
            Physician-supervised IV ibogaine infusion programs discussed here share the{" "}
            <strong className="font-medium text-cream/70">treatment location after screening</strong> —
            not an approved U.S. clinic treatment. Journey shape may resemble infusion-clinic care
            (consult → screen → monitored infusion → integration); that is <em>not</em> ketamine legal,
            evidence, or risk equivalence. Screening-first; Schedule I / not approved for any indication
            in the U.S. Educational only — not legal or medical advice.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="section-label text-accent">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
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

        <div className="md:col-span-3">
          <p className="section-label text-accent">Conditions</p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
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
        <Container className="flex flex-col gap-2 py-6 text-[0.7rem] uppercase tracking-[0.14em] text-cream/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ibogaine Infusion</p>
          <p>Screening-first · location shared after screening</p>
        </Container>
      </div>
    </footer>
  );
}
