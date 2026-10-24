import { renderOgCard } from "@/lib/og";
export const alt = "Confidential Application — IV Ibogaine Infusion Screening";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgCard({ title: "Confidential Application", label: "IV ibogaine infusion screening" });
}
