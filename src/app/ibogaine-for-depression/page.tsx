import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbList, faqPage, type FaqItem } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/ibogaine-for-depression" },
  title: "Ibogaine for Depression: Evidence, Risks & IV Infusion",
  description:
    "Can ibogaine help depression? What research shows (mostly oral, open-label), QTc heart risks, med interactions, and IV infusion screening. Not approved.",
};

const faqs: FaqItem[] = [
  {
    q: "Can ibogaine treat depression?",
    a: "It has not been shown to. Mood improvements have been reported in small, open-label studies that mostly used oral ibogaine, often in addiction or PTSD groups. There are no completed placebo-controlled trials for depression, and ibogaine is not approved for any indication.",
  },
  {
    q: "Is IV ibogaine infusion different from the ibogaine in depression studies?",
    a: "Yes. Most published studies gave ibogaine by mouth. IV lines in those studies usually delivered fluids or magnesium. Controlled evidence for psychoactive IV ibogaine is sparse, so oral findings should not be assumed to transfer.",
  },
  {
    q: "Can I take ibogaine while on antidepressants?",
    a: "That decision belongs to a physician. Some antidepressants prolong QTc or affect CYP2D6, which can raise cardiac risk with ibogaine. Never stop or taper medication on your own; screening reviews your full medication list.",
  },
  {
    q: "Is ibogaine safe for people with depression?",
    a: "Ibogaine carries real cardiac risk (QTc prolongation and arrhythmias) for everyone, and psychiatric history adds screening questions. Safety depends on ECG screening, continuous monitoring and emergency readiness, and some people will not be eligible.",
  },
];

export default function DepressionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "Ibogaine for Depression: Evidence, Risks & IV Infusion",
        url: `${siteConfig.url}/ibogaine-for-depression`,
        description: metadata.description as string,
      },
      faqPage(faqs),
      breadcrumbList([ { name: "Home", path: "/" }, { name: "Ibogaine for depression", path: "/ibogaine-for-depression" } ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-forest/10 bg-white py-14">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Condition overview</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-forest">Ibogaine for depression: what the evidence shows</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            People searching &ldquo;ibogaine for depression&rdquo; usually want two answers: does it
            work, and is it safe? The honest short answer is that ibogaine treatment for depression is
            still investigational. Published mood findings are small, mostly open-label and mostly from{" "}
            <strong className="text-ink">oral</strong> ibogaine, often in people being treated for
            addiction or PTSD. This site focuses on{" "}
            <strong className="text-ink">physician-supervised IV ibogaine infusion</strong>, with
            controlled IV evidence for depression being sparse. Ibogaine is a U.S. Schedule I substance
            and is not approved for any indication, including depression. It can prolong the QTc
            interval, so cardiac screening comes first.
          </p>
          <Disclaimer className="mt-8" />
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Ibogaine Infusion is a clinic dedicated exclusively to physician-supervised IV ibogaine
            therapy, with intakes in <strong className="text-ink">Mexico and Gabon</strong> — not an
            approved U.S. clinic treatment. Educational information; not legal advice.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="prose-clinical max-w-3xl">
          <h2>Keep established care in the frame</h2>
          <p>
            If you are living with depression, continuity with qualified clinicians comes first.
            Exploring ibogaine as an educational topic should not interrupt medications abruptly or
            replace urgent mental-health care. Active suicidal crisis requires emergency and
            psychiatric pathways — not a waitlist form.
          </p>

          <h2>What we can responsibly say</h2>
          <ul>
            <li>There is research interest in ibogaine/noribogaine and mood-related outcomes</li>
            <li>
              Some observational contexts (including veteran cohorts with PTSD/depression symptom
              measures) report open-label changes — often after <strong>oral</strong> ibogaine
              protocols
            </li>
            <li>Cardiac risk (QTc) is a central safety theme across exposure routes</li>
            <li>
              This site’s entity is IV psychoactive infusion under physician supervision, with
              honest labeling that IV controlled evidence is sparse
            </li>
          </ul>
          <p>
            <strong>Cannot say:</strong> approved antidepressant; guaranteed remission;
            “proven by Nature Medicine as IV therapy” (Cherian 2024 is oral ibogaine + IV
            magnesium, open-label); equivalent evidence maturity to ketamine clinic protocols.
          </p>

          <h2>Does ibogaine help depression? What studies actually measured</h2>
          <p>Most of what is known about ibogaine and depression comes from three kinds of sources:</p>
          <ol>
            <li>
              <strong>Addiction cohorts that also tracked mood.</strong> Some observational follow-ups
              of people treated with oral ibogaine for opioid use disorder recorded depression scores
              alongside drug use. Improvements were reported in some participants, but there was no
              control group, and people were also changing their environment, substance use and
              support at the same time. See our summary of the{" "}
              <Link href="/blog/brown-alper-2018-depression-followup">Brown &amp; Alper 2018 depression follow-up</Link>.
            </li>
            <li>
              <strong>Veteran PTSD/TBI work.</strong> An open-label study in special operations
              veterans (Cherian et al., <em>Nature Medicine</em>, 2024) gave <strong>oral</strong>{" "}
              ibogaine with <strong>IV magnesium</strong> and measured several symptom domains,
              including depression. It had no placebo arm and is not evidence for psychoactive IV
              ibogaine. See <Link href="/ibogaine-for-ptsd">ibogaine for PTSD</Link>.
            </li>
            <li>
              <strong>Laboratory and animal research</strong> on neuroplasticity markers. This is
              useful for forming hypotheses, but it is not human treatment evidence. See{" "}
              <Link href="/blog/ibogaine-neuroplasticity-preclinical">ibogaine neuroplasticity (preclinical)</Link>.
            </li>
          </ol>
          <p>
            What none of these provide: a randomized, placebo-controlled trial showing ibogaine treats
            depression, or any trial of psychoactive IV ibogaine for depression.
          </p>

          <h2>Ibogaine treatment for depression vs treatment-resistant depression</h2>
          <p>
            Many people search after several antidepressants have not helped. That situation (often
            called treatment-resistant depression) already has established next steps with a
            psychiatrist, such as medication changes, psychotherapy, ketamine or esketamine pathways,
            TMS and ECT. Ibogaine is not one of those established steps. If you are weighing it, it is
            safest to treat it as something you raise <em>with</em> your psychiatrist, not instead of
            them. Our deeper write-up:{" "}
            <Link href="/blog/ibogaine-treatment-resistant-depression">ibogaine and treatment-resistant depression</Link>.
          </p>

          <h2>Antidepressants, QTc and why screening is stricter for mood patients</h2>
          <p>Depression care often involves medications that matter for ibogaine safety:</p>
          <ul>
            <li>
              <strong>QT-prolonging drugs.</strong> Some antidepressants and antipsychotics can
              lengthen the QTc interval. Ibogaine can also prolong QTc, and combining them can raise
              arrhythmia risk.
            </li>
            <li>
              <strong>Drug metabolism.</strong> Ibogaine is broken down mainly by the liver enzyme
              CYP2D6. Some antidepressants inhibit that enzyme, which can change exposure.
            </li>
            <li>
              <strong>Serotonergic and psychiatric effects.</strong> Intense psychoactive experiences
              can be destabilizing for some mood conditions, and bipolar history or psychosis history
              are common exclusion topics.
            </li>
          </ul>
          <p>
            Never stop or taper an antidepressant on your own to &ldquo;qualify&rdquo;. Any change
            must be planned by your prescriber, and a reputable program will ask for your full
            medication list, an ECG and electrolytes before anything else. Read{" "}
            <Link href="/blog/ibogaine-ssri-psychiatric-meds">ibogaine with SSRIs and psychiatric meds</Link>{" "}
            and <Link href="/blog/ibogaine-contraindications">ibogaine contraindications</Link>.
          </p>

          <h2>Where IV ibogaine infusion programs take place</h2>
          <p>
            Because ibogaine is Schedule I in the U.S., our physician-supervised infusions take place
            outside the country, with waitlist intakes at two locations: <strong>Mexico</strong> and{" "}
            <strong>Gabon</strong>. You choose a preferred location when you apply. Location does
            not change the medical rules: cardiac screening, continuous ECG monitoring, emergency
            capability and an aftercare plan with your home clinicians should all be in place. See{" "}
            <Link href="/blog/how-to-choose-an-ibogaine-clinic">how to choose an ibogaine clinic</Link>{" "}
            and <Link href="/blog/ibogaine-program-duration">how long a program lasts</Link>.
          </p>

          <h2>Realistic expectations</h2>
          <p>
            Some people describe feeling lighter or clearer in the days after an ibogaine experience.
            That early shift is not the same as lasting remission, and the research cannot yet say how
            often it lasts or for whom. Integration matters: keep your therapist, keep your
            psychiatrist informed, and have a safety plan. If you are in crisis or thinking about
            suicide, contact emergency services or a crisis line now. A waitlist form is not the right
            place.
          </p>

          <h2>IV ibogaine vs ketamine for depression</h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 bg-sage/30">
                  <th className="px-3 py-2 font-semibold text-forest">Axis</th>
                  <th className="px-3 py-2 font-semibold text-forest">Ketamine / esketamine</th>
                  <th className="px-3 py-2 font-semibold text-forest">IV ibogaine infusion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Evidence maturity</td>
                  <td className="px-3 py-2 text-ink/80">More clinical infrastructure</td>
                  <td className="px-3 py-2 text-ink/80">Limited; sparse IV controlled data</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">U.S. regulatory posture</td>
                  <td className="px-3 py-2 text-ink/80">Approved anesthetic; esketamine labeled pathway</td>
                  <td className="px-3 py-2 text-ink/80">Schedule I; not approved for any indication</td>
                </tr>
                <tr className="border-b border-forest/10">
                  <td className="px-3 py-2 text-ink/80">Dominant risk narrative</td>
                  <td className="px-3 py-2 text-ink/80">Dissociation, BP/HR, rare psych AEs</td>
                  <td className="px-3 py-2 text-ink/80">QTc / arrhythmia + prolonged intensity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Deep dive:{" "}
            <Link href="/blog/ibogaine-vs-ketamine-for-addiction">ibogaine vs ketamine</Link>.
          </p>

          <h2>How the infusion journey relates to depression care</h2>
          <ol>
            <li>Psychiatric history and current regimen review (including QT-prolonging agents)</li>
            <li>Medical/cardiac clearance</li>
            <li>Physician-supervised IV ibogaine infusion with telemetry</li>
            <li>Observation through the acute window</li>
            <li>Integration: therapy continuity, medication plan, safety planning</li>
          </ol>

          <h2>Overlap with PTSD narratives</h2>
          <p>
            Depression searches often co-travel with PTSD and veteran TBI discussions. Open-label
            magnesium–ibogaine work in special operations veterans measured multiple symptom domains
            after <strong>oral</strong> ibogaine with <strong>IV magnesium</strong>. That paper is
            research landscape — not proof that IV psychoactive ibogaine is an approved depression
            treatment. See <Link href="/ibogaine-for-ptsd">ibogaine for PTSD</Link>.
          </p>

          <h2>Psychiatric and medical caution</h2>
          <ul>
            <li>Medication washout or changes must be clinician-directed</li>
            <li>Cardiac screening remains relevant regardless of psychiatric motivation</li>
            <li>Integration support matters when intense experiences intersect with mood disorders</li>
            <li>Expectancy and temporary afterglow are not the same as durable remission</li>
          </ul>

          <h2>Quick answers</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <p>
            <strong>Next step:</strong> Read{" "}
            <Link href="/safety-and-screening">safety and screening</Link> to see the cardiac and
            medication checks first, then <Link href="/apply">apply confidentially</Link> to ask
            whether screening makes sense for you.
          </p>

          <p>
            Continue with <Link href="/safety-and-screening">safety &amp; screening</Link>,{" "}
            <Link href="/what-is-ibogaine-infusion">what infusion means</Link>, and{" "}
            <Link href="/apply">confidential application</Link>.
          </p>
        </Container>
      </section>
      <CTASection title="Ask about mood-related screening questions" />
    </>
  );
}
