import Link from "next/link";
import { internalPaths } from "@/lib/routes";

/** Minimal markdown-ish renderer for trusted blog content (headings, paragraphs, lists, tables, bold). */
export function Markdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="prose-clinical">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return <h2 key={i}>{trimmed.slice(3)}</h2>;
        }
        if (trimmed.startsWith("### ")) {
          return <h3 key={i}>{trimmed.slice(4)}</h3>;
        }

        if (trimmed.includes("| ---")) {
          const lines = trimmed.split("\n").filter(Boolean);
          const headers = lines[0].split("|").map((c) => c.trim()).filter(Boolean);
          const rows = lines.slice(2).map((line) =>
            line.split("|").map((c) => c.trim()).filter(Boolean),
          );
          return (
            <div key={i} className="my-6 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-stone/50">
                    {headers.map((h) => (
                      <th key={h} className="px-3 py-2 font-semibold text-forest">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-[var(--line)]">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 text-ink/80">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
          const items = trimmed.split("\n").filter(Boolean);
          const ordered = trimmed.startsWith("1. ");
          const ListTag = ordered ? "ol" : "ul";
          return (
            <ListTag key={i} className={ordered ? "list-decimal pl-5 mb-4" : undefined}>
              {items.map((item, idx) => (
                <li key={idx} className={ordered ? "mb-2 leading-relaxed text-[#3a3a3a]" : undefined}>
                  <RichText text={item.replace(/^(- |\d+\. )/, "")} />
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={i}>
            <RichText text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{linkify(part.slice(2, -2), `b${i}`)}</strong>;
        }
        return <span key={i}>{linkify(part, `t${i}`)}</span>;
      })}
    </>
  );
}

/** Turns plain-text internal paths (e.g. "/safety-and-screening", "/blog/slug") into links when the path exists. */
const PATH_RE = /(^|[\s(\[])(\/(?:blog\/)?[a-z0-9]+(?:-[a-z0-9]+)*)(?=$|[\s).,;:\]·])/g;

const MD_LINK_RE = /\[([^\]]+)\]\((\/(?:blog\/)?[a-z0-9]+(?:-[a-z0-9]+)*)\)/g;

/** Supports descriptive-anchor internal links: [anchor text](/blog/slug). Unknown paths fall back to plain text. */
function linkify(text: string, keyPrefix: string): React.ReactNode {
  if (!text.includes("](/")) return linkifyPaths(text, keyPrefix);
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  MD_LINK_RE.lastIndex = 0;
  while ((m = MD_LINK_RE.exec(text))) {
    if (m.index > last) nodes.push(linkifyPaths(text.slice(last, m.index), `${keyPrefix}-p${last}`));
    const [, label, path] = m;
    nodes.push(
      internalPaths.has(path) ? (
        <Link key={`${keyPrefix}-m${m.index}`} href={path} className="font-medium text-forest-mid hover:underline">
          {label}
        </Link>
      ) : (
        label
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(linkifyPaths(text.slice(last), `${keyPrefix}-p${last}`));
  return nodes;
}

function linkifyPaths(text: string, keyPrefix: string) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  PATH_RE.lastIndex = 0;
  while ((m = PATH_RE.exec(text))) {
    const path = m[2];
    if (!internalPaths.has(path)) continue;
    const start = m.index + m[1].length;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(
      <Link key={`${keyPrefix}-${start}`} href={path} className="font-medium text-forest-mid hover:underline">
        {path}
      </Link>,
    );
    last = start + path.length;
  }
  if (last === 0) return text;
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
