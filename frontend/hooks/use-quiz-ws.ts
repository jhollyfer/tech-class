"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type {
  ClientMessage,
  ServerMessage,
  StudentInfo,
  QuestionPayload,
  RankingEntry,
} from "@/lib/ws-protocol";

export type Phase =
  | "idle"
  | "lobby"
  | "waiting"
  | "question"
  | "answered"
  | "revealed"
  | "finished";

export type Role = "none" | "teacher" | "student";

export function useQuizWs() {
  const [connected, setConnected] = useState(false);
  const [role, setRole] = useState<Role>("none");
  const [phase, setPhase] = useState<Phase>("idle");
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [students, setStudents] = useState<StudentInfo[]>([]);
  const [currentQuestion, setCurrentQuestion] =
    useState<QuestionPayload | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [myAnswer, setMyAnswer] = useState<number | null>(null);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [answeredStudents, setAnsweredStudents] = useState<string[]>([]);
  const [revealData, setRevealData] = useState<ServerMessage | null>(null);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [myStudentId, setMyStudentId] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);

  const sendMsg = useCallback((msg: ClientMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const wsUrl = isDev
      ? "ws://localhost:3001/ws"
      : `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/ws`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onclose = () => {
      setConnected(false);
    };

    ws.onmessage = (event) => {
      const msg: ServerMessage = JSON.parse(event.data);

      switch (msg.type) {
        case "room-created":
          setRoomCode(msg.roomCode);
          setQuestionCount(msg.questionCount);
          setPhase("lobby");
          break;

        case "joined":
          setMyStudentId(msg.studentId);
          setStudents(msg.students);
          setPhase("waiting");
          break;

        case "student-joined":
          setStudents(msg.students);
          break;

        case "student-left":
          setStudents(msg.students);
          break;

        case "question":
          setCurrentQuestion(msg.question);
          setQuestionIndex(msg.questionIndex);
          setTotalQuestions(msg.totalQuestions);
          setMyAnswer(null);
          setAnsweredCount(0);
          setAnsweredStudents([]);
          setRevealData(null);
          setPhase("question");
          break;

        case "student-answered":
          setAnsweredCount(msg.answeredCount);
          setAnsweredStudents((prev) => [...prev, msg.studentName]);
          break;

        case "revealed":
          setRevealData(msg);
          setPhase("revealed");
          break;

        case "finished":
          setRanking(msg.ranking);
          setPhase("finished");
          break;

        case "error":
          setError(msg.message);
          setTimeout(() => setError(null), 5000);
          break;

        case "room-closed":
          setPhase("idle");
          setRole("none");
          setRoomCode(null);
          setError("O professor encerrou a sala.");
          setTimeout(() => setError(null), 5000);
          break;
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const createRoom = useCallback(
    (courseSlug: string) => {
      setRole("teacher");
      sendMsg({ type: "create-room", courseSlug });
    },
    [sendMsg],
  );

  const joinRoom = useCallback(
    (roomCode: string, name: string) => {
      setRole("student");
      sendMsg({ type: "join-room", roomCode, name });
    },
    [sendMsg],
  );

  const startQuiz = useCallback(() => {
    sendMsg({ type: "start-quiz" });
  }, [sendMsg]);

  const submitAnswer = useCallback(
    (selected: number) => {
      setMyAnswer(selected);
      setPhase("answered");
      sendMsg({ type: "answer", questionIndex, selected });
    },
    [sendMsg, questionIndex],
  );

  const reveal = useCallback(() => {
    sendMsg({ type: "reveal" });
  }, [sendMsg]);

  const nextQuestion = useCallback(() => {
    sendMsg({ type: "next-question" });
  }, [sendMsg]);

  return {
    connected,
    role,
    phase,
    roomCode,
    questionCount,
    students,
    currentQuestion,
    questionIndex,
    totalQuestions,
    myAnswer,
    myStudentId,
    answeredCount,
    answeredStudents,
    revealData,
    ranking,
    error,
    createRoom,
    joinRoom,
    startQuiz,
    submitAnswer,
    reveal,
    nextQuestion,
  };
}
