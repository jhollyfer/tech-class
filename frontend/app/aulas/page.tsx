import { aulas } from "@/lib/aulas-data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Class — Lógica de Programação",
  description:
    "Aulas interativas de Lógica de Programação com quizzes, simuladores e exercícios práticos.",
};

export default function AulasPage() {
  return (
    <main className="min-h-screen">
      <header className="pt-16 pb-12 px-6 text-center">
        <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-6">
          Lógica de Programação
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Tech Class</h1>
        <p className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
          11 aulas interativas com quizzes, simuladores e exercícios práticos.
          Baseado nas aulas do professor André Noel.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {aulas.map((aula, i) => (
            <Link
              key={aula.slug}
              href={`/aulas/${aula.slug}`}
              className="group block p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--color-muted)] font-mono mb-1">
                    {aula.modulo}
                  </p>
                  <h2 className="font-bold text-sm group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {aula.titulo}
                  </h2>
                  <p className="text-xs text-[var(--color-muted)] mt-1.5 line-clamp-2">
                    {aula.subtitulo}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-(--color-border) py-8 text-center text-xs text-(--color-muted)">
        <p>
          Tech Class — Material baseado nas aulas do Prof. André Noel (CETAM)
        </p>
      </footer>
    </main>
  );
}
