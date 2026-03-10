"use client";

import { useState } from "react";

interface AulaExpandableCardProps {
  titulo: string;
  resumo: string;
  children: React.ReactNode;
}

export function AulaExpandableCard({ titulo, resumo, children }: AulaExpandableCardProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="my-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[var(--color-primary)]/5 transition-colors"
        aria-expanded={aberto}
      >
        <div>
          <p className="font-semibold text-sm">{titulo}</p>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">{resumo}</p>
        </div>
        <span
          className="text-[var(--color-muted)] text-lg transition-transform duration-200"
          style={{ transform: aberto ? "rotate(180deg)" : "rotate(0)" }}
        >
          ▾
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: aberto ? "500px" : "0",
          opacity: aberto ? 1 : 0,
        }}
      >
        <div className="px-5 pb-4 text-sm leading-relaxed text-[var(--color-foreground)]/80 border-t border-[var(--color-border)]">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
