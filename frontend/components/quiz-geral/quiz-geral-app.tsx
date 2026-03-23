"use client";

import { ArrowLeft, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { useQuizWs } from "@/hooks/use-quiz-ws";
import { LobbyTeacher } from "./lobby-teacher";
import { LobbyStudent } from "./lobby-student";
import { QuestionTeacher } from "./question-teacher";
import { QuestionStudent } from "./question-student";
import { RevealView } from "./reveal-view";
import { ResultsDashboard } from "./results-dashboard";
import type { ServerMessage } from "@/lib/ws-protocol";

interface QuizGeralAppProps {
  courseSlug: string;
  courseLabel: string;
  courseLanguage: string;
  questionCount: number;
}

export function QuizGeralApp({
  courseSlug,
  courseLabel,
  courseLanguage,
  questionCount,
}: QuizGeralAppProps) {
  const ws = useQuizWs();

  return (
    <main className="min-h-screen grid-bg relative">
      {/* Header */}
      <header className="pt-8 sm:pt-12 pb-6 sm:pb-8 px-6 text-center relative z-10">
        <Link
          href={`/${courseSlug}/lessons`}
          className="inline-flex items-center gap-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para aulas
        </Link>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-3">
            {courseLabel} &middot; {courseLanguage}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">Quiz Geral</h1>
          {ws.phase === "idle" && (
            <p className="text-sm text-[var(--color-muted)] mt-1">
              {questionCount} perguntas &middot; Tempo real
            </p>
          )}
        </div>
      </header>

      {/* Error toast */}
      {ws.error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-[var(--color-error)] text-white text-sm font-medium shadow-lg animate-in">
          {ws.error}
        </div>
      )}

      {/* Connection indicator */}
      {!ws.connected && ws.phase !== "idle" && (
        <div className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full bg-[var(--color-error)]/10 text-[var(--color-error)] text-xs font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--color-error)] animate-pulse" />
          Desconectado
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 pb-16 relative z-10">
        {/* Phase: idle - role selection */}
        {ws.phase === "idle" && (
          <div className="max-w-md mx-auto space-y-4">
            <button
              onClick={() => ws.createRoom(courseSlug)}
              disabled={!ws.connected}
              className="w-full p-6 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/5 transition-all cursor-pointer group disabled:opacity-40 disabled:cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-sm">Sou Professor</h3>
                  <p className="text-xs text-[var(--color-muted)]">
                    Criar sala e controlar o quiz
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => ws.joinRoom("", "")}
              disabled={true}
              className="hidden"
            />

            <LobbyStudent
              phase={ws.phase}
              students={ws.students}
              onJoin={ws.joinRoom}
            />
          </div>
        )}

        {/* Phase: lobby - teacher */}
        {ws.phase === "lobby" && ws.role === "teacher" && (
          <LobbyTeacher
            roomCode={ws.roomCode!}
            questionCount={ws.questionCount}
            students={ws.students}
            onStart={ws.startQuiz}
          />
        )}

        {/* Phase: waiting - student */}
        {ws.phase === "waiting" && ws.role === "student" && (
          <LobbyStudent
            phase={ws.phase}
            students={ws.students}
            onJoin={ws.joinRoom}
          />
        )}

        {/* Phase: question - teacher */}
        {ws.phase === "question" && ws.role === "teacher" && ws.currentQuestion && (
          <QuestionTeacher
            question={ws.currentQuestion}
            questionIndex={ws.questionIndex}
            totalQuestions={ws.totalQuestions}
            answeredCount={ws.answeredCount}
            totalStudents={ws.students.length}
            answeredStudents={ws.answeredStudents}
            onReveal={ws.reveal}
          />
        )}

        {/* Phase: question/answered - student */}
        {(ws.phase === "question" || ws.phase === "answered") &&
          ws.role === "student" &&
          ws.currentQuestion && (
            <QuestionStudent
              question={ws.currentQuestion}
              questionIndex={ws.questionIndex}
              totalQuestions={ws.totalQuestions}
              phase={ws.phase}
              myAnswer={ws.myAnswer}
              onAnswer={ws.submitAnswer}
            />
          )}

        {/* Phase: revealed */}
        {ws.phase === "revealed" && ws.revealData && (
          <RevealView
            revealData={ws.revealData as ServerMessage & { type: "revealed" }}
            role={ws.role}
            myStudentId={ws.myStudentId}
            questionIndex={ws.questionIndex}
            totalQuestions={ws.totalQuestions}
            onNext={ws.nextQuestion}
          />
        )}

        {/* Phase: finished */}
        {ws.phase === "finished" && (
          <ResultsDashboard
            ranking={ws.ranking}
            role={ws.role}
            myStudentId={ws.myStudentId}
          />
        )}
      </div>

      <footer className="border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-muted)] relative z-10">
        <p>Tech Class &mdash; Material educacional CETAM</p>
      </footer>
    </main>
  );
}
