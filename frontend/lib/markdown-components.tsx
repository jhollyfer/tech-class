import type { Components } from "react-markdown";
import { AulaCallout } from "@/components/aula/aula-callout";
import { MermaidDiagram } from "@/components/aula/mermaid-diagram";

function TruthTableCell({ children }: { children: React.ReactNode }) {
  const text = String(children).trim();
  if (text === "V" || text === "1") {
    return (
      <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)]">
        {text}
      </span>
    );
  }
  if (text === "F" || text === "0") {
    return (
      <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-[var(--color-error)]/15 text-[var(--color-error)]">
        {text}
      </span>
    );
  }
  return <>{children}</>;
}

export const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-4 flex items-center gap-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-bold mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed text-[var(--color-foreground)]/90 mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 my-4 ml-4 list-disc marker:text-[var(--color-primary)]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 my-4 ml-4 list-decimal marker:text-[var(--color-primary)]">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed text-[var(--color-foreground)]/90">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-[var(--color-foreground)]">{children}</strong>
  ),
  blockquote: ({ children }) => {
    // Extract text content to check for callout syntax
    const text = extractText(children);
    const infoMatch = text.match(/^\[!info\]\s*([\s\S]*)/);
    const sucessoMatch = text.match(/^\[!sucesso\]\s*([\s\S]*)/);
    const alertaMatch = text.match(/^\[!alerta\]\s*([\s\S]*)/);

    if (infoMatch) {
      return <AulaCallout tipo="info">{infoMatch[1].trim()}</AulaCallout>;
    }
    if (sucessoMatch) {
      return <AulaCallout tipo="sucesso">{sucessoMatch[1].trim()}</AulaCallout>;
    }
    if (alertaMatch) {
      return <AulaCallout tipo="alerta">{alertaMatch[1].trim()}</AulaCallout>;
    }

    return <AulaCallout tipo="info">{children}</AulaCallout>;
  },
  table: ({ children }) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-sm font-mono">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--color-surface)]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-[var(--color-muted)] font-semibold uppercase tracking-wider text-xs">
      {children}
    </th>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-t border-[var(--color-border)]">{children}</tr>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5">
      <TruthTableCell>{children}</TruthTableCell>
    </td>
  ),
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : null;

    if (lang === "mermaid") {
      return <MermaidDiagram chart={String(children).trim()} />;
    }

    // Inline code
    if (!lang) {
      return (
        <code
          className="px-1.5 py-0.5 rounded text-sm font-mono bg-[var(--color-code-bg)] text-[var(--color-primary)]"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Code block
    return (
      <code className={`${className} block`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-code-bg)] p-4 overflow-x-auto text-sm leading-relaxed font-mono">
      {children}
    </pre>
  ),
};

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && node !== null && "props" in node) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return extractText(element.props.children);
  }
  return "";
}
