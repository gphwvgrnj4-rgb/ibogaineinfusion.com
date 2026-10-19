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
    "content": "## Common acute effects\n\nNausea and vomiting, ataxia, tremor, light sensitivity, dream-like visual or memory experiences, and fatigue.\n\n## Serious risks\n\n- **QTc prolongation and arrhythmias**, including torsades de pointes. These are the reason for ECG screening and telemetry.\n- Seizures, particularly during benzodiazepine or alcohol withdrawal.\n- Psychiatric effects such as mania or psychosis in vulnerable people.\n- Drug interactions, especially with CYP2D6 inhibitors and QT-prolonging drugs. See drug interactions (/blog/ibogaine-drug-interactions-qtc).\n\n## How long side effects last\n\nAcute effects generally last up to a day. Fatigue and sleep changes may last days. Cardiac effects can persist while noribogaine remains in the body.\n\n## Reducing risk\n\nThorough screening, correcting electrolytes, continuous monitoring and disclosing every medication.\n\n## How long do ibogaine side effects last?\n\nIt depends on the effect:\n\n- **Acute effects** such as nausea, ataxia and the intense psychoactive state generally last up to a day.\n- **Fatigue and sleep changes** can last several days.\n- **Cardiac effects** can persist while noribogaine, the longer-lasting active metabolite, remains in the body. That is why monitoring continues after the acute experience ends.\n\n## Is vomiting during ibogaine normal?\n\nNausea and vomiting are among the most commonly discussed effects. The main concerns are dehydration and, in a sedated or unsteady person, choking on vomit. Good programs plan for positioning, observation and antiemetics as ordered by a physician.\n\n## Why can't you walk normally after ibogaine?\n\nAtaxia is a loss of coordination. In the [Knuijver 2021 QTc study](/blog/knuijver-2021-ibogaine-qtc-safety), all 14 patients had severe, transient ataxia. It raises fall risk, so staff should help with walking and keep the environment safe until coordination returns.\n\n## Can ibogaine cause seizures?\n\nSeizures are a recognized serious risk, particularly during benzodiazepine or alcohol withdrawal. Never stop a benzodiazepine on your own before treatment. See [ibogaine and benzodiazepines](/blog/ibogaine-and-benzodiazepines).\n\n## Can ibogaine cause psychiatric side effects?\n\nYes. The experience can bring fear, anxiety or emotional flooding, and mania or psychosis can occur in vulnerable people. A personal or family history of bipolar disorder or psychosis needs careful psychiatric screening.\n\n## Which side effect is most dangerous?\n\nThe cardiac one. QTc prolongation can lead to torsades de pointes, which can be fatal, and it has been reported at therapeutic doses in people without known heart disease. The full picture is in [our ibogaine heart-risk review](/blog/ibogaine-cardiovascular-complications-review). That is the reason for ECG screening, electrolyte checks and continuous telemetry.\n\n## Does IV delivery reduce side effects?\n\nThere is no evidence on this site that IV delivery removes side effects. Most side-effect data come from oral dosing. IV delivery can give clinicians tighter control over the infusion, but nausea, ataxia, the psychoactive intensity and the QTc risk all still need to be planned for.\n\n## How can side-effect risk be reduced?\n\n- Honest disclosure of every medication and substance.\n- Baseline ECG and electrolyte correction before dosing.\n- Continuous cardiac monitoring with ACLS-trained staff.\n- A quiet setting, with sitters and assisted walking.\n- Enough days on site to recover; see [how long ibogaine treatment takes](/blog/ibogaine-program-duration).\n\nProgram location does not change the biology. Programs serving U.S. patients operate abroad, with intake locations including Mexico and Gabon, and should all meet the same standard.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
    "faqs": [
{"q": "How long do ibogaine side effects last?", "a": "Acute effects like nausea, ataxia and the psychoactive state generally last up to a day. Fatigue and sleep changes can last several days, and cardiac effects can persist while noribogaine remains in the body."},
{"q": "Is it normal to vomit on ibogaine?", "a": "Nausea and vomiting are commonly reported. Programs should manage positioning, hydration and antiemetics as ordered, and watch closely because unsteadiness raises the risk of choking."},
{"q": "Can ibogaine cause seizures?", "a": "Seizures are a recognized serious risk, particularly during benzodiazepine or alcohol withdrawal. Never stop those medicines on your own before treatment."},
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
  },
  "ibogaine-cardiovascular-complications-review": {
  "content": "## How dangerous is ibogaine for the heart?\n\nThe honest answer is that serious cardiac events are uncommon but can be fatal, and they are not limited to people with known heart problems. Brunt's review uses the phrase \"rare but relevant\" for exactly this reason. \"Rare\" describes how often events are reported. It does not make them less serious. Torsades de pointes is a ventricular arrhythmia that can stop the heart from pumping effectively.\n\n## Why does ibogaine prolong the QT interval?\n\nThe main mechanism the review describes is **hERG potassium-channel blockade** by ibogaine and its active metabolite noribogaine. Blocking that channel slows how the heart muscle electrically resets between beats (repolarization). On an ECG, that shows up as a longer QT interval, usually reported as a rate-corrected QTc. A longer QTc opens the door to ventricular tachyarrhythmias and torsades. For measured numbers from a monitored study, see the [Knuijver 2021 QTc study](/blog/knuijver-2021-ibogaine-qtc-safety).\n\n## Who is at higher risk?\n\n- People with a long baseline QTc, structural heart disease or a history of arrhythmia.\n- People taking other QT-prolonging medicines or drugs that interact with ibogaine's metabolism (see [ibogaine drug interactions](/blog/ibogaine-drug-interactions-qtc)).\n- People with low potassium or magnesium.\n- People whose **CYP2D6** metabolism differs from average. The review highlights large person-to-person CYP2D6 variability as a possible risk amplifier.\n\nHaving no known heart condition does not mean having no risk. That is one of the review's central teaching points.\n\n## How long does the cardiac risk last?\n\nThe risk does not end when the acute experience fades. Noribogaine stays in the body longer than ibogaine, and the review's practical message is that monitoring has to cover a delayed window, which is why overnight observation matters. Ask any program how long telemetry continues after dosing and who reads it.\n\n## What does good cardiac screening and monitoring look like?\n\n- A baseline 12-lead ECG with a QTc reading and a stated exclusion threshold.\n- Electrolyte checks and correction before dosing.\n- A full medication review, including CYP2D6 interactions, and a genotype discussion where available.\n- Continuous telemetry during and after dosing, with serial ECGs.\n- ACLS-trained staff, a defibrillator and a written emergency transfer plan.\n\nThe checklist is in [the ibogaine ECG checklist](/blog/ibogaine-ecg-checklist), and monitoring standards are in [telemetry and ACLS monitoring](/blog/ibogaine-telemetry-acls-monitoring). Programs serving U.S. patients operate abroad, with intake locations including Mexico and Gabon. The same cardiac standards should apply wherever treatment happens.\n\n## Does IV delivery remove the heart risk?\n\nNo. Most human QTc data come from oral dosing. Giving ibogaine intravenously changes the kinetics but does not switch off hERG biology. On this site, IV ibogaine infusion means physician-supervised psychoactive IV dosing with continuous cardiac monitoring.\n\n**Next step:** Read safety and screening (/safety-and-screening) first, then apply confidentially (/apply).",
  "faqs": [
    {
      "q": "Can ibogaine cause a heart attack or cardiac arrest?",
      "a": "Ibogaine's main documented cardiac danger is QTc prolongation leading to ventricular arrhythmias such as torsades de pointes, which can be fatal. Events have been reported at therapeutic doses and in people without known heart disease, so ECG screening and continuous monitoring are essential."
    },
    {
      "q": "What QTc is too high for ibogaine?",
      "a": "Conventional thresholds for a prolonged QTc are often discussed around 450 ms for men and 460 ms for women. Each program should state its own exclusion threshold in writing, and a physician should read your ECG before any dosing."
    },
    {
      "q": "Does CYP2D6 genotype affect ibogaine heart risk?",
      "a": "It may. The Brunt 2026 review notes that large differences in CYP2D6 metabolism may raise cardiovascular risk in some people. Genotyping is not a complete shield, so ECG and telemetry are still needed."
    }
  ]
},
  "ibogaine-program-duration": {
  "content": "## How many days do you need for ibogaine treatment?\n\nPlan for a **multi-day stay**, not a single appointment. Most physician-supervised programs build in time before dosing for ECG, labs and medication review; an infusion day; and observation afterward. Add travel days on each side. Programs serving U.S. patients operate abroad, with intake locations including **Mexico** and **Gabon**, so travel logistics often add more time than the treatment itself.\n\n## How long does the ibogaine experience itself last?\n\nThe acute psychoactive experience lasts **hours**, and the intense phase is followed by a period of exhaustion and recovery. Acute effects generally last up to a day, while fatigue and sleep changes can last several days. See [ibogaine side effects and how long they last](/blog/ibogaine-side-effects).\n\n## Why do you have to stay overnight after an infusion?\n\nIbogaine can prolong the QTc interval, and noribogaine, its active metabolite, stays in the body longer than ibogaine. Cardiac risk can extend past the end of the acute experience. Overnight telemetry and clinical checks cover that window. Ataxia (unsteadiness) also raises fall risk, so supervised rest matters. The cardiac reasoning is explained in [our ibogaine heart-risk review](/blog/ibogaine-cardiovascular-complications-review).\n\n## Can screening delay or extend my stay?\n\nYes, and that is a good sign. A stay may be extended or dosing postponed if:\n\n- Your QTc is borderline or trending up.\n- Potassium or magnesium needs correcting first.\n- A medication needs a supervised change, as with methadone or benzodiazepines (see [ibogaine and benzodiazepines](/blog/ibogaine-and-benzodiazepines)).\n- Nausea, ataxia or distress persists after the session.\n\nA program that never delays anyone probably isn't screening seriously.\n\n## When can I fly home after ibogaine?\n\nOnly after the medical team discharges you. Fatigue and unsteadiness can linger, and you should not travel alone straight after a session. See flying home after ibogaine (/blog/flying-home-after-ibogaine).\n\n## How long is aftercare?\n\nThe stay is the start, not the finish. Addiction, depression and PTSD are long-term conditions. A good program gives you a written aftercare plan, follow-up contacts and, for anyone with an opioid history, naloxone and overdose education, because tolerance can drop after treatment.\n\n## Does a longer program mean better results?\n\nNo. Length of stay reflects medical complexity and safety margins. It is not a success rate. Be wary of any clinic that sells extra days as a way to improve outcomes, and equally wary of one that promises a \"weekend detox\". Compare packages in [the cost of ibogaine treatment](/blog/cost-of-ibogaine-treatment).\n\nIbogaine is Schedule I in the United States and is not approved for any indication.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
  "faqs": [
    {
      "q": "How many days is a typical ibogaine program?",
      "a": "Physician-supervised programs usually run several days on site: screening, one monitored infusion day and at least one further night of observation. Exact length depends on medical risk and clinic protocol, plus travel time."
    },
    {
      "q": "Why can't ibogaine be done as a same-day outpatient visit?",
      "a": "Ibogaine can prolong the QTc interval and the risk window can outlast the acute experience, so continuous cardiac monitoring and overnight observation are needed. Ataxia also makes unsupervised travel unsafe."
    },
    {
      "q": "How soon after ibogaine can I travel home?",
      "a": "Only after the medical team discharges you. Fatigue and unsteadiness can last days, so travel with a companion and confirm your discharge and aftercare plan first."
    }
  ]
},
  "ibogaine-and-benzodiazepines": {
  "content": "## Can you take ibogaine while on benzodiazepines?\n\nThere is no safe do-it-yourself answer. Whether someone on a benzodiazepine can be considered for ibogaine, and what has to change first, is a decision for licensed clinicians who know your full history. Two separate risks stack together: **benzodiazepine withdrawal**, which can cause seizures, and **ibogaine's cardiac risk**, which needs ECG screening and continuous telemetry. Combining sedatives with an intense psychoactive session also complicates monitoring and airway safety.\n\n## Why is stopping benzos suddenly dangerous?\n\nThe body adapts to regular benzodiazepine use, whether it is prescribed or not. Stopping abruptly can cause rebound anxiety, insomnia, perceptual changes and **seizures**. How severe withdrawal gets depends on the drug, dose, how long you've taken it, other substances, and individual vulnerability. That is why we will never publish a stop date or a milligram conversion.\n\n## Can ibogaine help with benzodiazepine withdrawal?\n\nThere is no evidence base on this site that supports using ibogaine to treat benzodiazepine withdrawal. Most published ibogaine research involves opioid use and oral dosing. Seizure risk during benzodiazepine or alcohol withdrawal is listed among ibogaine's serious risks in [our ibogaine side effects guide](/blog/ibogaine-side-effects).\n\n## What will a screening team ask about benzodiazepines?\n\n- Which benzodiazepine, the dose, how often and for how long, and when you last took it.\n- Whether it is prescribed, non-prescribed or both.\n- Any past withdrawal seizures or complicated detox.\n- Alcohol and other sedatives, opioids or stimulants.\n- The reason you take it, such as panic or insomnia, and who prescribes it.\n\nAnswer honestly. Hiding benzodiazepine use from a screening team puts your life at risk.\n\n## What if I'm on benzos and opioids together?\n\nPolysubstance use is common and makes planning more complex, not impossible to discuss. Opioid and benzodiazepine dependence each need their own medical plan, and the timing has to be set by physicians. See ibogaine for fentanyl (/blog/ibogaine-for-fentanyl) and how program length can change for complex histories in [how long ibogaine treatment takes](/blog/ibogaine-program-duration).\n\n## How does this connect to ibogaine's heart risk?\n\nIbogaine can prolong the QTc interval. Some medicines taken alongside benzodiazepines, such as certain antidepressants or antipsychotics, may add QT or metabolic interaction risk. Bring a complete medication list to screening. See [ibogaine drug interactions](/blog/ibogaine-drug-interactions-qtc) and [ibogaine contraindications](/blog/ibogaine-contraindications).\n\nIbogaine is Schedule I in the United States and is not approved for any indication. Programs serving U.S. patients operate abroad, with intake locations including Mexico and Gabon; the same screening applies there.\n\n**Next step:** Talk to your prescriber before changing anything, then read safety and screening (/safety-and-screening) and apply (/apply).",
  "faqs": [
    {
      "q": "How long before ibogaine should I stop Xanax or Klonopin?",
      "a": "Do not set a stop date yourself. Abrupt benzodiazepine withdrawal can cause seizures. Any taper and its timing must be planned and supervised by a physician who knows your full history."
    },
    {
      "q": "Can ibogaine treat benzodiazepine withdrawal?",
      "a": "There is no solid evidence that it does. Most ibogaine research involves opioid use and oral dosing, and seizures during benzodiazepine or alcohol withdrawal are a recognized serious risk."
    },
    {
      "q": "Will a program accept me if I take benzodiazepines?",
      "a": "Only a physician can decide after full screening. Expect detailed questions about the drug, dose, duration, past withdrawal seizures and other medicines, plus ECG and QTc checks."
    }
  ]
},
  "davis-barsuglia-2017-ibogaine-survey": {
  "content": "## Does ibogaine work for opioid withdrawal, according to this survey?\n\nMost respondents said yes for the short term. Withdrawal relief was the most consistent report, at about four in five people. Craving reduction was reported by about half, and only 25% said it lasted three months or more. That pattern, strong short-term relief with less durable craving change, is the most honest way to summarize the paper.\n\n## How many people stayed off opioids after ibogaine?\n\n- **30%** reported never using opioids again after treatment.\n- **41%** reported at least six months of abstinence at the time of the survey.\n- **70%** reported some relapse after treatment, and many said their use was lower than before.\n\nThese numbers come from people who chose to answer an online survey, sometimes years later. People who did well may have been more likely to respond. That is called response or survivor bias, and it means the figures cannot be read as a success rate. Read [why ibogaine success-rate claims mislead](/blog/ibogaine-success-rate-claims) before comparing clinics on percentages.\n\n## Is this an 80% success rate?\n\nNo. The 80% figure refers to people's own reports of withdrawal relief, not recovery. Writing \"80% success\" or \"41% cured\" misstates the paper.\n\n## What were the main limitations?\n\n- Retrospective self-report, open to memory and social-desirability bias.\n- No control group, so the drug cannot be separated from the setting, motivation or aftercare.\n- Follow-up time differed between people.\n- One clinic network, so results may not generalize.\n- No cardiac data, so it says nothing about QTc safety.\n\nThe authors themselves describe the results as suggesting an association and call for controlled longitudinal studies.\n\n## How does it compare with other ibogaine opioid studies?\n\nIt sits alongside other observational work: timed withdrawal scores in the [2016–2020 OUD case series](/blog/ibogaine-oud-case-series-2016-2020), 12-month outcomes in [Brown and Alper 2018](/blog/brown-alper-2018-ibogaine-oud) and the New Zealand cohort in [Noller 2018](/blog/noller-2018-ibogaine-new-zealand). None is a randomized controlled trial.\n\n## Was the treatment oral or IV?\n\nOral. Treatment took place at an inpatient clinic abroad between 2012 and 2015. These figures are not evidence for physician-supervised IV ibogaine infusion. Today, programs serving U.S. patients operate abroad with intake locations including Mexico and Gabon, and every one should screen for cardiac risk.\n\n## What about heart risk?\n\nThe survey did not measure it. Ibogaine can prolong the QTc interval, as the [Knuijver 2021 QTc study](/blog/knuijver-2021-ibogaine-qtc-safety) showed. Benefit stories need to be read alongside the cardiac risk.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
  "faqs": [
    {
      "q": "What did the Davis and Barsuglia 2017 ibogaine survey find?",
      "a": "Among 88 respondents treated with oral ibogaine for opioid use, about 80% reported that withdrawal was eliminated or drastically reduced, 30% reported never using opioids again, 41% reported at least six months of abstinence at survey time and 70% reported some relapse."
    },
    {
      "q": "Does this survey prove ibogaine cures opioid addiction?",
      "a": "No. It is a retrospective self-report survey without a control group. The authors say results suggest an association and call for controlled studies."
    },
    {
      "q": "Did people in the survey relapse after ibogaine?",
      "a": "Yes. About 70% reported some relapse after treatment, although many said their use was lower than before treatment."
    }
  ]
},
  "knuijver-2021-ibogaine-qtc-safety": {
  "content": "## How much does ibogaine prolong QTc?\n\nIn this study, mean maximum QTc prolongation (Fridericia correction) was about **+95 ms**, ranging from about 29 to 146 ms between patients. **Half** of the 14 participants reached a QTc above **500 ms**. That threshold is widely treated as a level of serious concern for arrhythmia risk. These patients were screened, in a university hospital, and monitored continuously.\n\n## Why does a QTc over 500 ms matter?\n\nA long QTc means the heart takes longer to electrically reset between beats. That creates the conditions for ventricular arrhythmias such as torsades de pointes, which can be fatal. The mechanism, hERG potassium-channel blockade, is explained in [our ibogaine heart-risk review](/blog/ibogaine-cardiovascular-complications-review).\n\n## Did anyone have a dangerous arrhythmia?\n\nNo torsades de pointes occurred in this sample. But 14 people is far too few to rule out a rare, serious event. Absence of torsades in n=14 is not evidence of cardiac safety, and the authors' findings argue for close monitoring.\n\n## How long did QTc stay prolonged?\n\nCardiac effects can persist while noribogaine, ibogaine's longer-lasting active metabolite, remains in the body. That is why monitoring should not stop when the acute experience ends. Ask any program how long telemetry continues after dosing.\n\n## What other side effects did patients have?\n\nAll 14 had **severe, transient ataxia**, meaning loss of coordination. That matters for fall risk and staffing. For the wider list, see [ibogaine side effects](/blog/ibogaine-side-effects).\n\n## Who was in the study?\n\nOpioid-dependent adults treated in a Dutch university medical center, after being switched to morphine sulfate. It was open-label and observational, with no control group. It measured safety and pharmacology, not long-term recovery.\n\n## Does this apply to IV ibogaine?\n\nNot directly. The dose was oral. Intravenous delivery changes the kinetics but does not remove ibogaine's effect on heart rhythm. On this site, IV ibogaine infusion means physician-supervised psychoactive IV dosing with continuous cardiac monitoring.\n\n## What should screening look like after reading this?\n\n- A baseline ECG with a written QTc exclusion threshold.\n- Potassium and magnesium checked and corrected.\n- A full medication review for QT-prolonging and CYP2D6-interacting drugs (see [ibogaine drug interactions](/blog/ibogaine-drug-interactions-qtc)).\n- Continuous telemetry, serial ECGs, ACLS-trained staff and a defibrillator.\n\nProgram length depends on that screening; see [how long ibogaine treatment takes](/blog/ibogaine-program-duration). Programs serving U.S. patients operate abroad, with intake locations including Mexico and Gabon, and should meet the same standard.\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
  "faqs": [
    {
      "q": "How much does ibogaine increase QTc?",
      "a": "In Knuijver 2021, a single oral 10 mg/kg dose raised mean maximum QTc by about 95 ms (range about 29 to 146 ms) in 14 opioid-dependent patients, and half exceeded 500 ms."
    },
    {
      "q": "Did anyone die or develop torsades in the Knuijver study?",
      "a": "No torsades de pointes occurred among the 14 participants. That small sample cannot rule out rare serious arrhythmias, so continuous monitoring remains essential."
    },
    {
      "q": "Was the Knuijver 2021 study about IV ibogaine?",
      "a": "No. It used oral ibogaine HCl. Its QTc findings motivate cardiac monitoring but are not evidence about IV ibogaine efficacy."
    }
  ]
},
  "not-losing-momentum-ibogaine-trials-2025": {
  "content": "## Are there any ibogaine clinical trials?\n\nYes, but only a few. The review searched ClinicalTrials.gov, the EU clinical trials registers and the WHO ICTRP, removed duplicates, and analyzed **nine** ibogaine trials. That is a small field. It is not dozens of large programs.\n\n## What are ibogaine trials testing?\n\nMost of them are **early-phase**. They focus on:\n\n- **Pharmacokinetics:** how ibogaine is absorbed, metabolized and cleared.\n- **Withdrawal:** whether opioid withdrawal symptoms change.\n- **Safety monitoring:** especially of heart rhythm.\n\nDesigns differ, too. Some use a fixed dose and others an ascending dose, with different eligibility rules and outcome measures. That variability makes it hard to combine results into one answer about whether it works.\n\n## Is there a phase 3 ibogaine trial?\n\nThe review found no large late-phase trials, and the authors say that absence prevents definitive conclusions about efficacy. Treat any claim that ibogaine is \"proven in trials\" with caution.\n\n## How do I join an ibogaine clinical trial?\n\nCheck the live record on the registry. Status can lag, and a trial listed as recruiting may have closed. Each trial has strict criteria, often including ECG and QTc limits, and many people do not qualify. Enrollment goes through the research team, not through a treatment clinic. State-level research efforts are covered in [Texas ibogaine clinical trials](/blog/texas-ibogaine-clinical-trials) and [state research bills in 2026](/blog/ibogaine-state-research-bills-2026).\n\n## How do trials handle ibogaine's heart risk?\n\nInconsistently, according to the review. Protocols differed in how they monitored cardiovascular risk. Families should notice that gap. Ibogaine can prolong the QTc interval; see the [Knuijver 2021 QTc study](/blog/knuijver-2021-ibogaine-qtc-safety) and [our ibogaine heart-risk review](/blog/ibogaine-cardiovascular-complications-review). Any setting, research or clinical, should include ECG screening and continuous telemetry.\n\n## Do trials mean ibogaine will be approved soon?\n\nNo one can say. Ongoing research is not approval. Ibogaine remains Schedule I in the United States and is not approved for any indication. The authors call for a standardized clinical framework and better blinding and expectancy controls, drawing lessons from psilocybin and MDMA research. For how the evidence has developed, see thirty years of ibogaine research (/blog/thirty-years-ibogaine-research-review).\n\n## What if I can't get into a trial?\n\nSome people look at programs abroad. Programs serving U.S. patients operate outside the U.S., with intake locations including Mexico and Gabon. Those are not clinical trials and are not approved U.S. clinics. Apply the same cardiac screening standards. See [how to choose an ibogaine clinic](/blog/how-to-choose-an-ibogaine-clinic).\n\n**Next step:** Read safety and screening (/safety-and-screening), then apply (/apply).",
  "faqs": [
    {
      "q": "How many ibogaine clinical trials are registered?",
      "a": "The 2025 Świeczkowski review identified nine registered ibogaine trials across ClinicalTrials.gov, EU registers and the WHO ICTRP after removing duplicates. Most were early-phase."
    },
    {
      "q": "Is there a phase 3 trial of ibogaine?",
      "a": "The 2025 review found no large late-phase trials, which is why efficacy cannot yet be stated definitively."
    },
    {
      "q": "Can I sign up for an ibogaine trial?",
      "a": "Check the live registry record and contact the research team. Status can be out of date, and criteria are strict, often including ECG and QTc limits."
    }
  ]
},
};
