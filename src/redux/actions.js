export const QUIZ_LOAD = 'QUIZ_LOAD'
export const QUIZ_LOADING = 'QUIZ_LOADING'
export const QUIZ_LOAD_SUCCESS = 'QUIZ_LOAD_SUCCESS'
export const QUIZ_LOAD_FAILURE = 'QUIZ_LOAD_FAILURE'
export const QUIZ_START = 'QUIZ_START'
export const QUIZ_MARK_CURRENT_ANSWER = 'QUIZ_MARK_CURRENT_ANSWER'
export const QUIZ_UPDATE_ANSWER = 'QUIZ_UPDATE_ANSWER'
export const QUIZ_UPDATE_SCORES = 'QUIZ_UPDATE_SCORES'

export const quizLoad = () => ({
  type: QUIZ_LOAD
})

export const quizLoading = () => ({
  type: QUIZ_LOADING
})

export const quizLoadSuccess = data => ({
  type: QUIZ_LOAD_SUCCESS,
  data
})

export const quizLoadFailure = error => ({
  type: QUIZ_LOAD_FAILURE,
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
