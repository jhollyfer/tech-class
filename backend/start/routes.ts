/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// ─── Health ──────────────────────────────────────────────────────────────────

router.get('/health', async ({ response }) => {
  return response.ok({ status: 'ok' })
})

// ─── Content API ─────────────────────────────────────────────────────────────

const ListCoursesController = () => import('#resources/courses/list/list.controller')
const ListLessonsController = () => import('#resources/lessons/list/list.controller')
const ShowLessonController = () => import('#resources/lessons/show/show.controller')
const QuizQuestionsController = () => import('#resources/quiz/questions/questions.controller')

router
  .group(() => {
    router.get('courses', [ListCoursesController])
    router.get('courses/:courseSlug/lessons', [ListLessonsController])
    router.get('courses/:courseSlug/lessons/:lessonSlug', [ShowLessonController])
    router.get('courses/:courseSlug/quiz-questions', [QuizQuestionsController])
  })
  .prefix('/api')

// ─── WebSocket ───────────────────────────────────────────────────────────────

const QuizWsController = () => import('#resources/quiz/ws/ws.controller')

router.ws('/ws', [QuizWsController, 'handle'])
