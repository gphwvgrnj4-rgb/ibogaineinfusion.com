import { renderOgCard } from "@/lib/og";
export const alt = "Ibogaine Infusion — True IV Ibogaine Infusion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgCard({ title: "True IV Ibogaine Infusion", label: "IV ibogaine therapy" });
}
