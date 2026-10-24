import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const FOREST_DEEP = "#071C16";
const CREAM = "#F6F3EE";
const GOLD = "#B8956A";
const GOLD_SOFT = "#D4C4A8";

async function loadAssets() {
  const dir = join(process.cwd(), "src/app/_og");
  const [serif, sans, mark] = await Promise.all([
    readFile(join(dir, "InstrumentSerif-Regular.ttf")),
    readFile(join(dir, "InstrumentSans-Medium.ttf")),
    readFile(join(process.cwd(), "public/brand/logo-monoline-mark.svg")),
  ]);
  return { serif, sans, markSrc: `data:image/svg+xml;base64,${mark.toString("base64")}` };
}

function titleSize(title: string) {
  const n = title.length;
  if (n <= 32) return 84;
  if (n <= 52) return 72;
  if (n <= 78) return 62;
  return 54;
}

/** Branded 1200x630 share card: dark ground, serif title, thin gold lines, infinity mark. No imagery. */
export async function renderOgCard({ title, label }: { title: string; label: string }) {
  const { serif, sans, markSrc } = await loadAssets();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: FOREST_DEEP,
          padding: 36,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: `1px solid rgba(184, 149, 106, 0.55)`,
            padding: "44px 60px 40px",
            position: "relative",
          }}
        >
          {/* corner accents */}
          <div style={{ position: "absolute", top: 10, left: 10, width: 40, height: 40, borderTop: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}`, display: "flex" }} />
          <div style={{ position: "absolute", top: 10, right: 10, width: 40, height: 40, borderTop: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}`, display: "flex" }} />
          <div style={{ position: "absolute", bottom: 10, left: 10, width: 40, height: 40, borderBottom: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}`, display: "flex" }} />
          <div style={{ position: "absolute", bottom: 10, right: 10, width: 40, height: 40, borderBottom: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}`, display: "flex" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={98} height={50} alt="" />
            <div style={{ display: "flex", width: 1, height: 34, backgroundColor: "rgba(184, 149, 106, 0.5)" }} />
            <div style={{ display: "flex", fontFamily: "Instrument Sans", fontSize: 20, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>
              {label}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: 72, height: 1, backgroundColor: GOLD, marginBottom: 30 }} />
            <div
              style={{
                display: "flex",
                fontFamily: "Instrument Serif",
                fontSize: titleSize(title),
                lineHeight: 1.08,
                letterSpacing: -0.5,
                color: CREAM,
                maxWidth: 1000,
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 30, color: CREAM }}>Ibogaine Infusion</div>
            <div style={{ display: "flex", flex: 1, height: 1, margin: "0 28px", backgroundColor: "rgba(184, 149, 106, 0.35)" }} />
            <div style={{ display: "flex", fontFamily: "Instrument Sans", fontSize: 22, letterSpacing: 2, color: GOLD_SOFT }}>
              ibogaineinfusion.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Sans", data: sans, style: "normal", weight: 500 },
      ],
    },
  );
}
