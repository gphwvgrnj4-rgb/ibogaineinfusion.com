import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Ibogaine Infusion: application form data (contact and health/substance answers), screening purpose, retention, Mexico partners, and international transfer.",
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <Container className="prose-clinical max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-forest">Privacy Policy</h1>
        <p className="text-sm text-ink/60">
          Last updated: September 6, 2026 · Interim policy — counsel review recommended
        </p>

        <h2>1. Overview</h2>
        <p>
          This Privacy Policy describes how ibogaineinfusion.com (the “Site”) handles information
          when you browse the Site or submit a confidential inquiry / multi-step application. The
          Site is educational and inquiry-oriented. <strong>It does not provide medical advice</strong>,
          diagnosis, or treatment, and submitting a form does not create a physician–patient
          relationship or guarantee eligibility.
        </p>

        <h2>2. Data we collect on the application form</h2>
        <p>When you use the confidential application, we may collect:</p>
        <ul>
          <li>
            <strong>Contact details</strong> — name, email, phone, preferred contact method, timezone
          </li>
          <li>
            <strong>Interest / logistics</strong> — reasons for interest, primary concern, travel
            window, how you found us, open questions
          </li>
          <li>
            <strong>Health-related answers</strong> — height/weight, medical conditions, medications
            and supplements, hospital/surgery history, liver-panel or EKG history/notes, ranked health
            concerns (and optional later file uploads if offered)
          </li>
          <li>
            <strong>Substance-related answers</strong> — current/past substance or behavioral
            patterns, recreational use, alcohol detail, psychedelic experience, and free-text
            elaborations
          </li>
          <li>
            <strong>Eating, sleep, and personal context</strong> — eating-pattern flags, diet/allergies,
            sleep quality/meds, relationship and support context, stressors, and optional sensitive
            mental-health questions you choose to answer
          </li>
          <li>
            <strong>Intentions and consent flags</strong> — goals/intentions, consent to contact,
            accuracy attestation, and acknowledgment of provisional Mexico availability / non–FDA
            approval / cardiac-risk framing
          </li>
        </ul>
        <p>
          A thinner legacy inquiry (if used) may collect name, email, phone, message, and consent
          only. Technical data such as IP address, user-agent, and basic server logs may be
          processed for security and operations.
        </p>

        <h2>3. Purpose of processing</h2>
        <p>We use this information to:</p>
        <ul>
          <li>Respond to confidential screening / inquiry requests</li>
          <li>Assess medical and readiness signals for a possible discovery conversation</li>
          <li>Coordinate follow-up and, if appropriate, clinical partner screening</li>
          <li>Improve Site operations, prevent spam/abuse, and meet legal obligations</li>
        </ul>
        <p>
          We do <strong>not</strong> use application answers to provide remote diagnosis or to
          promise treatment outcomes.
        </p>

        <h2>4. Sharing with clinical partners (including Mexico)</h2>
        <p>
          Physician-supervised IV ibogaine infusion programs discussed on this Site are{" "}
          <strong>provisionally available in Mexico</strong>. If you inquire about care, we may share
          relevant application information with <strong>clinical partners or medical programs in
          Mexico</strong> (and their support vendors under contract) for screening and coordination —
          only as needed for that purpose. We do not sell your personal information.
        </p>

        <h2>5. International transfers</h2>
        <p>
          If you are located outside Mexico (including in the United States or elsewhere),
          submitting an application may involve <strong>international transfer</strong> of contact
          and health-related data to partners, processors, or systems in Mexico and/or other
          countries. Those jurisdictions may have different data-protection laws than your home
          country. By submitting the form, you acknowledge this transfer may occur for screening and
          inquiry follow-up.
        </p>

        <h2>6. Retention</h2>
        <p>
          We retain inquiry and application records for as long as reasonably necessary to complete
          screening follow-up, maintain operational records, resolve disputes, and meet legal or
          security requirements, then delete or de-identify them when no longer needed — unless a
          longer period is required by law or a legitimate clinical-coordination need. Exact
          retention schedules should be confirmed with counsel and operational partners.
        </p>

        <h2>7. Processors and webhooks</h2>
        <p>
          Submissions may be forwarded to configured endpoints (for example a form webhook), email
          notification services, or hosting/infrastructure providers that process data on our
          behalf. Those processors should only use data to provide their services to us.
        </p>

        <h2>8. Cookies and analytics</h2>
        <p>
          The Site may use essential cookies or similar technologies for security and basic
          function. If analytics or advertising tools are added, this policy should be updated to
          name them and describe choices available to you.
        </p>

        <h2>9. Your choices and requests</h2>
        <p>
          Subject to applicable law, you may request access, correction, or deletion of personal
          information we hold about you, or withdraw consent to further contact (which will not
          affect prior lawful processing). Contact us using the email below. We may need to verify
          your identity before fulfilling a request. Some records may be retained where legally
          required.
        </p>

        <h2>10. Children</h2>
        <p>
          The Site is not directed to children under 18 (and not to anyone under 21 for
          treatment-related inquiry). Do not submit application data for a minor except where a
          lawful guardian process is explicitly offered and required by a clinical partner.
        </p>

        <h2>11. Security</h2>
        <p>
          We use reasonable administrative and technical measures appropriate to the sensitivity of
          inquiry data. No method of transmission or storage is perfectly secure.
        </p>

        <h2>12. Not medical advice</h2>
        <p>
          Nothing in this Privacy Policy or on the Site is medical or legal advice. Ibogaine involves
          significant risk, including cardiac risk. See{" "}
          <Link href="/safety-and-screening">Safety &amp; screening</Link> and{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2>13. Changes</h2>
        <p>
          We may update this policy by posting a revised version with a new “Last updated” date.
        </p>

        <h2>14. Contact</h2>
        <p>
          Privacy questions or requests:{" "}
          <a href="mailto:hello@ibogaineinfusion.com">hello@ibogaineinfusion.com</a>.
        </p>
      </Container>
    </section>
  );
}
