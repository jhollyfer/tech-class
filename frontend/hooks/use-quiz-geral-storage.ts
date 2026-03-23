"use client";

import { useState, useEffect, useCallback } from "react";

export interface Student {
  id: string;
  name: string;
  scores: Record<number, boolean>;
}

interface QuizGeralData {
  students: Student[];
  currentStudentId: string | null;
  currentQuestionIndex: number;
}

const EMPTY: QuizGeralData = {
  students: [],
  currentStudentId: null,
  currentQuestionIndex: 0,
};

function getKey(courseSlug: string) {
  return `quiz-geral:${courseSlug}`;
}

function load(courseSlug: string): QuizGeralData {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(getKey(courseSlug));
    if (!raw) return EMPTY;
    return JSON.parse(raw) as QuizGeralData;
  } catch {
    return EMPTY;
  }
}

function save(courseSlug: string, data: QuizGeralData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(getKey(courseSlug), JSON.stringify(data));
}

export function useQuizGeralStorage(courseSlug: string) {
  const [data, setData] = useState<QuizGeralData>(EMPTY);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setData(load(courseSlug));
    setMounted(true);
  }, [courseSlug]);

  const persist = useCallback(
    (next: QuizGeralData) => {
      setData(next);
      save(courseSlug, next);
    },
    [courseSlug],
  );

  const addStudent = useCallback(
    (name: string) => {
      const student: Student = {
        id: crypto.randomUUID(),
        name: name.trim(),
        scores: {},
      };
      persist({ ...data, students: [...data.students, student] });
    },
    [data, persist],
  );

  const removeStudent = useCallback(
    (id: string) => {
      persist({
        ...data,
        students: data.students.filter((s) => s.id !== id),
        currentStudentId:
          data.currentStudentId === id ? null : data.currentStudentId,
      });
    },
    [data, persist],
  );

  const setCurrentStudent = useCallback(
    (id: string | null) => {
      persist({ ...data, currentStudentId: id, currentQuestionIndex: 0 });
    },
    [data, persist],
  );

  const setCurrentQuestion = useCallback(
    (index: number) => {
      persist({ ...data, currentQuestionIndex: index });
    },
    [data, persist],
  );

  const setScore = useCallback(
    (studentId: string, questionIndex: number, correct: boolean) => {
      persist({
        ...data,
        students: data.students.map((s) =>
          s.id === studentId
            ? { ...s, scores: { ...s.scores, [questionIndex]: correct } }
            : s,
        ),
      });
    },
    [data, persist],
  );

  const resetAll = useCallback(() => {
    persist(EMPTY);
  }, [persist]);

  const resetScores = useCallback(() => {
    persist({
      ...data,
      students: data.students.map((s) => ({ ...s, scores: {} })),
      currentStudentId: null,
      currentQuestionIndex: 0,
    });
  }, [data, persist]);

  return {
    mounted,
    students: data.students,
    currentStudentId: data.currentStudentId,
    currentQuestionIndex: data.currentQuestionIndex,
    addStudent,
    removeStudent,
    setCurrentStudent,
    setCurrentQuestion,
    setScore,
    resetAll,
    resetScores,
  };
}
