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
                  <tr className="border-b border-forest/20 bg-sage/30">
                    {headers.map((h) => (
                      <th key={h} className="px-3 py-2 font-semibold text-forest">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-forest/10">
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
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
