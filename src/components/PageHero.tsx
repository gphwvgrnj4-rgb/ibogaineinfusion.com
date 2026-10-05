import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-deep pt-28 pb-20 text-cream sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,149,106,0.18),_transparent_55%)]" aria-hidden="true" />
      <Container className="relative max-w-3xl">
        <div className="divider-gold" />
        <p className="section-label mt-8 text-accent">{label}</p>
        <h1 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {children ? <div className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/65">{children}</div> : null}
      </Container>
    </section>
  );
}
