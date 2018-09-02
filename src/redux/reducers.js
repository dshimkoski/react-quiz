import { combineReducers } from 'redux'
import produce from 'immer'

import {
  QUIZ_LOADING,
  QUIZ_LOAD_SUCCESS,
  QUIZ_LOAD_FAILURE,
  QUIZ_UPDATE_ANSWER,
  QUIZ_UPDATE_SCORES
} from './actions'

const initalState = {
  isError: false,
  isLoading: false,
  answers: [],
  questions: [],
  scores: []
}

export const quizReducer = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case QUIZ_LOADING:
        draft.isError = false
        draft.isLoading = true
        break
      case QUIZ_LOAD_SUCCESS:
        const { results } = action.data
        draft.isError = false
        draft.isLoading = false
        draft.answers = Array.of(results.length)
        draft.questions = results.map(q => [
          q.question,
          q.correct_answer === 'True',
          q.category
        ])
        break
      case QUIZ_LOAD_FAILURE:
        draft.isError = true
        draft.isLoading = false
        break
      case QUIZ_UPDATE_ANSWER:
        draft.answers[action.index] = action.value
        break
      case QUIZ_UPDATE_SCORES:
        draft.scores = state.questions.map(
          ([ , isTrue ], i) => state.answers[i] === isTrue
        )
        break
    }
  })

const rootReducer = combineReducers({
  quiz: quizReducer
})

export default rootReducer
