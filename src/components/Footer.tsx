import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-forest-deep text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true">
        <Image
          src="/brand/brand-motif.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center cinematic-img"
        />
      </div>

      <Container className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto divider-gold" />
          <p className="section-label mt-8 text-accent">Invitation</p>
          <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Screening first. Conversation after.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
            Begin with a confidential application. Treatment location is shared after screening —
            not an approved U.S. clinic pathway.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="inline-flex min-h-12 items-center rounded-full bg-cream px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink hover:bg-white"
            >
              Request a private consultation
            </Link>
            <Link href="/how-it-works" className="btn-ghost !min-h-12">
              Explore the journey
            </Link>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-cream/10 pt-14 md:grid-cols-12">
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
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              {siteConfig.oneLiner}
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm tracking-wide text-cream/85 underline-offset-4 hover:text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-cream/40">
              Educational and inquiry content only. No cure claims. Ibogaine involves significant
              medical risk, including cardiac risk. Screening is required. Physician-supervised IV
              ibogaine infusion programs discussed here share the treatment location after screening —
              not an approved U.S. clinic treatment. Schedule I / not approved for any indication in
              the U.S. Not legal or medical advice.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="section-label text-accent">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="hover:text-cream">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-cream">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="section-label text-accent">Conditions</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
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
        </div>
      </Container>

      <div className="relative border-t border-cream/10">
        <Container className="flex flex-col gap-2 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-cream/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ibogaine Infusion</p>
          <p>Screening-first · location shared after screening</p>
        </Container>
      </div>
    </footer>
  );
}
