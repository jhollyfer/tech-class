"use client";

import { useState } from "react";

interface AulaFlipBitsProps {
  quantidade: number;
  label?: string;
}

export function AulaFlipBits({ quantidade, label }: AulaFlipBitsProps) {
  const [bits, setBits] = useState<number[]>(Array(quantidade).fill(0));

  function toggleBit(index: number) {
    setBits((prev) => prev.map((b, i) => (i === index ? (b === 0 ? 1 : 0) : b)));
  }

  const decimal = bits.reduce((acc, bit, i) => acc + bit * Math.pow(2, bits.length - 1 - i), 0);

  return (
    <div className="my-6 p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
      {label && (
        <p className="text-sm text-[var(--color-muted)] mb-4 font-mono">{label}</p>
      )}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {bits.map((bit, i) => (
          <button
            key={i}
            onClick={() => toggleBit(i)}
            className="relative w-14 h-14 rounded-lg font-mono text-xl font-bold transition-all duration-300 cursor-pointer select-none"
            style={{
              backgroundColor: bit === 1 ? "var(--color-success)" : "var(--color-surface)",
              color: bit === 1 ? "var(--color-background)" : "var(--color-foreground)",
              border: `2px solid ${bit === 1 ? "var(--color-success)" : "var(--color-border)"}`,
              transform: bit === 1 ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            aria-label={`Bit ${i + 1}: ${bit}. Clique para alternar.`}
          >
            {bit}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <span className="font-mono text-sm text-[var(--color-muted)]">Binário: </span>
        <span className="font-mono text-sm font-bold text-[var(--color-primary)]">
          {bits.join("")}
        </span>
        <span className="font-mono text-sm text-[var(--color-muted)] ml-4">Decimal: </span>
        <span className="font-mono text-sm font-bold text-[var(--color-warning)]">
          {decimal}
        </span>
      </div>
    </div>
  );
}
