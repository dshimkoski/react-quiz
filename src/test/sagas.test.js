import fetch from 'jest-fetch-mock'
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects'
import { watchAppLoad, loadApp } from '../redux/sagas'
import { appLoad, appLoadFailure, appLoadSuccess } from '../redux/actions'

describe('app load', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('loads initial data', () => {
    const data = { results: [] };
    fetch.mockResponseOnce(JSON.stringify(data))
    return expectSaga(watchAppLoad)
      .provide([[call(fetch), data]])
      .put(appLoadSuccess(data))
      .dispatch(appLoad())
      .silentRun()
  })

  it('handles load error', () => {
    const error = new Error('Bonk!');
    fetch.mockRejectOnce(error)
    return expectSaga(watchAppLoad)
      .provide([[call(fetch)]])
      .put(appLoadFailure(error))
      .dispatch(appLoad())
      .silentRun()
  });

})
