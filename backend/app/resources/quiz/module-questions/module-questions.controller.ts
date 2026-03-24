import type { HttpContext } from '@adonisjs/core/http'
import contentService from '#services/content_service'

export default class ModuleQuizQuestionsController {
  async handle({ params, response }: HttpContext) {
    const moduleName = decodeURIComponent(params.moduleName)
    const questions = contentService.getModuleQuizQuestions(params.courseSlug, moduleName)

    if (!questions) {
      return response.notFound({ message: 'Módulo não encontrado.' })
    }

    return response.ok({
      questionCount: questions.length,
      questions,
    })
  }
}
