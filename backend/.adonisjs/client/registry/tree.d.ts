/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  listCourses: typeof routes['list_courses']
  listLessons: typeof routes['list_lessons']
  showLesson: typeof routes['show_lesson']
  quizQuestions: typeof routes['quiz_questions']
}
