"use client";

import { useState } from "react";

interface AulaCodeToggleProps {
  errado: string;
  correto: string;
  explicacao: string;
}

export function AulaCodeToggle({ errado, correto, explicacao }: AulaCodeToggleProps) {
  const [mostrarCorreto, setMostrarCorreto] = useState(false);

  return (
    <div className="my-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <div className="flex border-b border-[var(--color-border)]">
        <button
          onClick={() => setMostrarCorreto(false)}
          className={`flex-1 px-4 py-2.5 text-xs font-mono font-semibold transition-colors cursor-pointer ${
            !mostrarCorreto
              ? "bg-[var(--color-error)]/10 text-[var(--color-error)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
          }`}
        >
          ✗ Errado
        </button>
        <button
          onClick={() => setMostrarCorreto(true)}
          className={`flex-1 px-4 py-2.5 text-xs font-mono font-semibold transition-colors cursor-pointer ${
            mostrarCorreto
              ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
          }`}
        >
          ✓ Correto
        </button>
      </div>

      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
        {mostrarCorreto ? correto : errado}
      </pre>

      {mostrarCorreto && (
        <div className="px-4 pb-4">
          <p className="text-xs text-[var(--color-success)]/80 leading-relaxed">
            {explicacao}
          </p>
        </div>
      )}
    </div>
  );
}
