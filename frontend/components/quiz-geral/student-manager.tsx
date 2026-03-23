"use client";

import { useState } from "react";
import { UserPlus, X, Users, Play } from "lucide-react";
import type { Student } from "@/hooks/use-quiz-geral-storage";

interface StudentManagerProps {
  students: Student[];
  onAdd: (name: string) => void;
  onRemove: (id: string) => void;
  onStart: () => void;
  totalQuestions: number;
}

export function StudentManager({
  students,
  onAdd,
  onRemove,
  onStart,
  totalQuestions,
}: StudentManagerProps) {
  const [name, setName] = useState("");

  function handleAdd() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10">
          <Users className="w-8 h-8 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-black">Gerenciar Alunos</h2>
        <p className="text-sm text-[var(--color-muted)]">
          Adicione os alunos e inicie o quiz com{" "}
          <span className="font-bold text-[var(--color-foreground)]">
            {totalQuestions}
          </span>{" "}
          perguntas
        </p>
      </div>

      {/* Add student */}
      <div className="flex gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Nome do aluno..."
          className="flex-1 px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
        />
        <button
          onClick={handleAdd}
          disabled={!name.trim()}
          className="px-5 py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer disabled:opacity-40 disabled:cursor-default flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Adicionar
        </button>
      </div>

      {/* Student list */}
      {students.length > 0 && (
        <div className="space-y-2">
          {students.map((student, i) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-sm">{student.name}</span>
              </div>
              <button
                onClick={() => onRemove(student.id)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--color-error)]/10 text-[var(--color-muted)] hover:text-[var(--color-error)] transition-colors cursor-pointer"
                aria-label={`Remover ${student.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Start button */}
      <div className="text-center pt-4">
        <button
          onClick={onStart}
          disabled={students.length === 0}
          className="px-10 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-bold text-sm hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg disabled:opacity-40 disabled:cursor-default disabled:transform-none disabled:shadow-none flex items-center gap-3 mx-auto"
        >
          <Play className="w-5 h-5" />
          Iniciar Quiz
        </button>
        {students.length === 0 && (
          <p className="text-xs text-[var(--color-muted)] mt-3">
            Adicione pelo menos um aluno para iniciar
          </p>
        )}
      </div>
    </div>
  );
}
