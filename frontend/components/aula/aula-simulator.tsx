"use client";

import { useState } from "react";

interface AulaSimulatorProps {
  titulo: string;
  descricao: string;
  inputLabel: string;
  inputPlaceholder?: string;
  verificar: (valor: string) => { correto: boolean; mensagem: string };
}

export function AulaSimulator({
  titulo,
  descricao,
  inputLabel,
  inputPlaceholder,
  verificar,
}: AulaSimulatorProps) {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState<{ correto: boolean; mensagem: string } | null>(null);

  function handleVerificar() {
    setResultado(verificar(valor.trim()));
  }

  return (
    <div className="my-6 p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
      <h3 className="font-bold text-sm mb-1">{titulo}</h3>
      <p className="text-sm text-[var(--color-muted)] mb-4">{descricao}</p>

      <label className="block text-xs font-mono text-[var(--color-muted)] mb-1.5">
        {inputLabel}
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
            setResultado(null);
          }}
          placeholder={inputPlaceholder}
          className="flex-1 px-3 py-2 rounded-md bg-[var(--color-background)] border border-[var(--color-border)] text-sm font-mono text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-primary)]"
        />
        <button
          onClick={handleVerificar}
          className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          Verificar
        </button>
      </div>

      {resultado && (
        <div
          className={`mt-3 px-4 py-2.5 rounded-md text-sm font-mono ${
            resultado.correto
              ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
              : "bg-[var(--color-error)]/10 text-[var(--color-error)]"
          }`}
        >
          {resultado.correto ? "✓" : "✗"} {resultado.mensagem}
        </div>
      )}
    </div>
  );
}
