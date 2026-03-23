"use client";

import { useState } from "react";
import { ArrowLeft, ChevronRight, Users } from "lucide-react";
import Link from "next/link";
import { useQuizGeralStorage } from "@/hooks/use-quiz-geral-storage";
import { StudentManager } from "./student-manager";
import { QuestionCard } from "./question-card";
import { ResultsDashboard } from "./results-dashboard";
import type { QuizGeralQuestion } from "@/app/[course]/quiz-geral/page";

type Phase = "students" | "select" | "quiz" | "student-done" | "results";

interface QuizGeralAppProps {
  questions: QuizGeralQuestion[];
  courseSlug: string;
  courseLabel: string;
  courseLanguage: string;
}

export function QuizGeralApp({
  questions,
  courseSlug,
  courseLabel,
  courseLanguage,
}: QuizGeralAppProps) {
  const storage = useQuizGeralStorage(courseSlug);
  const [phase, setPhase] = useState<Phase>("students");

  if (!storage.mounted) {
    return (
      <main className="min-h-screen grid-bg flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  const currentStudent = storage.students.find(
    (s) => s.id === storage.currentStudentId,
  );

  const completedStudents = storage.students.filter(
    (s) => Object.keys(s.scores).length === questions.length,
  );

  const pendingStudents = storage.students.filter(
    (s) => Object.keys(s.scores).length < questions.length,
  );

  function handleStartQuiz() {
    if (storage.students.length === 0) return;
    setPhase("select");
  }

  function handleSelectStudent(id: string) {
    const student = storage.students.find((s) => s.id === id);
    if (!student) return;
    const answered = Object.keys(student.scores).length;
    storage.setCurrentStudent(id);
    storage.setCurrentQuestion(answered);
    setPhase("quiz");
  }

  function handleAnswer(correct: boolean) {
    if (!storage.currentStudentId) return;
    storage.setScore(
      storage.currentStudentId,
      storage.currentQuestionIndex,
      correct,
    );
    const nextIndex = storage.currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      setPhase("student-done");
    } else {
      storage.setCurrentQuestion(nextIndex);
    }
  }

  function handleReset() {
    storage.resetAll();
    setPhase("students");
  }

  return (
    <main className="min-h-screen grid-bg relative">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center relative z-10">
        <Link
          href={`/${courseSlug}/lessons`}
          className="inline-flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para aulas
        </Link>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-4">
            {courseLabel} &middot; {courseLanguage}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">Quiz Geral</h1>
          <p className="text-sm text-[var(--color-muted)] mt-2">
            {questions.length} perguntas de todo o curso
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-16 relative z-10">
        {/* Phase: Students */}
        {phase === "students" && (
          <StudentManager
            students={storage.students}
            onAdd={storage.addStudent}
            onRemove={storage.removeStudent}
            onStart={handleStartQuiz}
            totalQuestions={questions.length}
          />
        )}

        {/* Phase: Select student */}
        {phase === "select" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10">
                <Users className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-black">Selecionar Aluno</h2>
            </div>

            {/* Pending */}
            {pendingStudents.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-2">
                  Pendentes ({pendingStudents.length})
                </p>
                {pendingStudents.map((student) => {
                  const answered = Object.keys(student.scores).length;
                  return (
                    <button
                      key={student.id}
                      onClick={() => handleSelectStudent(student.id)}
                      className="w-full text-left p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-xs font-bold">
                          {student.name.charAt(0).toUpperCase()}
                        </span>
                        <div>
                          <span className="font-medium text-sm">
                            {student.name}
                          </span>
                          {answered > 0 && (
                            <span className="text-xs text-[var(--color-muted)] ml-2">
                              ({answered}/{questions.length} respondidas)
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Completed */}
            {completedStudents.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-2">
                  Concluídos ({completedStudents.length})
                </p>
                {completedStudents.map((student) => {
                  const acertos = Object.values(student.scores).filter(
                    Boolean,
                  ).length;
                  return (
                    <div
                      key={student.id}
                      className="w-full p-4 rounded-xl border border-[var(--color-success)]/20 bg-[var(--color-success)]/5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-success)]/10 text-[var(--color-success)] font-mono text-xs font-bold">
                          ✓
                        </span>
                        <span className="font-medium text-sm">
                          {student.name}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-[var(--color-success)]">
                        {acertos}/{questions.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setPhase("students")}
                className="px-6 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-surface)] transition-colors cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Editar Alunos
              </button>
              {completedStudents.length > 0 && (
                <button
                  onClick={() => setPhase("results")}
                  className="px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"
                >
                  Ver Resultados
                </button>
              )}
            </div>
          </div>
        )}

        {/* Phase: Quiz */}
        {phase === "quiz" && currentStudent && (
          <QuestionCard
            key={`${currentStudent.id}-${storage.currentQuestionIndex}`}
            question={questions[storage.currentQuestionIndex]}
            questionNumber={storage.currentQuestionIndex + 1}
            totalQuestions={questions.length}
            studentName={currentStudent.name}
            onAnswer={handleAnswer}
          />
        )}

        {/* Phase: Student done */}
        {phase === "student-done" && currentStudent && (
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="p-8 rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
              <p className="text-4xl font-black text-[var(--color-primary)]">
                {Object.values(currentStudent.scores).filter(Boolean).length}/
                {questions.length}
              </p>
              <p className="text-lg font-bold mt-2">{currentStudent.name}</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                {Object.values(currentStudent.scores).filter(Boolean).length ===
                questions.length
                  ? "Perfeito! Acertou tudo!"
                  : Object.values(currentStudent.scores).filter(Boolean)
                        .length >=
                      questions.length / 2
                    ? "Bom trabalho!"
                    : "Precisa estudar mais."}
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setPhase("select")}
                className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"
              >
                {pendingStudents.length > 1
                  ? "Próximo Aluno"
                  : "Ver Resultados Gerais"}
              </button>
            </div>
          </div>
        )}

        {/* Phase: Results */}
        {phase === "results" && (
          <ResultsDashboard
            students={storage.students}
            totalQuestions={questions.length}
            onReset={handleReset}
            onBack={() => setPhase("select")}
          />
        )}
      </div>

      <footer className="border-t border-[var(--color-border)] py-8 text-center text-xs text-[var(--color-muted)] relative z-10">
        <p>Tech Class &mdash; Material educacional CETAM</p>
      </footer>
    </main>
  );
}
