import { combineReducers } from 'redux'
import produce from 'immer'

import {
  APP_LOAD_SUCCESS,
  QUIZ_UPDATE_ANSWER,
  QUIZ_UPDATE_SCORES
} from './actions'

const initalState = {
  answers: [],
  questions: [],
  scores: []
}

export const quizReducer = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case APP_LOAD_SUCCESS:
        const { results } = action.data
        draft.answers = Array.of(results.length)
        draft.questions = results.map(q => [
          q.question,
          q.correct_answer === 'True',
          q.category
        ])
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
