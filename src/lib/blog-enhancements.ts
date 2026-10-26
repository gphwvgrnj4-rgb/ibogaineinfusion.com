import type { FaqItem } from "@/lib/schema";

/**
 * Structured on-page additions for the highest-intent blog posts:
 * a short visible FAQ (also emitted as FAQPage JSON-LD), related internal
 * links, and a screening-first /apply CTA. Rendered by app/blog/[slug]/page.tsx.
 *
 * Copy rules: factual and cautious; no outcome guarantees; no regulatory-status
 * claims beyond the sitewide disclaimers; no images.
 */
export type BlogEnhancement = {
  faqs: FaqItem[];
  related: { href: string; label: string }[];
};

export const blogEnhancements: Record<string, BlogEnhancement> = {
  "cost-of-ibogaine-treatment": {
    faqs: [
      {
        q: "What drives the cost of an IV ibogaine infusion program?",
        a: "Mostly medical infrastructure: physician supervision, pre-treatment ECG and labs, continuous cardiac monitoring, multi-day observation, and emergency readiness. The medicine itself is usually a small part of the total.",
      },
      {
        q: "Why do quoted prices vary so much between programs?",
        a: "Programs differ in staffing ratios, length of observation, diagnostics, and what is actually included. Ask for a written list of inclusions and exclusions before comparing totals.",
      },
      {
        q: "Should I pay a deposit before medical screening?",
        a: "Be cautious. A responsible program reviews your medical history and cardiac screening first, and is clear about refund terms if you are not medically cleared.",
      },
      {
        q: "Is a lower price a sign of a worse program?",
        a: "Not automatically, but missing continuous ECG monitoring, vague route descriptions (oral vs IV), or unclear emergency plans are red flags at any price.",
      },
    ],
    related: [
      { href: "/blog/ibogaine-treatment-package", label: "What a medical treatment package should include" },
      { href: "/blog/does-insurance-cover-ibogaine", label: "Does insurance cover ibogaine?" },
      { href: "/blog/cheap-ibogaine-clinic-red-flags", label: "Cheap clinic red flags" },
      { href: "/blog/how-to-choose-an-ibogaine-clinic", label: "How to choose an ibogaine clinic" },
      { href: "/how-it-works", label: "How the journey works" },
    ],
  },
  "ibogaine-treatment-package": {
    faqs: [
      {
        q: "What is the minimum a medical ibogaine package should include?",
        a: "A written description of the route, pre-treatment ECG and labs, physician oversight, continuous cardiac telemetry during and after dosing, an emergency plan, an observation period, and an aftercare or integration plan.",
      },
      {
        q: "Is IV magnesium in a package the same as IV ibogaine?",
        a: "No. Magnesium and fluids are supportive care. A psychoactive IV infusion means ibogaine itself is given intravenously, and the package should say which one you are getting.",
      },
      {
        q: "Do comfort amenities matter?",
        a: "They can make a stay more pleasant, but they never replace cardiac monitoring, trained staff, or emergency capability.",
      },
      {
        q: "Does any package guarantee results?",
        a: "No. Responsible programs describe what care is provided, not promised outcomes. Treat guarantees as a warning sign.",
      },
    ],
    related: [
      { href: "/blog/cost-of-ibogaine-treatment", label: "IV ibogaine infusion cost" },
      { href: "/blog/ibogaine-telemetry-acls-monitoring", label: "Telemetry and emergency monitoring" },
      { href: "/blog/ibogaine-luxury-retreat-red-flags", label: "Luxury retreat red flags" },
      { href: "/blog/ibogaine-program-duration", label: "How long a program lasts" },
      { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion?" },
    ],
  },
  "is-ibogaine-safe-screening-cardiac-risk": {
    faqs: [
      {
        q: "What is the main safety concern with ibogaine?",
        a: "Ibogaine can prolong the QTc interval on an ECG, which raises the risk of dangerous heart rhythms. Serious adverse events, including deaths, have been reported in the literature.",
      },
      {
        q: "What does cardiac screening usually involve?",
        a: "A resting ECG with QTc review, electrolytes such as potassium and magnesium, a full medication and supplement review, and cardiac and psychiatric history, all reviewed by a physician.",
      },
      {
        q: "Why is continuous monitoring needed during treatment?",
        a: "Heart-rhythm changes can develop hours after dosing, so continuous ECG telemetry and staff trained in emergency cardiac care are expected throughout the observation window.",
      },
      {
        q: "Can screening result in being turned down?",
        a: "Yes. A decline or delay is a legitimate safety outcome, for example with long QT, certain heart conditions, or interacting medications.",
      },
    ],
    related: [
      { href: "/safety-and-screening", label: "Safety and screening overview" },
      { href: "/blog/ibogaine-contraindications", label: "Who should not receive IV ibogaine" },
      { href: "/blog/ibogaine-ecg-checklist", label: "Pre-infusion ECG checklist" },
      { href: "/blog/ibogaine-drug-interactions-qtc", label: "Drug interactions and QTc" },
      { href: "/blog/preparing-for-ibogaine-screening", label: "Preparing for screening" },
    ],
  },
  "ibogaine-contraindications": {
    faqs: [
      {
        q: "Who is usually not a candidate for ibogaine?",
        a: "People with long QT, significant structural heart disease, a history of serious arrhythmias, or uncorrected electrolyte problems are commonly excluded. Final decisions belong to the screening physician.",
      },
      {
        q: "Can my current medications be a problem?",
        a: "Yes. Some medications prolong QTc or change how ibogaine is metabolized (for example CYP2D6 inhibitors). Never stop or taper a medication on your own; discuss it with your prescriber and the screening team.",
      },
      {
        q: "Are psychiatric conditions relevant?",
        a: "Yes. Certain psychiatric histories and medications need careful physician review, and some may lead to exclusion or a delay.",
      },
      {
        q: "If I am excluded, does that mean I cannot get help?",
        a: "No. Established, evidence-based treatments remain available, and a clinician can help you find the safest option.",
      },
      {
        q: "Is there a full ibogaine contraindications list?",
        a: "There is no official label because ibogaine is not an approved medicine. Screening programs commonly review QTc and heart rhythm, structural heart disease, electrolytes, interacting medications, liver function, seizure history, psychiatric history including psychosis, recent substance use, and pregnancy. The screening physician makes the final decision.",
      },
      {
        q: "Do liver problems affect ibogaine screening?",
        a: "They can. Ibogaine is metabolized in the liver, mainly by the CYP2D6 enzyme, so significant liver impairment is commonly reviewed and may lead to exclusion. Bring recent liver function tests if you have them.",
      },
      {
        q: "Can I take ibogaine with a history of psychosis or bipolar disorder?",
        a: "These histories need careful physician review and commonly lead to exclusion, because an intense, long psychoactive session can be unsafe. Do not change psychiatric medications to qualify; any change should happen only under medical supervision.",
      },
    ],
    related: [
      { href: "/safety-and-screening", label: "Safety and screening overview" },
      { href: "/blog/ibogaine-pre-existing-heart-conditions", label: "Pre-existing heart conditions" },
      { href: "/blog/ibogaine-ssri-psychiatric-meds", label: "SSRIs and psychiatric medications" },
      { href: "/blog/ibogaine-cyp2d6-metabolism", label: "CYP2D6 metabolism" },
      { href: "/blog/is-ibogaine-safe-screening-cardiac-risk", label: "Cardiac screening and safety" },
    ],
  },
  "preparing-for-ibogaine-screening": {
    faqs: [
      {
        q: "What should I gather before a screening consult?",
        a: "A complete list of medications and supplements with doses, any prior ECGs or cardiology notes, recent lab results, and a summary of your medical and substance-use history.",
      },
      {
        q: "Do I need new tests before the first call?",
        a: "Bring what you already have. The program may order or repeat ECGs and labs under physician direction.",
      },
      {
        q: "Should I change my medications before screening?",
        a: "No. Do not stop or taper anything on your own. Any changes should be planned with your prescriber and the screening physician.",
      },
      {
        q: "Does passing screening guarantee a good outcome?",
        a: "No. Screening lowers avoidable risk; it does not promise results.",
      },
      {
        q: "How do I prepare for ibogaine?",
        a: "Start with a screening consult. Gather a complete medication and supplement list, prior ECGs and cardiology notes, recent labs including electrolytes and liver tests, an honest substance-use timeline and your psychiatric history. Plan aftercare and a support person before any travel.",
      },
      {
        q: "Should I stop my antidepressant or other medications before ibogaine?",
        a: "Not on your own. Some medications interact with ibogaine, but stopping them suddenly can be dangerous. Any taper or change should happen only under medical supervision, planned with your prescriber and the screening physician.",
      },
      {
        q: "What aftercare should I plan before ibogaine?",
        a: "Arrange follow-up with your own doctor, therapy or peer support, a support person at home and, if opioids are involved, naloxone, because tolerance can drop. Ibogaine is not a stand-alone treatment.",
      },
    ],
    related: [
      { href: "/safety-and-screening", label: "Safety and screening overview" },
      { href: "/blog/ibogaine-ecg-checklist", label: "Pre-infusion ECG checklist" },
      { href: "/blog/ibogaine-informed-consent-questions", label: "Questions to ask before you consent" },
      { href: "/blog/what-to-expect-iv-ibogaine-session", label: "What to expect from a session" },
      { href: "/faq", label: "Frequently asked questions" },
    ],
  },
  "how-to-choose-an-ibogaine-clinic": {
    faqs: [
      {
        q: "What is the first thing to confirm with a clinic?",
        a: "The route and the monitoring: whether ibogaine itself is given orally or intravenously, and whether continuous ECG telemetry runs throughout dosing and observation.",
      },
      {
        q: "Who should be supervising treatment?",
        a: "A physician should oversee screening and dosing, with on-site staff trained in emergency cardiac care and a written emergency transfer plan.",
      },
      {
        q: "What marketing claims are red flags?",
        a: "Guaranteed results, high success percentages, pressure to pay before medical review, and citing oral-dose studies as proof for an IV protocol.",
      },
      {
        q: "Should pricing be transparent?",
        a: "Yes. Ask for written inclusions, exclusions, and refund terms if you are not medically cleared.",
      },
    ],
    related: [
      { href: "/blog/ibogaine-informed-consent-questions", label: "Questions to ask before you consent" },
      { href: "/blog/how-to-read-ibogaine-clinic-website", label: "How to read a clinic website" },
      { href: "/blog/cheap-ibogaine-clinic-red-flags", label: "Cheap clinic red flags" },
      { href: "/blog/ibogaine-success-rate-claims", label: "Why success-rate claims mislead" },
      { href: "/safety-and-screening", label: "Safety and screening overview" },
    ],
  },
  "ibogaine-vs-ketamine-for-addiction": {
    faqs: [
      {
        q: "Are ibogaine and ketamine infusions interchangeable?",
        a: "No. They are different drugs with different risks, legal status, session lengths, and evidence bases. They share an infusion-clinic journey shape, not interchangeable results.",
      },
      {
        q: "Which has more research behind it?",
        a: "Ketamine has a larger and more mature clinical evidence base. Ibogaine research is mostly small, open-label, and based on oral dosing.",
      },
      {
        q: "How do the safety concerns differ?",
        a: "Ibogaine's leading concern is cardiac (QTc prolongation and arrhythmia risk), which is why longer continuous monitoring is expected. Ketamine sessions have their own monitoring needs but are typically much shorter.",
      },
      {
        q: "How should I decide which to explore?",
        a: "With a qualified clinician who knows your medical history, medications, and goals. Start with a cardiac and medical screening conversation.",
      },
    ],
    related: [
      { href: "/what-is-ibogaine-infusion", label: "What is IV ibogaine infusion?" },
      { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
      { href: "/blog/ibogaine-vs-suboxone", label: "Ibogaine vs Suboxone" },
      { href: "/blog/ibogaine-vs-psilocybin-therapy", label: "Ibogaine vs psilocybin therapy" },
      { href: "/blog/is-ibogaine-safe-screening-cardiac-risk", label: "Cardiac screening and safety" },
    ],
  },
  "ibogaine-vs-suboxone": {
    faqs: [
      {
        q: "How do Suboxone and ibogaine differ?",
        a: "Suboxone (buprenorphine/naloxone) is an established, ongoing medication for opioid use disorder with a strong evidence base. Ibogaine is investigational, given as a single supervised treatment, and carries significant cardiac risk.",
      },
      {
        q: "Can I stop Suboxone to prepare for ibogaine?",
        a: "Not on your own. Any change to buprenorphine should be planned with your prescriber and the screening physician; stopping abruptly can cause withdrawal and raise overdose risk.",
      },
      {
        q: "Is the ibogaine research comparable to Suboxone research?",
        a: "No. Ibogaine studies are mostly small, open-label, and oral-dose, while buprenorphine has been studied in large controlled trials.",
      },
      {
        q: "Who should be involved in this decision?",
        a: "Your current treatment team, a physician experienced with cardiac screening, and ideally a family member or support person.",
      },
    ],
    related: [
      { href: "/ibogaine-for-addiction", label: "Ibogaine for addiction" },
      { href: "/blog/ibogaine-vs-methadone", label: "Ibogaine vs methadone" },
      { href: "/blog/ibogaine-for-fentanyl", label: "Ibogaine and fentanyl" },
      { href: "/blog/ibogaine-aftercare-integration", label: "Aftercare and integration" },
      { href: "/blog/family-guide-ibogaine-treatment", label: "Family guide to ibogaine treatment" },
    ],
  },
  "what-to-expect-iv-ibogaine-session": {
    faqs: [
      {
        q: "What happens before the infusion?",
        a: "Medical screening, a baseline ECG and labs, a medication review, and informed consent. Treatment proceeds only if the physician clears you.",
      },
      {
        q: "What is the session itself like?",
        a: "You rest in a monitored setting with continuous ECG telemetry and staff present while ibogaine is infused. The acute effects can last many hours and are often physically and emotionally intense.",
      },
      {
        q: "What happens afterward?",
        a: "Observation continues after the infusion, followed by recovery time and an aftercare or integration plan before you go home.",
      },
      {
        q: "Will one session resolve everything?",
        a: "No outcome is guaranteed, and relapse can occur. Ongoing support after treatment matters.",
      },
    ],
    related: [
      { href: "/how-it-works", label: "How the journey works" },
      { href: "/blog/ibogaine-program-duration", label: "How long a program lasts" },
      { href: "/blog/ibogaine-side-effects", label: "Ibogaine side effects" },
      { href: "/blog/ibogaine-aftercare-integration", label: "Aftercare and integration" },
      { href: "/blog/flying-home-after-ibogaine", label: "Travelling home after treatment" },
    ],
  },
  "ibogaine-program-duration": {
    faqs: [
      {
        q: "How long does an IV ibogaine program usually last?",
        a: "Typically several days, covering screening, the infusion, observation, and recovery. Exact length depends on the program and on your medical needs.",
      },
      {
        q: "How long is the infusion itself?",
        a: "The infusion and peak monitoring window last hours within a multi-day stay. Ask for the program's written protocol.",
      },
      {
        q: "Why can it not be a short outpatient visit?",
        a: "Ibogaine's cardiac effects can appear hours after dosing, so extended observation with continuous monitoring is the safer model.",
      },
      {
        q: "How long should aftercare last?",
        a: "Plan for weeks to months of support, such as therapy, peer support, and medical follow-up, rather than treating discharge as the finish line.",
      },
    ],
    related: [
      { href: "/how-it-works", label: "How the journey works" },
      { href: "/blog/what-to-expect-iv-ibogaine-session", label: "What to expect from a session" },
      { href: "/blog/ibogaine-integration-therapy-explained", label: "Integration therapy explained" },
      { href: "/blog/flying-home-after-ibogaine", label: "Travelling home after treatment" },
      { href: "/blog/cost-of-ibogaine-treatment", label: "IV ibogaine infusion cost" },
    ],
  },
};

export function getEnhancement(slug: string): BlogEnhancement | undefined {
  return blogEnhancements[slug];
}
