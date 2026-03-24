import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'list_courses': { paramsTuple?: []; params?: {} }
    'list_lessons': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
    'show_lesson': { paramsTuple: [ParamValue,ParamValue]; params: {'courseSlug': ParamValue,'lessonSlug': ParamValue} }
    'quiz_questions': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
  }
  GET: {
    'list_courses': { paramsTuple?: []; params?: {} }
    'list_lessons': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
    'show_lesson': { paramsTuple: [ParamValue,ParamValue]; params: {'courseSlug': ParamValue,'lessonSlug': ParamValue} }
    'quiz_questions': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
  }
  HEAD: {
    'list_courses': { paramsTuple?: []; params?: {} }
    'list_lessons': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
    'show_lesson': { paramsTuple: [ParamValue,ParamValue]; params: {'courseSlug': ParamValue,'lessonSlug': ParamValue} }
    'quiz_questions': { paramsTuple: [ParamValue]; params: {'courseSlug': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}