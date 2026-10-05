export const siteConfig = {
  name: "Ibogaine Infusion",
  domain: "ibogaineinfusion.com",
  url: "https://ibogaineinfusion.com",
  oneLiner:
    "Screening-first inquiry into true psychoactive IV ibogaine infusion — physician-supervised, monitored; treatment location shared after screening.",
  description:
    "Educational inquiry into medically screened, true IV ibogaine infusion (intravenous psychoactive ibogaine — not oral dosing with supportive IV fluids). Treatment location shared after screening; not an approved U.S. clinic. Not a treatment guarantee or medical advice.",
  email: "hello@ibogaineinfusion.com",
  phoneDisplay: "Confidential inquiry form",
  nav: [
    { href: "/what-is-ibogaine-infusion", label: "Approach" },
    { href: "/how-it-works", label: "Journey" },
    { href: "/safety-and-screening", label: "Safety" },
    { href: "/blog", label: "Journal" },
  ],
  conditionLinks: [
    { href: "/ibogaine-for-addiction", label: "Addiction" },
    { href: "/ibogaine-for-depression", label: "Depression" },
    { href: "/ibogaine-for-ptsd", label: "PTSD" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
