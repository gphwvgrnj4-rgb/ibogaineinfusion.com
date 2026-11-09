"use client";

/**
 * Homepage / dark-band waitlist entry.
 * Previously collected name + WhatsApp + preferred location; now email-only
 * via WaitlistForm while the clinic is not yet open.
 */
import { WaitlistForm } from "./WaitlistForm";

export function InterestForm({ source }: { source: string }) {
  return <WaitlistForm source={source} variant="dark" />;
}
