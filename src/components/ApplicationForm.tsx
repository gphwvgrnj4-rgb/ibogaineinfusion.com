"use client";

import {
  FormEvent,
  useMemo,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type Status = "idle" | "loading" | "success" | "error";

type CurrentPast = { current: boolean; past: boolean };

const STEPS = [
  { id: "contact", label: "Contact" },
  { id: "interest", label: "Interest" },
  { id: "health", label: "Health" },
  { id: "substances", label: "Substances" },
  { id: "eating", label: "Eating & sleep" },
  { id: "personal", label: "Personal" },
  { id: "intentions", label: "Intentions" },
] as const;

const SUBSTANCE_ROWS = [
  "Opioids / opiates",
  "Alcohol",
  "Benzodiazepines",
  "Stimulants (cocaine, meth, amphetamines)",
  "Cannabis",
  "Other drugs or prescription misuse",
  "Porn",
  "Food",
  "Gambling",
  "Technology",
  "Exercise",
] as const;

const EATING_ROWS = [
  "Dislike body, shape, or size",
  "Overeating",
  "Eating or overeating when emotional",
  "Purging by vomiting",
  "Excessive exercise",
  "Use of laxatives or diuretics",
  "Stopped eating or deprive yourself of food",
  "Fear of certain foods",
  "Preoccupation with foods causing illness",
  "Diagnosed or treated for an eating disorder",
] as const;

const inputClass =
  "mt-1.5 w-full rounded-md border border-forest/20 bg-cream px-3 py-2.5 text-ink outline-none ring-accent focus:ring-2";
const labelClass = "block text-sm font-medium text-ink";
const helpClass = "mt-1 text-xs text-ink/55";
const sectionCard =
  "space-y-5 rounded-xl border border-forest/10 bg-white p-5 sm:p-6 shadow-sm";

function emptyFlags(): CurrentPast {
  return { current: false, past: false };
}

function flagsMap<T extends readonly string[]>(rows: T): Record<T[number], CurrentPast> {
  return Object.fromEntries(rows.map((r) => [r, emptyFlags()])) as Record<
    T[number],
    CurrentPast
  >;
}

function RequiredMark() {
  return <span className="text-accent"> *</span>;
}

function OptionalMark() {
  return <span className="font-normal text-ink/45"> (optional)</span>;
}

function Field({
  id,
  label,
  required,
  help,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  help?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <RequiredMark /> : <OptionalMark />}
      </label>
      {children}
      {help ? <p className={helpClass}>{help}</p> : null}
    </div>
  );
}

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} ${props.className || ""}`} />;
}

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className || ""}`} />;
}

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputClass} ${props.className || ""}`} />;
}

function CurrentPastTable({
  rows,
  value,
  onChange,
}: {
  rows: readonly string[];
  value: Record<string, CurrentPast>;
  onChange: (next: Record<string, CurrentPast>) => void;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-forest/10">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-sage/40 text-forest">
          <tr>
            <th className="px-3 py-2 font-medium">Item</th>
            <th className="px-3 py-2 font-medium text-center">Current</th>
            <th className="px-3 py-2 font-medium text-center">Past</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row} className="border-t border-forest/10">
              <td className="px-3 py-2 text-ink/80">{row}</td>
              {(["current", "past"] as const).map((key) => (
                <td key={key} className="px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    aria-label={`${row} ${key}`}
                    checked={value[row]?.[key] || false}
                    onChange={(e) =>
                      onChange({
                        ...value,
                        [row]: { ...value[row], [key]: e.target.checked },
                      })
                    }
                    className="h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type FormState = {
  // 1 Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  timezone: string;
  // 2 Interest
  whyInterested: string;
  primaryConcern: string;
  primaryConcernOther: string;
  travelWindow: string;
  howFoundUs: string;
  discoveryQuestions: string;
  // 3 Health
  height: string;
  weight: string;
  liverPanelHistory: string;
  hasEkgHistory: boolean;
  ekgNotes: string;
  medicalConditions: string;
  currentMeds: string;
  pastMeds: string;
  supplements: string;
  hospitalSurgeries: string;
  healthConcernsRanked: string;
  // 4 Substances
  substanceProblems: Record<string, CurrentPast>;
  substanceElaborate: string;
  recreationalUse: string;
  alcoholDetail: string;
  psychedelicsExperience: string;
  // 5 Eating/sleep
  eatingPatterns: Record<string, CurrentPast>;
  eatingElaborate: string;
  dietAllergies: string;
  sleepQuality: string;
  sleepMeds: string;
  // 6 Personal
  relationshipStatus: string;
  children: string;
  familyFriendsSupport: string;
  legalIssues: string;
  stressors: string;
  trauma: string;
  selfHarm: string;
  siHiThoughts: string;
  psychosisSymptoms: string;
  phobias: string;
  sexualDysfunction: string;
  // 7 Intentions
  consideringHowLong: string;
  intention1: string;
  intention2: string;
  intention3: string;
  anythingElse: string;
  consentToContact: boolean;
  medicalAccuracy: boolean;
  mexicoAcknowledgment: boolean;
  // honeypot
  website: string;
};

const initialState = (): FormState => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "email",
  timezone: "",
  whyInterested: "",
  primaryConcern: "",
  primaryConcernOther: "",
  travelWindow: "",
  howFoundUs: "",
  discoveryQuestions: "",
  height: "",
  weight: "",
  liverPanelHistory: "",
  hasEkgHistory: false,
  ekgNotes: "",
  medicalConditions: "",
  currentMeds: "",
  pastMeds: "",
  supplements: "",
  hospitalSurgeries: "",
  healthConcernsRanked: "",
  substanceProblems: flagsMap(SUBSTANCE_ROWS),
  substanceElaborate: "",
  recreationalUse: "",
  alcoholDetail: "",
  psychedelicsExperience: "",
  eatingPatterns: flagsMap(EATING_ROWS),
  eatingElaborate: "",
  dietAllergies: "",
  sleepQuality: "",
  sleepMeds: "",
  relationshipStatus: "",
  children: "",
  familyFriendsSupport: "",
  legalIssues: "",
  stressors: "",
  trauma: "",
  selfHarm: "",
  siHiThoughts: "",
  psychosisSymptoms: "",
  phobias: "",
  sexualDysfunction: "",
  consideringHowLong: "",
  intention1: "",
  intention2: "",
  intention3: "",
  anythingElse: "",
  consentToContact: false,
  medicalAccuracy: false,
  mexicoAcknowledgment: false,
  website: "",
});

function buildPayload(f: FormState) {
  return {
    type: "application" as const,
    // flat fields for email/webhook notification prefs
    name: `${f.firstName} ${f.lastName}`.trim(),
    firstName: f.firstName.trim(),
    lastName: f.lastName.trim(),
    email: f.email.trim(),
    phone: f.phone.trim(),
    preferredContact: f.preferredContact,
    timezone: f.timezone.trim(),
    contact: {
      firstName: f.firstName.trim(),
      lastName: f.lastName.trim(),
      email: f.email.trim(),
      phone: f.phone.trim(),
      preferredContact: f.preferredContact,
      timezone: f.timezone.trim(),
    },
    interest: {
      whyInterested: f.whyInterested.trim(),
      primaryConcern: f.primaryConcern,
      primaryConcernOther: f.primaryConcernOther.trim(),
      travelWindow: f.travelWindow.trim(),
      howFoundUs: f.howFoundUs.trim(),
      discoveryQuestions: f.discoveryQuestions.trim(),
    },
    generalHealth: {
      height: f.height.trim(),
      weight: f.weight.trim(),
      liverPanelHistory: f.liverPanelHistory.trim(),
      hasEkgHistory: f.hasEkgHistory,
      ekgNotes: f.ekgNotes.trim(),
      ekgUpload: null,
      medicalConditions: f.medicalConditions.trim(),
      currentMeds: f.currentMeds.trim(),
      pastMeds: f.pastMeds.trim(),
      supplements: f.supplements.trim(),
      hospitalSurgeries: f.hospitalSurgeries.trim(),
      healthConcernsRanked: f.healthConcernsRanked.trim(),
    },
    substanceHistory: {
      problems: f.substanceProblems,
      elaborate: f.substanceElaborate.trim(),
      recreationalUse: f.recreationalUse.trim(),
      alcoholDetail: f.alcoholDetail.trim(),
      psychedelicsExperience: f.psychedelicsExperience.trim(),
    },
    eatingSleep: {
      eatingPatterns: f.eatingPatterns,
      eatingElaborate: f.eatingElaborate.trim(),
      dietAllergies: f.dietAllergies.trim(),
      sleepQuality: f.sleepQuality.trim(),
      sleepMeds: f.sleepMeds.trim(),
    },
    personalFamily: {
      relationshipStatus: f.relationshipStatus.trim(),
      children: f.children.trim(),
      familyFriendsSupport: f.familyFriendsSupport.trim(),
      legalIssues: f.legalIssues.trim(),
      stressors: f.stressors.trim(),
      trauma: f.trauma.trim(),
      selfHarm: f.selfHarm.trim(),
      siHiThoughts: f.siHiThoughts.trim(),
      psychosisSymptoms: f.psychosisSymptoms.trim(),
      phobias: f.phobias.trim(),
      sexualDysfunction: f.sexualDysfunction.trim(),
    },
    intentions: {
      consideringHowLong: f.consideringHowLong.trim(),
      topThree: [f.intention1.trim(), f.intention2.trim(), f.intention3.trim()].filter(Boolean),
      anythingElse: f.anythingElse.trim(),
    },
    consent: {
      consentToContact: f.consentToContact,
      medicalAccuracy: f.medicalAccuracy,
      mexicoAcknowledgment: f.mexicoAcknowledgment,
    },
    website: f.website,
  };
}

export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldError, setFieldError] = useState("");

  const progress = useMemo(() => ((step + 1) / STEPS.length) * 100, [step]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validateStep(index: number): string | null {
    if (index === 0) {
      if (!form.firstName.trim() || !form.lastName.trim()) return "Please enter your first and last name.";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
        return "Please enter a valid email.";
      if (!form.phone.trim()) return "Please enter a phone number.";
    }
    if (index === STEPS.length - 1) {
      if (!form.consentToContact || !form.medicalAccuracy || !form.mexicoAcknowledgment) {
        return "Please confirm consent, accuracy, and Mexico provisional acknowledgment to submit.";
      }
    }
    return null;
  }

  function goNext() {
    const err = validateStep(step);
    if (err) {
      setFieldError(err);
      return;
    }
    setFieldError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setFieldError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validateStep(STEPS.length - 1);
    if (err) {
      setFieldError(err);
      return;
    }
    setFieldError("");
    setStatus("loading");
    setMessage("");

    const payload = buildPayload(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string; demo?: boolean };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to submit right now.");
      }

      setStatus("success");
      setMessage(
        json.demo
          ? "Application received (demo mode). Connect FORM_WEBHOOK_URL in production for delivery."
          : "Application received. Our team will review confidentially.",
      );
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={`${sectionCard} text-center`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Thank you</p>
        <h2 className="mt-2 font-serif text-2xl text-forest">Application received</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/75">
          {message || "We received your confidential application."}
        </p>
        <ol className="mx-auto mt-6 max-w-md space-y-3 text-left text-sm text-ink/80">
          <li>
            <strong className="text-forest">1. Review</strong> — Our team reviews your application for
            medical and readiness signals (not automatic admission).
          </li>
          <li>
            <strong className="text-forest">2. Confidential follow-up</strong> — We contact you via your
            preferred method for a discovery conversation.
          </li>
          <li>
            <strong className="text-forest">3. Screening</strong> — Cardiac/medical diligence and
            go/no-go precede any treatment discussion. Treatment is available provisionally in Mexico;
            ibogaine is not U.S. FDA-approved.
          </li>
        </ol>
        <p className="mt-6 text-xs text-ink/55">
          If you are in crisis, contact local emergency or crisis services now. This form is not crisis care.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      <div className="rounded-xl border border-forest/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Step {step + 1} of {STEPS.length}
          </p>
          <p className="text-xs text-ink/55">{STEPS[step].label}</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-sage/50" aria-hidden="true">
          <div
            className="h-full rounded-full bg-forest transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={s.id}
              className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-forest" : "bg-sage/60"}`}
            />
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">
          Fill out as much as you are comfortable with at this stage. Required fields are marked with{" "}
          <span className="text-accent">*</span>. Your information is treated as confidential intake for
          screening — not a public post or guarantee of treatment.
        </p>
      </div>

      {/* honeypot */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      {step === 0 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Contact</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="firstName" label="First name" required>
              <TextInput
                id="firstName"
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                required
              />
            </Field>
            <Field id="lastName" label="Last name" required>
              <TextInput
                id="lastName"
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                required
              />
            </Field>
          </div>
          <Field id="email" label="Email" required>
            <TextInput
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
            />
          </Field>
          <Field id="phone" label="Phone" required>
            <TextInput
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              required
            />
          </Field>
          <Field id="preferredContact" label="Preferred contact method" required>
            <Select
              id="preferredContact"
              value={form.preferredContact}
              onChange={(e) => set("preferredContact", e.target.value)}
            >
              <option value="email">Email</option>
              <option value="phone">Phone call</option>
              <option value="text">Text / SMS</option>
              <option value="whatsapp">WhatsApp</option>
            </Select>
          </Field>
          <Field id="timezone" label="Timezone" help="Helps us schedule a discovery call.">
            <TextInput
              id="timezone"
              placeholder="e.g. America/New_York, Europe/London"
              value={form.timezone}
              onChange={(e) => set("timezone", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Interest</h2>
          <Field
            id="whyInterested"
            label="Why are you interested in IV ibogaine infusion?"
            help="True psychoactive intravenous ibogaine under physician supervision — not oral dosing with supportive IV fluids."
          >
            <TextArea
              id="whyInterested"
              rows={4}
              value={form.whyInterested}
              onChange={(e) => set("whyInterested", e.target.value)}
            />
          </Field>
          <Field id="primaryConcern" label="Primary concern">
            <Select
              id="primaryConcern"
              value={form.primaryConcern}
              onChange={(e) => set("primaryConcern", e.target.value)}
            >
              <option value="">Select…</option>
              <option value="addiction">Addiction / substance use</option>
              <option value="depression">Depression / mood</option>
              <option value="ptsd">PTSD / trauma</option>
              <option value="other">Other</option>
            </Select>
          </Field>
          {form.primaryConcern === "other" && (
            <Field id="primaryConcernOther" label="Please describe">
              <TextInput
                id="primaryConcernOther"
                value={form.primaryConcernOther}
                onChange={(e) => set("primaryConcernOther", e.target.value)}
              />
            </Field>
          )}
          <Field id="travelWindow" label="Approximate travel window">
            <TextInput
              id="travelWindow"
              placeholder="e.g. next 30–60 days, Q4, flexible"
              value={form.travelWindow}
              onChange={(e) => set("travelWindow", e.target.value)}
            />
          </Field>
          <Field id="howFoundUs" label="How did you find us?">
            <TextInput
              id="howFoundUs"
              value={form.howFoundUs}
              onChange={(e) => set("howFoundUs", e.target.value)}
            />
          </Field>
          <Field id="discoveryQuestions" label="Questions for the discovery call">
            <TextArea
              id="discoveryQuestions"
              rows={3}
              value={form.discoveryQuestions}
              onChange={(e) => set("discoveryQuestions", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">General health</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="height" label="Height">
              <TextInput
                id="height"
                placeholder="e.g. 5'10&quot; or 178 cm"
                value={form.height}
                onChange={(e) => set("height", e.target.value)}
              />
            </Field>
            <Field id="weight" label="Weight">
              <TextInput
                id="weight"
                placeholder="e.g. 165 lb or 75 kg"
                value={form.weight}
                onChange={(e) => set("weight", e.target.value)}
              />
            </Field>
          </div>
          <Field
            id="liverPanelHistory"
            label="Liver panel history"
            help="If yes, when approximately, and what were the results?"
          >
            <TextArea
              id="liverPanelHistory"
              rows={3}
              value={form.liverPanelHistory}
              onChange={(e) => set("liverPanelHistory", e.target.value)}
            />
          </Field>
          <div>
            <label className="flex items-start gap-3 text-sm text-ink/85">
              <input
                type="checkbox"
                checked={form.hasEkgHistory}
                onChange={(e) => set("hasEkgHistory", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
              />
              <span>
                I have had an EKG/ECG (electrocardiogram)
                <OptionalMark />
              </span>
            </label>
            <p className={helpClass}>
              You can submit this application without an EKG on hand — we can collect reports later.
              Do not delay the form for file upload.
            </p>
          </div>
          <Field id="ekgNotes" label="EKG/ECG notes or dates">
            <TextArea
              id="ekgNotes"
              rows={2}
              value={form.ekgNotes}
              onChange={(e) => set("ekgNotes", e.target.value)}
            />
          </Field>
          <Field
            id="medicalConditions"
            label="Medical conditions (current and past)"
            help="Include diagnosed and undiagnosed; label past/resolved conditions."
          >
            <TextArea
              id="medicalConditions"
              rows={3}
              value={form.medicalConditions}
              onChange={(e) => set("medicalConditions", e.target.value)}
            />
          </Field>
          <Field id="currentMeds" label="Current medications" help="Include start dates if known.">
            <TextArea
              id="currentMeds"
              rows={3}
              value={form.currentMeds}
              onChange={(e) => set("currentMeds", e.target.value)}
            />
          </Field>
          <Field id="pastMeds" label="Past medications" help="Dates and length of use if known.">
            <TextArea
              id="pastMeds"
              rows={3}
              value={form.pastMeds}
              onChange={(e) => set("pastMeds", e.target.value)}
            />
          </Field>
          <Field id="supplements" label="Supplements (vitamins, herbs, minerals)">
            <TextArea
              id="supplements"
              rows={2}
              value={form.supplements}
              onChange={(e) => set("supplements", e.target.value)}
            />
          </Field>
          <Field id="hospitalSurgeries" label="Hospital visits or past surgeries">
            <TextArea
              id="hospitalSurgeries"
              rows={2}
              value={form.hospitalSurgeries}
              onChange={(e) => set("hospitalSurgeries", e.target.value)}
            />
          </Field>
          <Field id="healthConcernsRanked" label="Current health concerns (ranked by importance)">
            <TextArea
              id="healthConcernsRanked"
              rows={3}
              value={form.healthConcernsRanked}
              onChange={(e) => set("healthConcernsRanked", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Substance history</h2>
          <p className="text-sm text-ink/70">
            Check any that have negatively impacted your life physically, mentally, socially, or financially.
          </p>
          <CurrentPastTable
            rows={SUBSTANCE_ROWS}
            value={form.substanceProblems}
            onChange={(next) => set("substanceProblems", next)}
          />
          <Field id="substanceElaborate" label="Elaborate on checked items">
            <TextArea
              id="substanceElaborate"
              rows={3}
              value={form.substanceElaborate}
              onChange={(e) => set("substanceElaborate", e.target.value)}
            />
          </Field>
          <Field
            id="recreationalUse"
            label="Recreational use detail"
            help="Type, dosage, frequency, and last date of use if applicable."
          >
            <TextArea
              id="recreationalUse"
              rows={3}
              value={form.recreationalUse}
              onChange={(e) => set("recreationalUse", e.target.value)}
            />
          </Field>
          <Field id="alcoholDetail" label="Alcohol (current or past addiction / heavy use)">
            <TextArea
              id="alcoholDetail"
              rows={2}
              value={form.alcoholDetail}
              onChange={(e) => set("alcoholDetail", e.target.value)}
            />
          </Field>
          <Field id="psychedelicsExperience" label="Psychedelics / plant medicines experience">
            <TextArea
              id="psychedelicsExperience"
              rows={3}
              value={form.psychedelicsExperience}
              onChange={(e) => set("psychedelicsExperience", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 4 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Eating &amp; sleep</h2>
          <p className="text-sm text-ink/70">Do you now or have you experienced any of the following?</p>
          <CurrentPastTable
            rows={EATING_ROWS}
            value={form.eatingPatterns}
            onChange={(next) => set("eatingPatterns", next)}
          />
          <Field id="eatingElaborate" label="Elaborate if you checked any above">
            <TextArea
              id="eatingElaborate"
              rows={3}
              value={form.eatingElaborate}
              onChange={(e) => set("eatingElaborate", e.target.value)}
            />
          </Field>
          <Field
            id="dietAllergies"
            label="Diet, allergies, and restrictions"
            help="Food or environmental allergies, current diet, foods you avoid."
          >
            <TextArea
              id="dietAllergies"
              rows={3}
              value={form.dietAllergies}
              onChange={(e) => set("dietAllergies", e.target.value)}
            />
          </Field>
          <Field id="sleepQuality" label="Sleep quality" help="How well do you sleep? Do you feel rested?">
            <TextArea
              id="sleepQuality"
              rows={2}
              value={form.sleepQuality}
              onChange={(e) => set("sleepQuality", e.target.value)}
            />
          </Field>
          <Field
            id="sleepMeds"
            label="Sleep medications or supplements"
            help="Type, amount, frequency, last use."
          >
            <TextArea
              id="sleepMeds"
              rows={2}
              value={form.sleepMeds}
              onChange={(e) => set("sleepMeds", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 5 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Personal &amp; family</h2>
          <Field id="relationshipStatus" label="Relationship / marital status">
            <TextInput
              id="relationshipStatus"
              value={form.relationshipStatus}
              onChange={(e) => set("relationshipStatus", e.target.value)}
            />
          </Field>
          <Field id="children" label="Children" help="Do you have children? Do they live with you?">
            <TextArea
              id="children"
              rows={2}
              value={form.children}
              onChange={(e) => set("children", e.target.value)}
            />
          </Field>
          <Field id="familyFriendsSupport" label="Family &amp; friends support">
            <TextArea
              id="familyFriendsSupport"
              rows={3}
              value={form.familyFriendsSupport}
              onChange={(e) => set("familyFriendsSupport", e.target.value)}
            />
          </Field>
          <Field id="legalIssues" label="Legal issues" help="Past arrests, charges, suits, or current disputes.">
            <TextArea
              id="legalIssues"
              rows={2}
              value={form.legalIssues}
              onChange={(e) => set("legalIssues", e.target.value)}
            />
          </Field>
          <Field id="stressors" label="Current stressors">
            <TextArea
              id="stressors"
              rows={2}
              value={form.stressors}
              onChange={(e) => set("stressors", e.target.value)}
            />
          </Field>
          <Field
            id="trauma"
            label="Trauma history"
            help="Share only what you are comfortable with at this stage."
          >
            <TextArea
              id="trauma"
              rows={3}
              value={form.trauma}
              onChange={(e) => set("trauma", e.target.value)}
            />
          </Field>
          <Field id="selfHarm" label="Self-harm">
            <TextArea
              id="selfHarm"
              rows={2}
              value={form.selfHarm}
              onChange={(e) => set("selfHarm", e.target.value)}
            />
          </Field>
          <Field
            id="siHiThoughts"
            label="Thoughts of hurting yourself or another"
            help="When was the last time, if ever?"
          >
            <TextArea
              id="siHiThoughts"
              rows={2}
              value={form.siHiThoughts}
              onChange={(e) => set("siHiThoughts", e.target.value)}
            />
          </Field>
          <Field
            id="psychosisSymptoms"
            label="Hallucinations, paranoid thoughts, hearing voices, memory loss"
          >
            <TextArea
              id="psychosisSymptoms"
              rows={2}
              value={form.psychosisSymptoms}
              onChange={(e) => set("psychosisSymptoms", e.target.value)}
            />
          </Field>
          <Field id="phobias" label="Fears or phobias that interfere with daily living">
            <TextArea
              id="phobias"
              rows={2}
              value={form.phobias}
              onChange={(e) => set("phobias", e.target.value)}
            />
          </Field>
          <Field id="sexualDysfunction" label="Sexual dysfunction (optional detail)">
            <TextArea
              id="sexualDysfunction"
              rows={2}
              value={form.sexualDysfunction}
              onChange={(e) => set("sexualDysfunction", e.target.value)}
            />
          </Field>
        </div>
      )}

      {step === 6 && (
        <div className={sectionCard}>
          <h2 className="font-serif text-xl text-forest">Intentions &amp; consent</h2>
          <Field id="consideringHowLong" label="How long have you been considering ibogaine?">
            <TextInput
              id="consideringHowLong"
              value={form.consideringHowLong}
              onChange={(e) => set("consideringHowLong", e.target.value)}
            />
          </Field>
          <div>
            <p className={labelClass}>
              Top 3 intentions with IV ibogaine
              <OptionalMark />
            </p>
            <div className="mt-2 space-y-2">
              <TextInput
                aria-label="Intention 1"
                placeholder="Intention 1"
                value={form.intention1}
                onChange={(e) => set("intention1", e.target.value)}
              />
              <TextInput
                aria-label="Intention 2"
                placeholder="Intention 2"
                value={form.intention2}
                onChange={(e) => set("intention2", e.target.value)}
              />
              <TextInput
                aria-label="Intention 3"
                placeholder="Intention 3"
                value={form.intention3}
                onChange={(e) => set("intention3", e.target.value)}
              />
            </div>
          </div>
          <Field id="anythingElse" label="Anything else you would like us to know">
            <TextArea
              id="anythingElse"
              rows={3}
              value={form.anythingElse}
              onChange={(e) => set("anythingElse", e.target.value)}
            />
          </Field>

          <div className="space-y-4 rounded-lg border border-forest/10 bg-sage/20 p-4">
            <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
              <input
                type="checkbox"
                checked={form.consentToContact}
                onChange={(e) => set("consentToContact", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
                required
              />
              <span>
                I consent to be contacted confidentially about this application and screening.
                <RequiredMark />
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
              <input
                type="checkbox"
                checked={form.medicalAccuracy}
                onChange={(e) => set("medicalAccuracy", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
                required
              />
              <span>
                I attest that the medical and personal information I provided is accurate to the best
                of my knowledge. I understand incomplete or inaccurate history can affect safety
                screening.
                <RequiredMark />
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
              <input
                type="checkbox"
                checked={form.mexicoAcknowledgment}
                onChange={(e) => set("mexicoAcknowledgment", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-forest/30 text-forest focus:ring-accent"
                required
              />
              <span>
                I understand this educational inquiry is{" "}
                <strong className="text-forest">not a guarantee of treatment eligibility</strong>;
                that physician-supervised IV ibogaine programs discussed here are available{" "}
                <strong className="text-forest">provisionally in Mexico</strong> and are{" "}
                <strong className="text-forest">not</strong> an FDA-approved U.S. clinic pathway;
                that ibogaine involves <strong className="text-forest">serious cardiac risk</strong>{" "}
                (including QTc / arrhythmia concerns); and that this is not a promise of legality,
                travel clearance, cure, or clinical outcome. Medical screening remains mandatory.
                <RequiredMark />
              </span>
            </label>
          </div>
        </div>
      )}

      {fieldError && (
        <p role="alert" className="text-sm text-red-700">
          {fieldError}
        </p>
      )}

      {message && status === "error" && (
        <p role="status" className="text-sm text-red-700">
          {message}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0 || status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-forest/20 px-5 py-3 text-sm font-medium text-forest transition hover:bg-sage/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-mid"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-mid disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Submitting…" : "Submit confidential application"}
          </button>
        )}
      </div>
    </form>
  );
}
