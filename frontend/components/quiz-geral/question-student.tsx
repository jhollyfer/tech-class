"use client";

import { BookOpen, Loader2 } from "lucide-react";
import type { QuestionPayload } from "@/lib/ws-protocol";
import type { Phase } from "@/hooks/use-quiz-ws";

interface QuestionStudentProps {
  question: QuestionPayload;
  questionIndex: number;
  totalQuestions: number;
  phase: Phase;
  myAnswer: number | null;
  onAnswer: (selected: number) => void;
}

export function QuestionStudent({
  question,
  questionIndex,
  totalQuestions,
  phase,
  myAnswer,
  onAnswer,
}: QuestionStudentProps) {
  const hasAnswered = phase === "answered";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-[var(--color-muted)]">
          {questionIndex + 1}/{totalQuestions}
        </span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-500"
          style={{
            width: `${(questionIndex / totalQuestions) * 100}%`,
          }}
        />
      </div>

      {/* Concept */}
      <div className="p-4 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5">
        <div className="flex items-start gap-3">
          <BookOpen className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary)] font-bold">
              {question.lessonModulo}
            </span>
            <h3 className="font-bold text-sm mt-0.5">
              {question.lessonTitulo}
            </h3>
            <p className="text-xs text-[var(--color-muted)] mt-1">
              {question.lessonDescricao}
            </p>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-4">
        <p className="font-semibold text-base">
          <span className="font-mono text-[var(--color-muted)] mr-2">
            {String(questionIndex + 1).padStart(2, "0")}.
          </span>
          {question.pergunta}
        </p>

        <div className="grid gap-3">
          {question.opcoes.map((opcao, i) => {
            const isSelected = myAnswer === i;
            return (
              <button
                key={i}
                onClick={() => !hasAnswered && onAnswer(i)}
                disabled={hasAnswered}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                  hasAnswered
                    ? isSelected
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                      : "border-[var(--color-border)] opacity-40"
                    : "border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 cursor-pointer active:scale-[0.98]"
                } disabled:cursor-default`}
              >
                <span
                  className={`text-sm ${isSelected ? "font-bold text-[var(--color-primary)]" : ""}`}
                >
                  {opcao}
                </span>
                {hasAnswered && isSelected && (
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                )}
                {!hasAnswered && (
                  <div className="w-6 h-6 rounded-full border-2 border-[var(--color-border)] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {hasAnswered && (
          <div className="text-center p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            <Loader2 className="w-5 h-5 text-[var(--color-primary)] animate-spin mx-auto mb-2" />
            <p className="text-sm text-[var(--color-muted)]">
              Aguardando o professor revelar a resposta...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
