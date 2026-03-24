import type { HttpContext } from '@adonisjs/core/http'
import contentService from '#services/content_service'

export default class LessonQuizQuestionsController {
  async handle({ params, response }: HttpContext) {
    const questions = contentService.getLessonQuizQuestions(params.courseSlug, params.lessonSlug)

    if (!questions) {
      return response.notFound({ message: 'Aula não encontrada.' })
    }

    return response.ok({
      questionCount: questions.length,
      questions,
    })
  }
}
