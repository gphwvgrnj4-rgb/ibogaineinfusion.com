import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy stub for Ibogaine Infusion inquiry website.",
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <Container className="prose-clinical max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-forest">Privacy Policy</h1>
        <p className="text-sm text-ink/60">Last updated: September 6, 2026 · Stub for legal review</p>
        <h2>Overview</h2>
        <p>
          This privacy stub describes how ibogaineinfusion.com may handle information submitted
          through the confidential inquiry form. Replace this page with counsel-approved language
          before production launch.
        </p>
        <h2>Information you provide</h2>
        <p>
          When you submit the inquiry form, we collect name, email, phone, optional message content,
          and consent confirmation. If FORM_WEBHOOK_URL is configured, submissions are
          forwarded to that endpoint.
        </p>
        <h2>Demo mode</h2>
        <p>
          Without a webhook, submissions may be logged server-side for development only and are not
          a production privacy program.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This stub assumes minimal first-party operation. Document any analytics, advertising, or
          session tools you add.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy requests related to this site, use the inquiry form or the contact channel
          published at launch after legal review.
        </p>
      </Container>
    </section>
  );
}
