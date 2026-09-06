export const siteConfig = {
  name: "Ibogaine Infusion",
  domain: "ibogaineinfusion.com",
  url: "https://ibogaineinfusion.com",
  oneLiner:
    "Screening-first inquiry into true psychoactive IV ibogaine infusion — physician-supervised, monitored, provisionally available in Mexico.",
  description:
    "Educational inquiry into medically screened, true IV ibogaine infusion (intravenous psychoactive ibogaine — not oral dosing with supportive IV fluids). Provisional Mexico availability; not a U.S. FDA-approved clinic. Not a treatment guarantee or medical advice.",
  email: "inquiry@ibogaineinfusion.com",
  phoneDisplay: "Confidential inquiry form",
  nav: [
    { href: "/what-is-ibogaine-infusion", label: "What Is Infusion" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/safety-and-screening", label: "Safety" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ],
  conditionLinks: [
    { href: "/ibogaine-for-addiction", label: "Addiction" },
    { href: "/ibogaine-for-depression", label: "Depression" },
    { href: "/ibogaine-for-ptsd", label: "PTSD" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
