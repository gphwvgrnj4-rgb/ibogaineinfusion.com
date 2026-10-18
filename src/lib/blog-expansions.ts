import type { FaqItem } from "@/lib/schema";

/** Oct 16 expansions: rendered after post body, before Quick answers; FAQs merged into FAQPage. */
export const blogExpansions: Record<string, { content: string; faqs: FaqItem[] }> = {
  "ibogaine-vs-methadone": {
    "content": "## New H2: Ibogaine treatment for methadone users: why it is the hardest case\nPeople on methadone are among the most common to ask about ibogaine, and among the most medically complex. There are three reasons:\n\n- **Long half-life.** Methadone stays in the body far longer than short-acting opioids, so withdrawal timing is slower and less predictable. Programs commonly discuss a physician-managed transition to a shorter-acting opioid before any ibogaine dosing. That transition takes time and can be uncomfortable.\n- **Overlapping QTc risk.** Methadone can prolong the QTc interval, especially at higher doses. Ibogaine also prolongs QTc. Residual methadone plus ibogaine is a cardiac concern, which is why ECG screening and continuous monitoring are non-negotiable.\n- **Overdose risk afterwards.** If tolerance falls after any detox attempt, returning to a previous dose can be fatal.\n\nNone of this means a methadone patient should never ask questions. It means the plan has to be built by physicians, with your methadone prescriber informed, and never improvised. Never stop or cut methadone on your own to prepare.\n\n## New H2: Rapid detox vs ibogaine: an honest comparison\n\"Rapid detox\" usually means **rapid opioid detoxification under anesthesia (ROD/UROD)**. A person is sedated or put under general anesthesia while an opioid blocker (such as naltrexone or naloxone) is given to push withdrawal through quickly. Ibogaine is sometimes marketed as a \"rapid detox\" too, but it is a different thing. It is a psychoactive substance with its own effects and its own cardiac risk.\n\n| Axis | Anesthesia-assisted rapid detox | Ibogaine (oral in most research; IV infusion on this site) |\n| --- | --- | --- |\n| What happens | Withdrawal precipitated by an opioid blocker while sedated | Psychoactive ibogaine session under medical monitoring |\n| Main risks discussed | Anesthesia complications, heart and breathing problems, withdrawal symptoms that continue after waking | QTc prolongation and arrhythmias, ataxia, nausea, intense prolonged experience |\n| Evidence picture | Studied in clinical trials; it has not been shown to beat standard detox for staying off opioids and adds anesthesia risk | Observational, mostly oral, uncontrolled reports; no controlled trials for IV ibogaine |\n| U.S. status | Performed in some medical settings | Schedule I; not approved for any indication |\n| Shared problem | Neither replaces ongoing care; relapse and overdose risk after lost tolerance apply | Neither replaces ongoing care; relapse and overdose risk after lost tolerance apply |\n\n**The honest bottom line:** neither approach is a shortcut out of opioid use disorder. Being \"detoxed\" is the start of recovery, not the end. Both carry serious medical risk, and both need an aftercare plan that includes naloxone and discussion of evidence-based options like methadone, buprenorphine or extended-release naltrexone. Related reading: ibogaine withdrawal vs detox (/blog/ibogaine-withdrawal-vs-detox) and Mash 2018 detox outcomes (/blog/mash-2018-ibogaine-detox-frontiers).\n\n## New H2: What to ask any program before considering ibogaine after methadone\n- How do you handle methadone specifically, and how long is the transition before dosing?\n- What QTc threshold disqualifies someone, and how often is ECG repeated?\n- Is there continuous cardiac monitoring, a physician on site and defibrillation capability?\n- What medicines and electrolytes (potassium, magnesium) do you check?\n- What is the plan if withdrawal returns, and how do you coordinate with my methadone clinic?\n- Where does treatment take place? Programs serving U.S. patients operate abroad, with intake locations including **Mexico** and **Gabon**. Will you share the exact location after screening?\n\nSee how to choose an ibogaine clinic (/blog/how-to-choose-an-ibogaine-clinic) and ibogaine contraindications (/blog/ibogaine-contraindications).\n\n## New H2: If you stay on methadone, that is a legitimate outcome\nSome people realize during screening that staying on methadone, adjusting the dose or moving to buprenorphine is the safer path for now. That is not failure. Methadone has a large evidence base for lowering overdose risk. Compare: ibogaine vs Suboxone (/blog/ibogaine-vs-suboxone) and ibogaine for fentanyl (/blog/ibogaine-for-fentanyl).\n\n**Next step:** Read safety and screening (/safety-and-screening) for the ECG, medication and methadone-transition questions first, then apply confidentially (/apply).",
    "faqs": [
      {
        "q": "Is ibogaine a rapid detox?",
        "a": "Not in the usual medical sense. Rapid detox normally means withdrawal precipitated under anesthesia. Ibogaine is a psychoactive substance with its own cardiac risk. Neither has been shown to be a shortcut that prevents relapse, and both need aftercare."
      },
      {
        "q": "Can I get ibogaine treatment if I'm on methadone?",
        "a": "Only a physician can decide. Methadone's long half-life and its own QTc effect make it one of the most complex cases. Programs usually discuss a supervised transition first. Never stop or reduce methadone on your own."
      },
      {
        "q": "Is rapid detox under anesthesia safer than ibogaine?",
        "a": "Both carry serious risks of different kinds. Anesthesia detox adds the risks of anesthesia, and ibogaine adds QTc and arrhythmia risk. Neither has strong evidence for long-term recovery on its own."
      },
      {
        "q": "What happens to overdose risk after ibogaine or rapid detox?",
        "a": "Tolerance can fall quickly. Using a previous dose of opioids afterwards can be fatal, so carry naloxone and have an aftercare plan before treatment."
      }
    ]
  },
  "cost-of-ibogaine-treatment": {
    "content": "## What drives the price of an ibogaine program\n\nPrices vary widely because \"ibogaine treatment\" can mean very different things. The main cost drivers are:\n- **Medical screening before arrival:** a 12-lead ECG with QTc reading, blood work (electrolytes, liver function), a review of medications and a psychiatric history. A program that skips these is cheaper for a reason.\n- **Monitoring during dosing:** continuous cardiac telemetry, staff trained in advanced cardiac life support, and a defibrillator and emergency medications on site. These are the costliest lines on a budget and the ones you should never trade away.\n- **Route of administration:** an IV infusion protocol needs IV supplies, pumps and nursing time. Most of the published research used oral dosing, so ask any provider to explain why it uses its route and what evidence it relies on.\n- **Length of stay:** stabilization before dosing, the session itself and recovery afterward usually take several days, plus lodging and meals.\n- **Aftercare:** integration sessions and coordination with your doctor at home.\n\n## Why a low price can cost more\n\nA program that is much cheaper than its peers often saves money on screening, telemetry or staff ratios. Those are the safety layers that matter most with a QTc-prolonging drug. See our guide to cheap clinic red flags (/blog/cheap-ibogaine-clinic-red-flags).\n\n## Questions to ask for a written quote\n\n1. What is included, and what is extra (labs, ECGs, extra nights, aftercare)?\n2. Who reads the ECG, and what QTc threshold leads to exclusion?\n3. What happens to the fee if screening finds you medically ineligible?\n4. Is there a written emergency transfer plan?\n\n## Insurance and financing\n\nBecause ibogaine is a Schedule I substance and is not approved for any condition, health insurance generally does not cover it. Some parts of a work-up, such as an ECG ordered by your own doctor, may be billable separately. See does insurance cover ibogaine (/blog/does-insurance-cover-ibogaine).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Why do ibogaine prices vary so much?",
        "a": "Programs differ in screening, cardiac monitoring, staffing, route of administration, length of stay and aftercare. Ask for an itemized quote."
      },
      {
        "q": "Does insurance pay for ibogaine treatment?",
        "a": "Generally no. Ibogaine is Schedule I and not approved for any condition. Some separate medical tests may be billable through your own doctor."
      },
      {
        "q": "Is the cheapest program a good deal?",
        "a": "Not necessarily. Low prices often mean less screening or monitoring, and those are the safety layers that matter most."
      }
    ]
  },
  "how-to-choose-an-ibogaine-clinic": {
    "content": "## A medical checklist\n\n- A physician reviews your ECG/QTc, labs and medications before you commit.\n- Continuous cardiac telemetry during and after dosing.\n- ACLS-trained staff, a defibrillator and a written hospital transfer plan.\n- Clear exclusion criteria, even if that means you are turned away.\n- A written informed-consent document that explains the risks, including death.\n\n## Honesty signals\n\nA trustworthy program says ibogaine is Schedule I and not approved, avoids cure or success-rate claims, and cites real studies accurately. See how to read a clinic website (/blog/how-to-read-ibogaine-clinic-website).\n\n## Red flags\n\nGuaranteed outcomes, no ECG requirement, pressure to book fast, or vague staffing. See luxury retreat red flags (/blog/ibogaine-luxury-retreat-red-flags).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "What is the most important thing to check?",
        "a": "Cardiac screening and continuous monitoring with emergency capability."
      },
      {
        "q": "Should a clinic ever turn someone away?",
        "a": "Yes. Exclusions show that screening is real."
      },
      {
        "q": "Are success rates on clinic sites reliable?",
        "a": "Usually not. They are rarely independently verified."
      }
    ]
  },
  "ibogaine-for-fentanyl": {
    "content": "## Why fentanyl complicates ibogaine protocols\n\nMost observational reports on ibogaine for opioid withdrawal come from the heroin and methadone era. Fentanyl is stored in fat tissue and can be released over a longer period, so withdrawal timing is less predictable. Programs usually need a longer stabilization period before dosing, and many convert people to a short-acting opioid first. Ask any program how it handles fentanyl specifically.\n\n## What the research reports\n\nObservational studies, such as the New Zealand cohort and published case series, describe reduced withdrawal symptoms and cravings after ibogaine in some people with opioid use disorder. These studies were uncontrolled, had small samples and saw relapse over follow-up. They do not establish that ibogaine treats opioid addiction. See our opioid literature summaries (/blog/brown-alper-2018-ibogaine-oud).\n\n## Overdose risk after treatment\n\nTolerance can drop after any detox. Using opioids at a previous dose after treatment can be fatal. Any responsible plan includes naloxone, an aftercare plan and a discussion of evidence-based options such as buprenorphine or methadone.\n\n## Proven options to discuss with your doctor\n\nApproved medications for opioid use disorder have strong evidence. Ibogaine is not a substitute you should switch to without medical guidance. See ibogaine vs Suboxone (/blog/ibogaine-vs-suboxone).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Can ibogaine help with fentanyl withdrawal?",
        "a": "Some observational reports describe reduced opioid withdrawal, but there are no controlled fentanyl-specific trials. Fentanyl usually needs a longer stabilization."
      },
      {
        "q": "Does ibogaine end opioid addiction?",
        "a": "No. It is not approved for any condition, and the studies show relapse over follow-up. Aftercare matters."
      },
      {
        "q": "What is the overdose risk after detox?",
        "a": "Tolerance can fall, so relapse at an old dose can be fatal. Keep naloxone on hand and have an aftercare plan."
      }
    ]
  },
  "ibogaine-side-effects": {
    "content": "## Common acute effects\n\nNausea and vomiting, ataxia, tremor, light sensitivity, dream-like visual or memory experiences, and fatigue.\n\n## Serious risks\n\n- **QTc prolongation and arrhythmias**, including torsades de pointes. These are the reason for ECG screening and telemetry.\n- Seizures, particularly during benzodiazepine or alcohol withdrawal.\n- Psychiatric effects such as mania or psychosis in vulnerable people.\n- Drug interactions, especially with CYP2D6 inhibitors and QT-prolonging drugs. See drug interactions (/blog/ibogaine-drug-interactions-qtc).\n\n## How long side effects last\n\nAcute effects generally last up to a day. Fatigue and sleep changes may last days. Cardiac effects can persist while noribogaine remains in the body.\n\n## Reducing risk\n\nThorough screening, correcting electrolytes, continuous monitoring and disclosing every medication.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "What is the most dangerous side effect?",
        "a": "Heart rhythm problems from QTc prolongation."
      },
      {
        "q": "Does ibogaine have long-term side effects?",
        "a": "Data are limited. Animal studies raised cerebellar concerns at high doses, and human long-term data are sparse."
      },
      {
        "q": "Can side effects be prevented?",
        "a": "They can be reduced with screening and monitoring, but not eliminated."
      }
    ]
  },
  "ibogaine-treatment-resistant-depression": {
    "content": "## What the research has looked at\n\nThe best-known recent study is Stanford's MISTIC observational study of veterans with traumatic brain injury, which used **oral** ibogaine with magnesium. It reported improvements in disability, PTSD, depression and anxiety scores. It had no control group and a small sample, so it cannot show cause and effect. See Stanford MISTIC (/blog/stanford-ibogaine-mistic).\n\n## What it does not show\n\n- No randomized controlled trials of ibogaine for depression have been published.\n- No IV-specific depression data exist.\n- Ibogaine is not approved for depression and is Schedule I in the US.\n\n## Antidepressants and interactions\n\nMany antidepressants affect serotonin or the QTc interval, and some are metabolized by CYP2D6, the same enzyme that processes ibogaine. Stopping or tapering any psychiatric medication must be done with your prescriber. Never stop on your own. See ibogaine and SSRIs (/blog/ibogaine-ssri-psychiatric-meds).\n\n## Proven treatments to discuss first\n\nFor treatment-resistant depression, options with stronger evidence include medication changes, psychotherapy, esketamine, TMS and ECT. Talk to your psychiatrist about these first.\n\n**If you are in crisis, call or text 988 in the US.**\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Does ibogaine work for depression?",
        "a": "Early observational data such as MISTIC are promising, but there are no controlled trials, and it is not approved for depression."
      },
      {
        "q": "Do I have to stop antidepressants?",
        "a": "Any change must be supervised by your prescriber because of interaction and withdrawal risks."
      },
      {
        "q": "Was MISTIC an IV study?",
        "a": "No. MISTIC used oral ibogaine with magnesium."
      }
    ]
  },
  "ibogaine-vs-ketamine-for-addiction": {
    "content": "## Side-by-side overview\n\n| | Ibogaine | Ketamine |\n|---|---|---|\n| US legal status | Schedule I, not approved | Schedule III; esketamine approved for depression |\n| Main cardiac concern | QTc prolongation | Blood pressure and heart rate rises |\n| Session length | Many hours, plus recovery days | About 40 minutes to 2 hours |\n| Evidence for addiction | Observational studies | Small trials, mixed results |\n\n## Why the safety profiles differ\n\nIbogaine's main risk is to heart rhythm, so it needs ECG screening and telemetry. Ketamine is widely used in anesthesia and is usually given in outpatient clinics with blood pressure monitoring.\n\n## Choosing between them\n\nKetamine is legally accessible in US clinics. Ibogaine is not. Anyone weighing either should first discuss proven medications for their substance use with a doctor.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Is ketamine safer than ibogaine?",
        "a": "They carry different risks. Ibogaine's QTc risk needs more intensive cardiac screening and monitoring."
      },
      {
        "q": "Can I do ketamine before ibogaine?",
        "a": "Medication history must be reviewed during screening. Do not combine anything without medical guidance."
      },
      {
        "q": "Which has more evidence for addiction?",
        "a": "Both have limited evidence. Neither replaces proven medications such as buprenorphine."
      }
    ]
  },
  "ibogaine-vs-suboxone": {
    "content": "## Different roles\n\nSuboxone (buprenorphine/naloxone) is an approved maintenance medication for opioid use disorder with strong evidence that it reduces overdose deaths. Ibogaine is Schedule I, not approved, and has only observational evidence.\n\n## Can you go from Suboxone to ibogaine?\n\nBuprenorphine binds tightly to opioid receptors and has a long half-life. Programs that consider people on buprenorphine usually require a supervised taper or transition first, and some exclude them. Never stop Suboxone abruptly on your own: withdrawal and relapse raise the risk of overdose.\n\n## Questions to ask\n\n- How does the program handle buprenorphine specifically?\n- What is the plan if withdrawal is incomplete?\n- How will it coordinate with your prescriber afterward?\n\n## A reasonable approach\n\nFor many people, staying on buprenorphine is the safest choice. Discuss your goals with the doctor who prescribes it.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Is ibogaine better than Suboxone?",
        "a": "No evidence shows this. Suboxone is approved and reduces overdose deaths; ibogaine has only observational data."
      },
      {
        "q": "How long off Suboxone before ibogaine?",
        "a": "It varies by program and must be medically supervised. Some programs exclude buprenorphine patients."
      },
      {
        "q": "Can I restart Suboxone after ibogaine?",
        "a": "Discuss it with your prescriber. Restarting can be a valid relapse-prevention plan."
      }
    ]
  },
  "is-ibogaine-safe-screening-cardiac-risk": {
    "content": "## Why the heart is the central safety question\n\nIbogaine and its metabolite noribogaine block cardiac potassium (hERG) channels, which can lengthen the QTc interval. A long QTc raises the risk of torsades de pointes, a dangerous arrhythmia. Published case reports and reviews describe serious cardiac events and deaths, often where screening or monitoring was missing. Read more in ibogaine mortality and cardiac risk (/blog/ibogaine-mortality-cardiac-risk).\n\n## Who is usually excluded\n\nScreening typically excludes people with:\n- A prolonged baseline QTc, or a personal or family history of long-QT syndrome or sudden cardiac death\n- Structural heart disease, heart failure or significant arrhythmias\n- Low potassium or magnesium that cannot be corrected\n- QT-prolonging medications that cannot be safely stopped\n- Significant liver impairment or some psychiatric conditions\n\nSee ibogaine contraindications (/blog/ibogaine-contraindications).\n\n## Why noribogaine matters after the session\n\nNoribogaine stays in the body much longer than ibogaine, so QTc effects can persist after the acute experience ends. This is why monitoring should continue after dosing and why flying home too soon is discouraged. See flying home after ibogaine (/blog/flying-home-after-ibogaine).\n\n## What IV infusion may and may not change\n\nAn IV protocol lets staff titrate the dose and stop the infusion. Most clinical literature on ibogaine, however, used oral dosing, and there are no published controlled trials showing that IV ibogaine is safer. An IV route does not remove the need for screening and telemetry.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Can ibogaine cause heart problems?",
        "a": "Yes. It can prolong the QTc interval, which raises arrhythmia risk. This is why ECG screening and continuous monitoring are essential."
      },
      {
        "q": "How long does the cardiac risk last?",
        "a": "Noribogaine persists for days, so QTc effects can outlast the session. Monitoring should continue after dosing."
      },
      {
        "q": "Does IV infusion make ibogaine safe?",
        "a": "No route makes it risk-free. IV allows titration, but no controlled trials show IV ibogaine is safer than oral."
      }
    ]
  },
  "what-is-iv-ibogaine-infusion": {
    "content": "## How an IV ibogaine infusion is structured\n\nIn an IV protocol, ibogaine is given through a vein in measured amounts over time instead of as one oral capsule dose. In principle, this lets the medical team adjust the rate in response to ECG, blood pressure and how the person is responding, and stop the infusion if needed.\n\n## What the evidence does and does not show\n\nBe clear about the evidence base. Most published ibogaine research, including observational studies of opioid withdrawal and the Stanford MISTIC study in veterans, used **oral** ibogaine. Claims about IV ibogaine draw on pharmacology and clinical reasoning, not on head-to-head trials. We are not aware of published controlled trials comparing IV and oral ibogaine. See oral vs IV ibogaine (/blog/ibogaine-oral-vs-iv).\n\n## Who an IV program is for\n\nIV infusion is a delivery method, not an eligibility shortcut. Candidates still need full medical screening: an ECG with QTc, electrolytes, liver tests and a medication review. Many people will be excluded, and that is the screening doing its job.\n\n## How IV ibogaine differs from wellness IV drips\n\nVitamin or electrolyte drips are a different thing. Electrolyte support may be used *alongside* a protocol to correct potassium and magnesium, but it is not the psychoactive treatment. See electrolyte IV vs psychoactive IV (/blog/electrolytes-support-iv-vs-psychoactive-iv).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Is IV ibogaine better than oral?",
        "a": "There is no published head-to-head evidence. IV allows dose titration, but most research used oral ibogaine."
      },
      {
        "q": "Is IV ibogaine legal in the US?",
        "a": "Ibogaine is Schedule I in the US and is not approved for any condition, whatever the route."
      },
      {
        "q": "Do I still need cardiac screening for IV ibogaine?",
        "a": "Yes. ECG/QTc, electrolytes and a medication review are essential for any route."
      }
    ]
  },
  "what-to-expect-iv-ibogaine-session": {
    "content": "## Before the session\n\nExpect a repeat ECG, electrolyte checks and IV access placement. Telemetry leads are attached, and staff confirm your medications and fasting.\n\n## During the infusion\n\nPeople commonly describe dream-like visual or memory experiences, nausea, ataxia (unsteadiness) and sensitivity to light and sound. The acute phase can last many hours. Staff monitor heart rhythm and vital signs continuously, and can slow or stop the infusion.\n\n## The day after\n\nFatigue, low mood or insomnia can follow. Because noribogaine persists, monitoring continues. You should not walk unassisted at first because of ataxia.\n\n## Recovery days\n\nPlan rest, hydration and integration. Avoid driving and early travel. See aftercare and integration (/blog/ibogaine-aftercare-integration).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
      {
        "q": "Is the experience frightening?",
        "a": "It can be intense. Preparation and support help, but difficult experiences are possible."
      },
      {
        "q": "Can I move during the session?",
        "a": "Movement is limited because of ataxia and monitoring. Staff help with bathroom trips."
      },
      {
        "q": "When can I go home?",
        "a": "After monitoring shows a stable QTc and you are steady on your feet, often several days."
      }
    ]
  }
};
