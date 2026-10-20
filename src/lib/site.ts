export const siteConfig = {
  name: "Ibogaine Infusion",
  domain: "ibogaineinfusion.com",
  url: "https://www.ibogaineinfusion.com",
  oneLiner:
    "A clinic dedicated exclusively to intravenous (IV) ibogaine therapy — physician-screened, continuously monitored; waitlist intakes in Mexico and Gabon.",
  description:
    "A clinic dedicated exclusively to intravenous (IV) ibogaine therapy. Every patient is screened by a physician first; treatment is true IV ibogaine infusion (intravenous psychoactive ibogaine — not oral dosing with supportive IV fluids) under continuous cardiac monitoring. Waitlist intakes for two locations: Mexico and Gabon; not an approved U.S. clinic. Not a treatment guarantee or medical advice.",
  email: "hello@ibogaineinfusion.com",
  phoneDisplay: "Confidential waitlist form",
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

/**
 * Search engine ownership verification tokens.
 * Leave empty until a real token is issued; set via Vercel env vars
 * (GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION) or paste the token here.
 * Empty values render no meta tag.
 */
export const siteVerification = {
  google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  bing: process.env.BING_SITE_VERIFICATION || "A0CFFFB9635CA674EF63EC8806F5044B",
} as const;
