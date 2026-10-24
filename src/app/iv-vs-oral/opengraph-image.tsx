import { renderOgCard } from "@/lib/og";
export const alt = "IV vs Oral vs Intranasal Ibogaine: Routes Compared";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgCard({ title: "IV vs Oral vs Intranasal Ibogaine: Routes Compared", label: "Approach" });
}
