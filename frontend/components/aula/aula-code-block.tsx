interface CodeToken {
  text: string;
  type?: "keyword" | "string" | "number" | "comment" | "operator";
}

interface AulaCodeBlockProps {
  tokens: CodeToken[];
  language?: string;
}

const tokenColors: Record<string, string> = {
  keyword: "text-[var(--color-primary)]",
  string: "text-[var(--color-aula-success)]",
  number: "text-[var(--color-aula-highlight)]",
  comment: "text-[var(--color-muted)] italic",
  operator: "text-[var(--color-aula-error)]",
};

export function AulaCodeBlock({ tokens, language }: AulaCodeBlockProps) {
  return (
    <div className="relative rounded-lg border border-[var(--color-border)] bg-[#0d0d14] overflow-x-auto my-4">
      {language && (
        <div className="px-4 py-1.5 text-xs font-mono text-[var(--color-muted)] border-b border-[var(--color-border)]">
          {language}
        </div>
      )}
      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
        <code>
          {tokens.map((token, i) => (
            <span key={i} className={token.type ? tokenColors[token.type] : ""}>
              {token.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export type { CodeToken };
