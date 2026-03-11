import { getAllLessons } from "@/lib/lessons";
import type { Lesson } from "@/lib/lessons";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Layers, Infinity, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Class — Lógica de Programação",
  description:
    "22 aulas interativas de Lógica de Programação com quizzes e exercícios práticos.",
};

function groupByModulo(lessons: Lesson[]) {
  const groups: Record<string, Lesson[]> = {};
  for (const lesson of lessons) {
    if (!groups[lesson.modulo]) groups[lesson.modulo] = [];
    groups[lesson.modulo].push(lesson);
  }
  return Object.entries(groups);
}

export default function AulasPage() {
  const lessons = getAllLessons();
  const modulos = groupByModulo(lessons);
  let aulaIndex = 0;

  return (
    <main className="min-h-screen grid-bg relative">
      <header className="pt-20 pb-16 px-6 text-center relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-6">
          Lógica de Programação
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">Aulas</h1>
        <p className="text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Domine lógica de programação com aulas interativas, quizzes práticos e exercícios que constroem sua base de conhecimento.
        </p>

        {/* Stats card */}
        <div className="max-w-2xl mx-auto rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <span className="text-2xl sm:text-3xl font-mono font-black text-[var(--color-foreground)]">
                {lessons.length}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-medium uppercase tracking-wider">
                Aulas
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-success)]/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-[var(--color-success)]" />
              </div>
              <span className="text-2xl sm:text-3xl font-mono font-black text-[var(--color-foreground)]">
                {modulos.length}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-medium uppercase tracking-wider">
                Módulos
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-warning)]/10 flex items-center justify-center">
                <Infinity className="w-5 h-5 text-[var(--color-warning)]" />
              </div>
              <span className="text-2xl sm:text-3xl font-mono font-black text-[var(--color-foreground)]">
                &infin;
              </span>
              <span className="text-xs text-[var(--color-muted)] font-medium uppercase tracking-wider">
                Prática
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-16 space-y-12 relative z-10">
        {modulos.map(([modulo, aulasDoModulo]) => (
          <section key={modulo}>
            <div className="flex items-center gap-3 mb-5">
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
                    className="group block p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-sm font-bold group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-sm group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                          {aula.titulo}
                        </h3>
                        <p className="text-xs text-[var(--color-muted)] mt-1.5 line-clamp-2">
                          {aula.subtitulo}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--color-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <footer className="border-t border-[var(--color-border)] py-8 text-center text-xs text-[var(--color-muted)] relative z-10">
        <p>
          Tech Class — Material educacional CETAM
        </p>
      </footer>
    </main>
  );
}
