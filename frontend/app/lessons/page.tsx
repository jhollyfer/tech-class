import { aulas } from "@/lib/aulas-data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Class — Lógica de Programação",
  description:
    "Aulas interativas de Lógica de Programação com quizzes, simuladores e exercícios práticos.",
};

function groupByModulo(aulas: typeof import("@/lib/aulas-data").aulas) {
  const groups: Record<string, typeof aulas> = {};
  for (const aula of aulas) {
    if (!groups[aula.modulo]) groups[aula.modulo] = [];
    groups[aula.modulo].push(aula);
  }
  return Object.entries(groups);
}

export default function AulasPage() {
  const modulos = groupByModulo(aulas);
  let aulaIndex = 0;

  return (
    <main className="min-h-screen">
      <header className="pt-16 pb-12 px-6 text-center">
        <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-6">
          Lógica de Programação
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Aulas</h1>
        <p className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
          {aulas.length} aulas interativas com quizzes, simuladores e exercícios práticos.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-16 space-y-10">
        {modulos.map(([modulo, aulasDoModulo]) => (
          <section key={modulo}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-sm font-mono font-bold text-[var(--color-primary)] uppercase tracking-wider">
                {modulo}
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-muted)]">
                {aulasDoModulo.length} {aulasDoModulo.length === 1 ? "aula" : "aulas"}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aulasDoModulo.map((aula) => {
                const i = aulaIndex++;
                return (
                  <Link
                    key={aula.slug}
                    href={`/lessons/${aula.slug}`}
                    className="group block p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-xs text-[var(--color-muted)] font-mono">
                            {aula.secoes.length} {aula.secoes.length === 1 ? "seção" : "seções"}
                          </p>
                        </div>
                        <h3 className="font-bold text-sm group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                          {aula.titulo}
                        </h3>
                        <p className="text-xs text-[var(--color-muted)] mt-1.5 line-clamp-2">
                          {aula.subtitulo}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <footer className="border-t border-[var(--color-border)] py-8 text-center text-xs text-[var(--color-muted)]">
        <p>
          Tech Class — Material baseado nas aulas do Prof. André Noel (CETAM)
        </p>
      </footer>
    </main>
  );
}
