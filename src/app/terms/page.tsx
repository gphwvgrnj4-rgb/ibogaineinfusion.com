import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Ibogaine Infusion educational website: no medical advice, provisional Mexico programs, liability limits, and inquiry data.",
};

export default function TermsPage() {
  return (
    <section className="py-14">
      <Container className="prose-clinical max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-forest">Terms of Use</h1>
        <p className="text-sm text-ink/60">
          Last updated: September 6, 2026 · Interim terms — counsel review recommended
        </p>

        <h2>1. Agreement</h2>
        <p>
          By accessing ibogaineinfusion.com (the “Site”), you agree to these Terms of Use. If you do
          not agree, do not use the Site. These Terms apply to educational content and confidential
          inquiry / application submissions. They do not create a physician–patient relationship.
        </p>

        <h2>2. Educational purpose — not medical advice</h2>
        <p>
          Content on the Site is for <strong>education and confidential inquiry only</strong>. It is
          not medical advice, diagnosis, treatment, prescribing, or a clinical protocol. Nothing on
          the Site is a promise of eligibility, admission, legality for any traveler, or clinical
          outcome. Always seek qualified, independent medical and legal advice for your situation.
          Do not self-administer substances based on this Site. If you are in crisis, contact local
          emergency or crisis services immediately.
        </p>

        <h2>3. No cure or outcome guarantees</h2>
        <p>
          You agree not to interpret Site copy, forms, or communications as a guarantee that
          ibogaine — including intravenous ibogaine infusion — will cure addiction, depression,
          PTSD, or any other condition, or that any particular result will occur.
        </p>

        <h2>4. Medical risk</h2>
        <p>
          Ibogaine involves significant medical risks, including cardiac risk (such as QTc
          prolongation and arrhythmia). Intravenous delivery does not remove those risks. Screening,
          continuous monitoring, and physician judgment are clinical matters outside the scope of
          this website. You are solely responsible for decisions about your health and for
          disclosing accurate history if you submit an application.
        </p>

        <h2>5. Provisional Mexico programs; U.S. status</h2>
        <p>
          Physician-supervised IV ibogaine infusion programs <strong>discussed on this Site</strong>{" "}
          are described as <strong>provisionally available in Mexico</strong>. That is{" "}
          <strong>not</strong> an FDA-approved U.S. clinic pathway. Ibogaine remains{" "}
          <strong>Schedule I</strong> under U.S. federal law and is <strong>not FDA-approved</strong>{" "}
          for any indication. Foreign availability is not legal advice, not immigration or travel
          advice, and not a guarantee you will qualify or that any program will operate for you on
          any date. Local rules, staffing, and logistics can change.
        </p>

        <h2>6. Inquiry and application data</h2>
        <p>
          If you submit the confidential application or other inquiry forms, you represent that
          information is accurate to the best of your knowledge and that you have authority to
          provide it. Submissions may include contact details and sensitive health- or
          substance-related answers used for screening and inquiry follow-up. See our{" "}
          <Link href="/privacy">Privacy Policy</Link>. Submitting a form is not admission to
          treatment and does not obligate either party to proceed.
        </p>

        <h2>7. Acceptable use</h2>
        <p>
          You may not misuse the Site (including attempting to disrupt it, scrape it in a way that
          harms service integrity, submit malicious or fraudulent content, or use the Site to
          promote unsupervised or illegal activity). We may refuse, limit, or discontinue access or
          follow-up at our discretion.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          Site text, branding, and design are owned by the Site operator or its licensors. You may
          not copy substantial content for commercial use without prior written permission, except
          as allowed by applicable law (e.g., fair use).
        </p>

        <h2>9. Third-party links and partners</h2>
        <p>
          The Site may link to third-party resources or refer inquiries to clinical partners (which
          may be located in Mexico or elsewhere). We do not control third-party sites or practices
          and are not responsible for their content, services, or privacy practices.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF
          ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT CONTENT IS COMPLETE, CURRENT, OR
          ERROR-FREE, OR THAT THE SITE WILL BE UNINTERRUPTED OR SECURE.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SITE OPERATOR AND ITS AFFILIATES, OFFICERS,
          CONTRACTORS, AND CONTENT PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR
          GOODWILL, ARISING FROM YOUR USE OF (OR INABILITY TO USE) THE SITE, RELIANCE ON CONTENT,
          OR SUBMISSION OF INQUIRY DATA — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE
          MAXIMUM EXTENT PERMITTED BY LAW, OUR AGGREGATE LIABILITY FOR CLAIMS RELATING TO THE SITE
          WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD $100) OR THE AMOUNT YOU PAID US (IF ANY) FOR
          SITE ACCESS IN THE TWELVE MONTHS BEFORE THE CLAIM, WHICHEVER IS GREATER. SOME
          JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE CASES, LIMITS APPLY TO THE
          FULLEST EXTENT ALLOWED.
        </p>

        <h2>12. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless the Site operator and its affiliates from claims,
          losses, and expenses (including reasonable attorneys’ fees) arising from your misuse of
          the Site, your breach of these Terms, or your reliance on Site content contrary to these
          disclaimers — except to the extent caused by our willful misconduct where such exclusion
          is not permitted by law.
        </p>

        <h2>13. Governing law (placeholder)</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, U.S.A., without regard to
          conflict-of-law rules, unless mandatory consumer protections in your place of residence
          require otherwise. Venue and dispute-resolution details should be confirmed with counsel
          before relying on this placeholder for litigation strategy.{" "}
          <em>Counsel review recommended.</em>
        </p>

        <h2>14. Changes</h2>
        <p>
          We may update these Terms by posting a revised version with a new “Last updated” date.
          Continued use after posting constitutes acceptance of the revised Terms.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:hello@ibogaineinfusion.com">hello@ibogaineinfusion.com</a>. Privacy
          requests: see the <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Container>
    </section>
  );
}
