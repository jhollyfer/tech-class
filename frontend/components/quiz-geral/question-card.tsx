"use client";

import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  BookOpen,
  Eye,
  EyeOff,
} from "lucide-react";
import type { QuizGeralQuestion } from "@/app/[course]/quiz-geral/page";

interface QuestionCardProps {
  question: QuizGeralQuestion;
  questionNumber: number;
  totalQuestions: number;
  studentName: string;
  onAnswer: (correct: boolean) => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  studentName,
  onAnswer,
}: QuestionCardProps) {
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleMark(correct: boolean) {
    setWasCorrect(correct);
    setAnswered(true);
  }

  function handleNext() {
    onAnswer(wasCorrect);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--color-muted)]">
          Aluno:{" "}
          <span className="text-[var(--color-foreground)] font-bold">
            {studentName}
          </span>
        </span>
        <span className="text-sm font-mono text-[var(--color-muted)]">
          {questionNumber}/{totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-500"
          style={{
            width: `${((questionNumber - 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>

      {/* Concept section */}
      <div className="p-5 rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary)] font-bold">
              {question.lessonModulo}
            </span>
            <h3 className="font-bold text-base mt-0.5">
              {question.lessonTitulo}
            </h3>
          </div>
        </div>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed pl-12">
          {question.lessonDescricao}
        </p>
      </div>

      {/* Question */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="font-semibold text-base mb-6">
          <span className="font-mono text-[var(--color-muted)] mr-2">
            {String(questionNumber).padStart(2, "0")}.
          </span>
          {question.pergunta}
        </p>

        <div className="grid gap-3">
          {question.opcoes.map((opcao, i) => {
            const isCorrect = i === question.correta;
            return (
              <div
                key={i}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                  answered
                    ? isCorrect
                      ? "border-[var(--color-success)] bg-[var(--color-success)]/5"
                      : "border-[var(--color-border)] opacity-50"
                    : showAnswer && isCorrect
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : "border-[var(--color-border)]"
                }`}
              >
                <span
                  className={`text-sm ${
                    answered && isCorrect
                      ? "font-bold text-[var(--color-success)]"
                      : ""
                  }`}
                >
                  {opcao}
                </span>
                {answered && isCorrect && (
                  <div className="w-6 h-6 rounded-full bg-[var(--color-success)] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                {showAnswer && !answered && isCorrect && (
                  <span className="text-[10px] font-mono font-bold text-[var(--color-primary)] uppercase">
                    Correta
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Show answer toggle (for teacher) */}
        {!answered && (
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="mt-4 flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            {showAnswer ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
            {showAnswer ? "Ocultar resposta" : "Ver resposta"}
          </button>
        )}

        {/* Feedback after marking */}
        {answered && (
          <div
            className={`mt-5 p-4 rounded-xl border-l-4 ${
              wasCorrect
                ? "border-[var(--color-success)] bg-[var(--color-success)]/5"
                : "border-[var(--color-error)] bg-[var(--color-error)]/5"
            }`}
          >
            <p className="text-sm leading-relaxed">
              {wasCorrect ? (
                <span className="text-[var(--color-success)]">
                  {question.explicacao}
                </span>
              ) : (
                <span className="text-[var(--color-error)]">
                  {question.explicacaoErrada}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4">
        {!answered ? (
          <>
            <button
              onClick={() => handleMark(true)}
              className="flex-1 max-w-48 py-4 rounded-2xl bg-[var(--color-success)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Acertou
            </button>
            <button
              onClick={() => handleMark(false)}
              className="flex-1 max-w-48 py-4 rounded-2xl bg-[var(--color-error)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              Errou
            </button>
          </>
        ) : (
          <button
            onClick={handleNext}
            className="px-10 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg flex items-center gap-2"
          >
            {questionNumber < totalQuestions ? "Próxima Pergunta" : "Ver Resultado"}
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
