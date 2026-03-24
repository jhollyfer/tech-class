"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { io, type Socket } from "socket.io-client";
import type {
  ClientMessage,
  ServerMessage,
  RevealedMessage,
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
  const [revealData, setRevealData] = useState<RevealedMessage | null>(null);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [myStudentId, setMyStudentId] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const roleRef = useRef<Role>("none");
  const roomCodeRef = useRef<string | null>(null);
  const myStudentIdRef = useRef<string | null>(null);

  // Keep refs in sync with state
  useEffect(() => { roleRef.current = role; }, [role]);
  useEffect(() => { roomCodeRef.current = roomCode; }, [roomCode]);
  useEffect(() => { myStudentIdRef.current = myStudentId; }, [myStudentId]);

  const sendMsg = useCallback((msg: ClientMessage) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("message", msg);
    }
  }, []);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const url = process.env.NEXT_PUBLIC_WS_URL
      ?? (isDev ? "http://localhost:3333" : window.location.origin);

    const socket = io(url, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      setConnected(true);
      // Auto-rejoin if student was in a room
      if (
        roleRef.current === "student" &&
        roomCodeRef.current &&
        myStudentIdRef.current
      ) {
        socket.emit("message", {
          type: "rejoin-room",
          roomCode: roomCodeRef.current,
          studentId: myStudentIdRef.current,
        });
      }
    });

    socket.on("disconnect", () => setConnected(false));

    socket.on("message", (msg: ServerMessage) => {
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

        case "rejoined":
          setMyStudentId(msg.studentId);
          setStudents(msg.students);
          if (msg.phase === "question" && msg.question) {
            setCurrentQuestion(msg.question);
            setQuestionIndex(msg.questionIndex!);
            setTotalQuestions(msg.totalQuestions!);
            setMyAnswer(null);
            setPhase("question");
          } else if (msg.phase === "revealed") {
            // No reveal data available on rejoin — show waiting state
            setPhase("waiting");
          } else if (msg.phase === "lobby") {
            setPhase("waiting");
          } else if (msg.phase === "finished") {
            setPhase("finished");
          }
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
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const createRoom = useCallback(
    (courseSlug: string, opts?: { moduleName?: string; lessonSlug?: string }) => {
      setRole("teacher");
      sendMsg({ type: "create-room", courseSlug, ...opts });
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
