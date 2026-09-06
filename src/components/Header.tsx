"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 shadow-[0_1px_0_rgba(15,61,46,0.04)] backdrop-blur-md">
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight text-forest sm:text-xl"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-forest/10 shadow-sm">
            <Image
              src="/brand/brand-motif.png"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            Ibogaine <span className="text-accent">Infusion</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex min-h-10 items-center rounded-full bg-forest px-5 py-2 text-sm font-semibold text-cream shadow-[0_8px_20px_rgba(15,61,46,0.18)] hover:bg-forest-mid"
          >
            Start confidential application
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-forest/15 text-forest hover:bg-sage/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-forest/10 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-sage/40"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="mt-2 rounded-full bg-forest px-3 py-3 text-center text-base font-semibold text-cream"
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
