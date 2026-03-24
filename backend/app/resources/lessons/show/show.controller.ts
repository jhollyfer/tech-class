import type { HttpContext } from '@adonisjs/core/http'
import ContentService from '#services/content_service'

const contentService = new ContentService()

export default class ShowLessonController {
  async handle({ params, response }: HttpContext) {
    const lesson = contentService.getLesson(params.courseSlug, params.lessonSlug)

    if (!lesson) {
      return response.notFound({ message: 'Aula não encontrada.' })
    }

    return response.ok({ lesson })
  }
}
