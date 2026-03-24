import type { HttpContext } from '@adonisjs/core/http'
import contentService from '#services/content_service'

export default class ListCoursesController {
  async handle({ response }: HttpContext) {
    const courses = contentService.getCourses()
    return response.ok({ courses })
  }
}
