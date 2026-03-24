import type { HttpContext } from '@adonisjs/core/http'
import ContentService from '#services/content_service'

const contentService = new ContentService()

export default class ListLessonsController {
  async handle({ params, response }: HttpContext) {
    const lessons = contentService.getLessons(params.courseSlug)

    if (!lessons) {
      return response.notFound({ message: 'Curso não encontrado.' })
    }

    return response.ok({
      lessons: lessons.map((l) => ({
        slug: l.slug,
        modulo: l.modulo,
        titulo: l.titulo,
        subtitulo: l.subtitulo,
        descricao: l.descricao,
        ordem: l.ordem,
        quizCount: l.quiz.length,
      })),
    })
  }
}
