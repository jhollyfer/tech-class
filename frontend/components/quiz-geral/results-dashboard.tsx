"use client";

import { Trophy, RotateCcw, ArrowLeft, Medal } from "lucide-react";
import type { Student } from "@/hooks/use-quiz-geral-storage";

interface ResultsDashboardProps {
  students: Student[];
  totalQuestions: number;
  onReset: () => void;
  onBack: () => void;
}

export function ResultsDashboard({
  students,
  totalQuestions,
  onReset,
  onBack,
}: ResultsDashboardProps) {
  const ranked = [...students]
    .map((s) => {
      const acertos = Object.values(s.scores).filter(Boolean).length;
      const respondidas = Object.keys(s.scores).length;
      return { ...s, acertos, respondidas };
    })
    .sort((a, b) => b.acertos - a.acertos);

  const medalColors = [
    "text-yellow-500",
    "text-gray-400",
    "text-amber-700",
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10">
          <Trophy className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-black">Resultados</h2>
        <p className="text-sm text-[var(--color-muted)]">
          Ranking de {students.length}{" "}
          {students.length === 1 ? "aluno" : "alunos"} &middot;{" "}
          {totalQuestions} perguntas
        </p>
      </div>

      {/* Ranking */}
      <div className="space-y-3">
        {ranked.map((student, i) => {
          const pct =
            student.respondidas > 0
              ? Math.round((student.acertos / student.respondidas) * 100)
              : 0;

          return (
            <div
              key={student.id}
              className={`p-5 rounded-2xl border bg-[var(--color-surface)] transition-all ${
                i === 0
                  ? "border-[var(--color-primary)]/40 shadow-lg shadow-[var(--color-primary)]/5"
                  : "border-[var(--color-border)]"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Position */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  {i < 3 ? (
                    <Medal
                      className={`w-7 h-7 ${medalColors[i]}`}
                    />
                  ) : (
                    <span className="font-mono text-lg font-bold text-[var(--color-muted)]">
                      {i + 1}
                    </span>
                  )}
                </div>

                {/* Name + bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm truncate">
                      {student.name}
                    </span>
                    <span className="shrink-0 ml-3 font-mono text-sm font-bold">
                      <span
                        className={
                          pct >= 70
                            ? "text-[var(--color-success)]"
                            : pct >= 50
                              ? "text-[var(--color-warning)]"
                              : "text-[var(--color-error)]"
                        }
                      >
                        {student.acertos}
                      </span>
                      <span className="text-[var(--color-muted)]">
                        /{student.respondidas}
                      </span>
                      <span className="text-[var(--color-muted)] ml-2">
                        ({pct}%)
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--color-border)]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        pct >= 70
                          ? "bg-[var(--color-success)]"
                          : pct >= 50
                            ? "bg-[var(--color-warning)]"
                            : "bg-[var(--color-error)]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-surface)] transition-colors cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
        <button
          onClick={onReset}
          className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Novo Quiz
        </button>
      </div>
    </div>
  );
}
