// @ts-nocheck
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const MAX_ROOMS = 2;

const courses = {
  "logica-programacao-typescript": {
    dir: "logica-proramaca-typescript",
    label: "Lógica de Programação",
    language: "TypeScript",
  },
  "logica-programacao-python": {
    dir: "logica-programacao-python",
    label: "Lógica de Programação",
    language: "Python",
  },
  "informatica-avancada-word": {
    dir: "informatica-avancada-word",
    label: "Informática Avançada",
    language: "Word",
  },
};

/** @type {Map<string, Room>} */
const rooms = new Map();

/** @type {Map<import('ws').WebSocket, { roomCode: string, role: 'teacher' | 'student', studentId?: string }>} */
const clients = new Map();

function loadQuestions(courseSlug) {
  const config = courses[courseSlug];
  if (!config) return null;

  const contentDir = path.join(process.cwd(), "content", config.dir);
  if (!fs.existsSync(contentDir)) return null;

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const lessons = files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(contentDir, filename), "utf8");
      const { data } = matter(raw);
      return {
        titulo: data.titulo || "",
        descricao: data.descricao || "",
        modulo: data.modulo || "",
        ordem: data.ordem || 0,
        quiz: data.quiz || [],
      };
    })
    .sort((a, b) => a.ordem - b.ordem);

  const questions = [];
  for (const lesson of lessons) {
    for (const q of lesson.quiz) {
      questions.push({
        lessonTitulo: lesson.titulo,
        lessonDescricao: lesson.descricao,
        lessonModulo: lesson.modulo,
        pergunta: q.pergunta,
        opcoes: q.opcoes,
        correta: q.correta,
        explicacao: q.explicacao,
        explicacaoErrada: q.explicacaoErrada,
      });
    }
  }
  return questions;
}

function generateRoomCode() {
  let code;
  do {
    code = String(Math.floor(1000 + Math.random() * 9000));
  } while (rooms.has(code));
  return code;
}

function send(ws, data) {
  if (ws.readyState === 1) {
    ws.send(JSON.stringify(data));
  }
}

function broadcastToRoom(roomCode, data, excludeWs) {
  for (const [ws, info] of clients) {
    if (info.roomCode === roomCode && ws !== excludeWs) {
      send(ws, data);
    }
  }
}

function getStudentList(room) {
  return Array.from(room.students.values()).map((s) => ({
    id: s.id,
    name: s.name,
  }));
}

function handleCreateRoom(ws, courseSlug) {
  if (rooms.size >= MAX_ROOMS) {
    return send(ws, {
      type: "error",
      message: "Limite de salas atingido. Tente novamente mais tarde.",
    });
  }

  const questions = loadQuestions(courseSlug);
  if (!questions || questions.length === 0) {
    return send(ws, {
      type: "error",
      message: "Nenhuma pergunta encontrada para este curso.",
    });
  }

  const roomCode = generateRoomCode();
  const room = {
    code: roomCode,
    courseSlug,
    teacherWs: ws,
    students: new Map(),
    questions,
    currentQuestionIndex: -1,
    answers: new Map(),
    phase: "lobby",
  };

  rooms.set(roomCode, room);
  clients.set(ws, { roomCode, role: "teacher" });

  send(ws, {
    type: "room-created",
    roomCode,
    questionCount: questions.length,
  });
}

function handleJoinRoom(ws, roomCode, name) {
  const room = rooms.get(roomCode);
  if (!room) {
    return send(ws, { type: "error", message: "Sala não encontrada." });
  }

  if (room.phase !== "lobby") {
    return send(ws, { type: "error", message: "O quiz já começou." });
  }

  const trimmed = name.trim();
  if (trimmed.split(/\s+/).length < 2) {
    return send(ws, {
      type: "error",
      message: "Digite seu nome completo (nome e sobrenome).",
    });
  }

  if (trimmed.length > 50) {
    return send(ws, { type: "error", message: "Nome muito longo (máx 50)." });
  }

  const nameLower = trimmed.toLowerCase();
  for (const s of room.students.values()) {
    if (s.name.toLowerCase() === nameLower) {
      return send(ws, {
        type: "error",
        message: "Já existe um aluno com esse nome na sala.",
      });
    }
  }

  const studentId = `s-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  room.students.set(studentId, { id: studentId, name: trimmed, ws });
  room.answers.set(studentId, new Map());
  clients.set(ws, { roomCode, role: "student", studentId });

  const studentList = getStudentList(room);

  send(ws, {
    type: "joined",
    studentId,
    students: studentList,
  });

  broadcastToRoom(roomCode, { type: "student-joined", students: studentList }, ws);
}

function handleStartQuiz(ws) {
  const info = clients.get(ws);
  if (!info || info.role !== "teacher") return;

  const room = rooms.get(info.roomCode);
  if (!room || room.phase !== "lobby") return;
  if (room.students.size === 0) {
    return send(ws, {
      type: "error",
      message: "Nenhum aluno na sala.",
    });
  }

  room.phase = "question";
  room.currentQuestionIndex = 0;
  sendQuestion(room);
}

function sendQuestion(room) {
  const q = room.questions[room.currentQuestionIndex];
  const questionForTeacher = {
    type: "question",
    questionIndex: room.currentQuestionIndex,
    totalQuestions: room.questions.length,
    question: {
      lessonTitulo: q.lessonTitulo,
      lessonDescricao: q.lessonDescricao,
      lessonModulo: q.lessonModulo,
      pergunta: q.pergunta,
      opcoes: q.opcoes,
      correta: q.correta,
    },
  };

  const questionForStudent = {
    type: "question",
    questionIndex: room.currentQuestionIndex,
    totalQuestions: room.questions.length,
    question: {
      lessonTitulo: q.lessonTitulo,
      lessonDescricao: q.lessonDescricao,
      lessonModulo: q.lessonModulo,
      pergunta: q.pergunta,
      opcoes: q.opcoes,
    },
  };

  send(room.teacherWs, questionForTeacher);
  for (const student of room.students.values()) {
    send(student.ws, questionForStudent);
  }
}

function handleAnswer(ws, questionIndex, selected) {
  const info = clients.get(ws);
  if (!info || info.role !== "student") return;

  const room = rooms.get(info.roomCode);
  if (!room || room.phase !== "question") return;
  if (questionIndex !== room.currentQuestionIndex) return;

  const q = room.questions[questionIndex];
  if (selected < 0 || selected >= q.opcoes.length) return;

  const studentAnswers = room.answers.get(info.studentId);
  if (!studentAnswers || studentAnswers.has(questionIndex)) return;

  studentAnswers.set(questionIndex, selected);

  let answeredCount = 0;
  for (const [sid] of room.students) {
    const ans = room.answers.get(sid);
    if (ans && ans.has(questionIndex)) answeredCount++;
  }

  const student = room.students.get(info.studentId);
  send(room.teacherWs, {
    type: "student-answered",
    studentId: info.studentId,
    studentName: student ? student.name : "?",
    answeredCount,
    totalStudents: room.students.size,
  });
}

function handleReveal(ws) {
  const info = clients.get(ws);
  if (!info || info.role !== "teacher") return;

  const room = rooms.get(info.roomCode);
  if (!room || room.phase !== "question") return;

  room.phase = "revealed";
  const qi = room.currentQuestionIndex;
  const q = room.questions[qi];

  const results = {};
  for (const [sid, student] of room.students) {
    const ans = room.answers.get(sid);
    const selected = ans ? ans.get(qi) : undefined;
    results[sid] = {
      studentName: student.name,
      selected: selected !== undefined ? selected : -1,
      correct: selected === q.correta,
    };
  }

  const revealData = {
    type: "revealed",
    questionIndex: qi,
    correctAnswer: q.correta,
    explicacao: q.explicacao,
    explicacaoErrada: q.explicacaoErrada,
    results,
  };

  send(room.teacherWs, revealData);
  for (const student of room.students.values()) {
    send(student.ws, revealData);
  }
}

function handleNextQuestion(ws) {
  const info = clients.get(ws);
  if (!info || info.role !== "teacher") return;

  const room = rooms.get(info.roomCode);
  if (!room || room.phase !== "revealed") return;

  const nextIndex = room.currentQuestionIndex + 1;
  if (nextIndex >= room.questions.length) {
    room.phase = "finished";
    const ranking = computeRanking(room);
    const finishData = { type: "finished", ranking };
    send(room.teacherWs, finishData);
    for (const student of room.students.values()) {
      send(student.ws, finishData);
    }
    return;
  }

  room.currentQuestionIndex = nextIndex;
  room.phase = "question";
  sendQuestion(room);
}

function computeRanking(room) {
  const ranking = [];
  for (const [sid, student] of room.students) {
    const ans = room.answers.get(sid);
    let correct = 0;
    if (ans) {
      for (let i = 0; i < room.questions.length; i++) {
        if (ans.get(i) === room.questions[i].correta) correct++;
      }
    }
    ranking.push({
      studentId: sid,
      name: student.name,
      correct,
      total: room.questions.length,
      percentage: Math.round((correct / room.questions.length) * 100),
    });
  }
  return ranking.sort((a, b) => b.correct - a.correct);
}

function destroyRoom(roomCode) {
  const room = rooms.get(roomCode);
  if (!room) return;

  for (const student of room.students.values()) {
    send(student.ws, { type: "room-closed" });
    clients.delete(student.ws);
  }
  clients.delete(room.teacherWs);
  rooms.delete(roomCode);
}

function handleDisconnect(ws) {
  const info = clients.get(ws);
  if (!info) return;

  const room = rooms.get(info.roomCode);
  if (!room) {
    clients.delete(ws);
    return;
  }

  if (info.role === "teacher") {
    destroyRoom(info.roomCode);
  } else if (info.role === "student" && info.studentId) {
    room.students.delete(info.studentId);
    const studentList = getStudentList(room);
    broadcastToRoom(info.roomCode, {
      type: "student-left",
      students: studentList,
    });
    clients.delete(ws);
  }
}

function handleConnection(ws) {
  // Heartbeat
  ws.isAlive = true;
  ws.on("pong", () => {
    ws.isAlive = true;
  });

  ws.on("message", (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return;
    }

    switch (msg.type) {
      case "create-room":
        handleCreateRoom(ws, msg.courseSlug);
        break;
      case "join-room":
        handleJoinRoom(ws, msg.roomCode, msg.name || "");
        break;
      case "start-quiz":
        handleStartQuiz(ws);
        break;
      case "answer":
        handleAnswer(ws, msg.questionIndex, msg.selected);
        break;
      case "reveal":
        handleReveal(ws);
        break;
      case "next-question":
        handleNextQuestion(ws);
        break;
    }
  });

  ws.on("close", () => handleDisconnect(ws));
  ws.on("error", () => handleDisconnect(ws));
}

// Heartbeat interval
function startHeartbeat(wss) {
  setInterval(() => {
    wss.clients.forEach((ws) => {
      if (ws.isAlive === false) {
        handleDisconnect(ws);
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    });
  }, 25000);
}

module.exports = { handleConnection, startHeartbeat };
