import type { WebSocket } from 'adonisjs-websocket'
import type { IQuizDataQuestion } from '#core/entity.core'
import ContentService from '#services/content_service'
import type {
  Room,
  Student,
  ClientInfo,
  ClientMessage,
  RankingEntry,
} from '#services/quiz/quiz_types'

const MAX_ROOMS = 2

const contentService = new ContentService()

const rooms = new Map<string, Room>()
const clients = new Map<string, { ws: WebSocket; info: ClientInfo }>()

function send(ws: WebSocket, data: unknown) {
  if (ws.readyState === ws.OPEN) {
    ws.send(JSON.stringify(data))
  }
}

function getWsById(wsId: string): WebSocket | undefined {
  return clients.get(wsId)?.ws
}

function broadcastToRoom(roomCode: string, data: unknown, excludeWsId?: string) {
  for (const [wsId, client] of clients) {
    if (client.info.roomCode === roomCode && wsId !== excludeWsId) {
      send(client.ws, data)
    }
  }
}

function getStudentList(room: Room) {
  return Array.from(room.students.values()).map((s) => ({
    id: s.id,
    name: s.name,
  }))
}

function generateRoomCode(): string {
  let code: string
  do {
    code = String(Math.floor(1000 + Math.random() * 9000))
  } while (rooms.has(code))
  return code
}

function handleCreateRoom(ws: WebSocket, courseSlug: string) {
  if (rooms.size >= MAX_ROOMS) {
    return send(ws, {
      type: 'error',
      message: 'Limite de salas atingido. Tente novamente mais tarde.',
    })
  }

  const questions = contentService.getQuizQuestions(courseSlug, true)
  if (!questions || questions.length === 0) {
    return send(ws, {
      type: 'error',
      message: 'Nenhuma pergunta encontrada para este curso.',
    })
  }

  const roomCode = generateRoomCode()
  const room: Room = {
    code: roomCode,
    courseSlug,
    teacherWsId: ws.id,
    students: new Map(),
    questions,
    currentQuestionIndex: -1,
    answers: new Map(),
    phase: 'lobby',
  }

  rooms.set(roomCode, room)
  clients.set(ws.id, { ws, info: { roomCode, role: 'teacher' } })

  send(ws, {
    type: 'room-created',
    roomCode,
    questionCount: questions.length,
  })
}

function handleJoinRoom(ws: WebSocket, roomCode: string, name: string) {
  const room = rooms.get(roomCode)
  if (!room) {
    return send(ws, { type: 'error', message: 'Sala não encontrada.' })
  }

  if (room.phase !== 'lobby') {
    return send(ws, { type: 'error', message: 'O quiz já começou.' })
  }

  const trimmed = name.trim()
  if (trimmed.split(/\s+/).length < 2) {
    return send(ws, {
      type: 'error',
      message: 'Digite seu nome completo (nome e sobrenome).',
    })
  }

  if (trimmed.length > 50) {
    return send(ws, { type: 'error', message: 'Nome muito longo (máx 50).' })
  }

  const nameLower = trimmed.toLowerCase()
  for (const s of room.students.values()) {
    if (s.name.toLowerCase() === nameLower) {
      return send(ws, {
        type: 'error',
        message: 'Já existe um aluno com esse nome na sala.',
      })
    }
  }

  const studentId = `s-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const student: Student = { id: studentId, name: trimmed, wsId: ws.id }
  room.students.set(studentId, student)
  room.answers.set(studentId, new Map())
  clients.set(ws.id, { ws, info: { roomCode, role: 'student', studentId } })

  const studentList = getStudentList(room)

  send(ws, {
    type: 'joined',
    studentId,
    students: studentList,
  })

  broadcastToRoom(roomCode, { type: 'student-joined', students: studentList }, ws.id)
}

function handleStartQuiz(ws: WebSocket) {
  const client = clients.get(ws.id)
  if (!client || client.info.role !== 'teacher') return

  const room = rooms.get(client.info.roomCode)
  if (!room || room.phase !== 'lobby') return

  if (room.students.size === 0) {
    return send(ws, { type: 'error', message: 'Nenhum aluno na sala.' })
  }

  room.phase = 'question'
  room.currentQuestionIndex = 0
  sendQuestion(room)
}

function sendQuestion(room: Room) {
  const q = room.questions[room.currentQuestionIndex]

  const teacherWs = getWsById(room.teacherWsId)
  if (teacherWs) {
    send(teacherWs, {
      type: 'question',
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
    })
  }

  for (const student of room.students.values()) {
    const studentWs = getWsById(student.wsId)
    if (studentWs) {
      send(studentWs, {
        type: 'question',
        questionIndex: room.currentQuestionIndex,
        totalQuestions: room.questions.length,
        question: {
          lessonTitulo: q.lessonTitulo,
          lessonDescricao: q.lessonDescricao,
          lessonModulo: q.lessonModulo,
          pergunta: q.pergunta,
          opcoes: q.opcoes,
        },
      })
    }
  }
}

function handleAnswer(ws: WebSocket, questionIndex: number, selected: number) {
  const client = clients.get(ws.id)
  if (!client || client.info.role !== 'student') return

  const room = rooms.get(client.info.roomCode)
  if (!room || room.phase !== 'question') return
  if (questionIndex !== room.currentQuestionIndex) return

  const q = room.questions[questionIndex]
  if (selected < 0 || selected >= q.opcoes.length) return

  const studentId = client.info.studentId!
  const studentAnswers = room.answers.get(studentId)
  if (!studentAnswers || studentAnswers.has(questionIndex)) return

  studentAnswers.set(questionIndex, selected)

  let answeredCount = 0
  for (const [sid] of room.students) {
    const ans = room.answers.get(sid)
    if (ans && ans.has(questionIndex)) answeredCount++
  }

  const student = room.students.get(studentId)
  const teacherWs = getWsById(room.teacherWsId)
  if (teacherWs) {
    send(teacherWs, {
      type: 'student-answered',
      studentId,
      studentName: student ? student.name : '?',
      answeredCount,
      totalStudents: room.students.size,
    })
  }
}

function handleReveal(ws: WebSocket) {
  const client = clients.get(ws.id)
  if (!client || client.info.role !== 'teacher') return

  const room = rooms.get(client.info.roomCode)
  if (!room || room.phase !== 'question') return

  room.phase = 'revealed'
  const qi = room.currentQuestionIndex
  const q = room.questions[qi]

  const results: Record<string, { studentName: string; selected: number; correct: boolean }> = {}
  for (const [sid, student] of room.students) {
    const ans = room.answers.get(sid)
    const selected = ans ? ans.get(qi) : undefined
    results[sid] = {
      studentName: student.name,
      selected: selected !== undefined ? selected : -1,
      correct: selected === q.correta,
    }
  }

  const revealData = {
    type: 'revealed',
    questionIndex: qi,
    correctAnswer: q.correta,
    explicacao: q.explicacao,
    explicacaoErrada: q.explicacaoErrada,
    results,
  }

  const teacherWs = getWsById(room.teacherWsId)
  if (teacherWs) send(teacherWs, revealData)

  for (const student of room.students.values()) {
    const studentWs = getWsById(student.wsId)
    if (studentWs) send(studentWs, revealData)
  }
}

function handleNextQuestion(ws: WebSocket) {
  const client = clients.get(ws.id)
  if (!client || client.info.role !== 'teacher') return

  const room = rooms.get(client.info.roomCode)
  if (!room || room.phase !== 'revealed') return

  const nextIndex = room.currentQuestionIndex + 1
  if (nextIndex >= room.questions.length) {
    room.phase = 'finished'
    const ranking = computeRanking(room)
    const finishData = { type: 'finished', ranking }

    const teacherWs = getWsById(room.teacherWsId)
    if (teacherWs) send(teacherWs, finishData)

    for (const student of room.students.values()) {
      const studentWs = getWsById(student.wsId)
      if (studentWs) send(studentWs, finishData)
    }
    return
  }

  room.currentQuestionIndex = nextIndex
  room.phase = 'question'
  sendQuestion(room)
}

function computeRanking(room: Room): RankingEntry[] {
  const ranking: RankingEntry[] = []
  for (const [sid, student] of room.students) {
    const ans = room.answers.get(sid)
    let correct = 0
    if (ans) {
      for (let i = 0; i < room.questions.length; i++) {
        if (ans.get(i) === room.questions[i].correta) correct++
      }
    }
    ranking.push({
      studentId: sid,
      name: student.name,
      correct,
      total: room.questions.length,
      percentage: Math.round((correct / room.questions.length) * 100),
    })
  }
  return ranking.sort((a, b) => b.correct - a.correct)
}

function destroyRoom(roomCode: string) {
  const room = rooms.get(roomCode)
  if (!room) return

  for (const student of room.students.values()) {
    const studentWs = getWsById(student.wsId)
    if (studentWs) send(studentWs, { type: 'room-closed' })
    clients.delete(student.wsId)
  }
  clients.delete(room.teacherWsId)
  rooms.delete(roomCode)
}

function handleDisconnect(ws: WebSocket) {
  const client = clients.get(ws.id)
  if (!client) return

  const room = rooms.get(client.info.roomCode)
  if (!room) {
    clients.delete(ws.id)
    return
  }

  if (client.info.role === 'teacher') {
    destroyRoom(client.info.roomCode)
  } else if (client.info.role === 'student' && client.info.studentId) {
    room.students.delete(client.info.studentId)
    const studentList = getStudentList(room)
    broadcastToRoom(client.info.roomCode, { type: 'student-left', students: studentList })
    clients.delete(ws.id)
  }
}

export function handleConnection(ws: WebSocket) {
  ws.on('message', (raw) => {
    let msg: ClientMessage
    try {
      msg = JSON.parse(raw.toString())
    } catch {
      return
    }

    switch (msg.type) {
      case 'create-room':
        handleCreateRoom(ws, msg.courseSlug)
        break
      case 'join-room':
        handleJoinRoom(ws, msg.roomCode, msg.name || '')
        break
      case 'start-quiz':
        handleStartQuiz(ws)
        break
      case 'answer':
        handleAnswer(ws, msg.questionIndex, msg.selected)
        break
      case 'reveal':
        handleReveal(ws)
        break
      case 'next-question':
        handleNextQuestion(ws)
        break
    }
  })

  ws.on('close', () => handleDisconnect(ws))
  ws.on('error', () => handleDisconnect(ws))
}
