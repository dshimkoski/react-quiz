import { all, call, put, select, take, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOCATION_CHANGE } from 'connected-react-router/lib/actions'
import { getQuestions } from './selectors'
import {
  QUIZ_LOAD,
  QUIZ_START,
  QUIZ_MARK_CURRENT_ANSWER,
  quizLoading,
  quizLoadSuccess,
  quizLoadFailure,
  quizStart,
  quizUpdateAnswer,
  quizUpdateScores
} from './actions'

export function * watchQuizLoad () {
  yield takeEvery(QUIZ_LOAD, loadQuiz)
}

export function * watchQuizStart () {
  yield takeEvery(QUIZ_START, runQuiz)
}

export function * loadQuiz () {
  try {
    yield put(quizLoading())
    const res = yield call(fetch, process.env.QUIZ_LOAD_URL)
    if (!res.ok) {
      throw res
    }
    const data = yield call([res, res.json])
    yield put(quizLoadSuccess(data))
    yield put(quizStart())
  } catch (err) {
    yield put(quizLoadFailure(err))
  }
}

export function * runQuiz () {
  let i = 0
  let navigate = true
  const questions = yield select(getQuestions)
  while (i < questions.length) {
    if (navigate) {
      yield put(push('/card/' + i))
    }
    const result = yield take([ QUIZ_MARK_CURRENT_ANSWER, LOCATION_CHANGE ])
    if (result.type === LOCATION_CHANGE) {
      // update index if back button was pressed
      // allows user to change answers while in this loop
      navigate = result.payload.action === 'POP'
      if (navigate && i) {
        --i
      }
    } else {
      navigate = true
      yield put(quizUpdateAnswer(i, result.value))
      ++i
    }
  }
  yield put(quizUpdateScores())
  yield put(push('/results'))
}

export default function * rootSaga () {
  yield all([
    watchQuizLoad(),
    watchQuizStart()
  ])
}
