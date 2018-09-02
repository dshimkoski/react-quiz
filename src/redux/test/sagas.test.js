import fetch from 'jest-fetch-mock'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { onLocationChanged, LOCATION_CHANGE } from 'connected-react-router/lib/actions'
import { watchQuizLoad, runQuiz } from '../sagas'
import { getQuestions } from '../selectors'
import {
  quizLoad,
  quizLoadFailure,
  quizLoadSuccess,
  quizStart,
  quizMarkCurrentAnswer,
  quizUpdateAnswer,
  quizUpdateScores,
  QUIZ_MARK_CURRENT_ANSWER
} from '../actions'

describe('app load', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('loads initial data', () => {
    const data = { results: [] }
    fetch.mockResponseOnce(JSON.stringify(data))
    return expectSaga(watchQuizLoad)
      .provide([[call(fetch), data]])
      .put(quizLoadSuccess(data))
      .dispatch(quizLoad())
      .silentRun()
  })

  it('handles load error', () => {
    const error = new Error('Bonk!')
    fetch.mockRejectOnce(error)
    return expectSaga(watchQuizLoad)
      .provide([[call(fetch)]])
      .put(quizLoadFailure(error))
      .dispatch(quizLoad())
      .silentRun()
  })

  it('runs the quiz', () => {
    testSaga(runQuiz, quizStart())
      .next()
      .select(getQuestions)
      .next([1, 2])
      // advance to first question
      .put(push('/card/0'))
      .next()
      // mark first answer
      .take([ QUIZ_MARK_CURRENT_ANSWER, LOCATION_CHANGE ])
      .next(quizMarkCurrentAnswer(true))
      .put(quizUpdateAnswer(0, true))
      .next()
      // advance to next question
      .put(push('/card/1'))
      .next()
      // simulate back button press
      .take([ QUIZ_MARK_CURRENT_ANSWER, LOCATION_CHANGE ])
      .next(onLocationChanged('/card/0', 'POP'))
      .put(push('/card/0'))
      .next()
      // update first answer
      .take([ QUIZ_MARK_CURRENT_ANSWER, LOCATION_CHANGE ])
      .next(quizMarkCurrentAnswer(false))
      .put(quizUpdateAnswer(0, false))
      .next()
      // advance to next question
      .put(push('/card/1'))
      .next()
      .take([ QUIZ_MARK_CURRENT_ANSWER, LOCATION_CHANGE ])
      .next(quizMarkCurrentAnswer(false))
      .put(quizUpdateAnswer(1, false))
      // calculate and display scores
      .next()
      .put(quizUpdateScores())
      .next()
      .put(push('/results'))
      .next()
      .isDone()
  })
})
