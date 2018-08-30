export const APP_LOAD = 'APP_LOAD'
export const APP_LOAD_SUCCESS = 'APP_LOAD_SUCCESS'
export const APP_LOAD_FAILURE = 'APP_LOAD_FAILURE'
export const QUIZ_START = 'QUIZ_START'
export const QUIZ_MARK_CURRENT_ANSWER = 'QUIZ_MARK_CURRENT_ANSWER'
export const QUIZ_UPDATE_ANSWER = 'QUIZ_UPDATE_ANSWER'
export const QUIZ_UPDATE_SCORES = 'QUIZ_UPDATE_SCORES'

export const appLoad = () => ({
  type: APP_LOAD
})

export const appLoadSuccess = data => ({
  type: APP_LOAD_SUCCESS,
  data
})

export const appLoadFailure = error => ({
  type: APP_LOAD_FAILURE,
  error
})

export const quizStart = () => ({
  type: QUIZ_START
})

export const quizMarkCurrentAnswer = value => ({
  type: QUIZ_MARK_CURRENT_ANSWER,
  value
})

export const quizUpdateAnswer = (index, value) => ({
  type: QUIZ_UPDATE_ANSWER,
  index,
  value
})

export const quizUpdateScores = () => ({
  type: QUIZ_UPDATE_SCORES
})
