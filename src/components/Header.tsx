"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-forest-deep/85 text-cream backdrop-blur-xl">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3 tracking-tight"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-infinity-iboga.png"
            alt="Ibogaine Infusion logo: differentiated infinity symbol"
            width={96}
            height={64}
            className="h-8 w-auto rounded-sm bg-cream/95 p-0.5 sm:h-9"
            priority
          />
          <span className="font-serif text-[1.15rem] text-cream sm:text-xl">
            Ibogaine <span className="text-accent">Infusion</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/apply" className="btn-gold !min-h-10 !px-5 !text-[0.7rem]">
            Apply
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-cream/20 text-cream hover:bg-cream/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-cream/10 bg-forest-deep lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream/85 hover:bg-cream/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="btn-gold mt-3 text-center"
              onClick={() => setOpen(false)}
            >
              Start confidential application
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
