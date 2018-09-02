import { all, call, put, select, take, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOCATION_CHANGE } from 'connected-react-router/lib/actions'
import { getQuestions } from './selectors'
import {
  APP_LOAD,
  QUIZ_START,
  QUIZ_MARK_CURRENT_ANSWER,
  appLoadSuccess,
  appLoadFailure,
  quizUpdateAnswer,
  quizUpdateScores
} from './actions'

export function * watchAppLoad () {
  yield takeEvery(APP_LOAD, loadApp)
}

export function * watchQuizStart () {
  yield takeEvery(QUIZ_START, runQuiz)
}

export function * loadApp () {
  try {
    const res = yield call(fetch, process.env.APP_LOAD_URL)
    if (res) {
      const data = yield call([res, res.json])
      yield put(appLoadSuccess(data))
    }
  } catch (err) {
    yield put(appLoadFailure(err))
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
    watchAppLoad(),
    watchQuizStart()
  ])
}
