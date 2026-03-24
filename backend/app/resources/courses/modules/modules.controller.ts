import type { HttpContext } from '@adonisjs/core/http'
import contentService from '#services/content_service'

export default class ListModulesController {
  async handle({ params, response }: HttpContext) {
    const modules = contentService.getModules(params.courseSlug)
    if (!modules) return response.notFound({ message: 'Curso não encontrado.' })
    return response.ok({ modules })
  }
}
