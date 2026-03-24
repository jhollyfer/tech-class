import type { HttpContext } from '@adonisjs/core/http'
import ContentService from '#services/content_service'

const contentService = new ContentService()

export default class ListCoursesController {
  async handle({ response }: HttpContext) {
    const courses = contentService.getCourses()
    return response.ok({ courses })
  }
}
