import type { WebSocketContext } from 'adonisjs-websocket'
import { handleConnection } from '#services/quiz/quiz_room_manager'

export default class QuizWsController {
  async handle({ ws }: WebSocketContext) {
    handleConnection(ws)
  }
}
