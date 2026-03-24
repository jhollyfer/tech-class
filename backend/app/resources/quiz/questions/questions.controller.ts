import type { HttpContext } from '@adonisjs/core/http'
import contentService from '#services/content_service'

export default class QuizQuestionsController {
  async handle({ params, response }: HttpContext) {
    const questions = contentService.getQuizQuestions(params.courseSlug, true)

    if (!questions) {
      return response.notFound({ message: 'Curso não encontrado.' })
    }

    return response.ok({
      questionCount: questions.length,
      questions,
    })
  }
}
