import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ThemeProvider } from '@hackclub/design-system'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import App from './redux/components/App'
import rootReducer from './redux/reducers'
import rootSaga from './redux/sagas'
import './global.css'

const history = createBrowserHistory({
  basename: process.env.NODE_ENV === 'dev' ? '/' : '/react-quiz/'
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider webfonts>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </ThemeProvider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./redux/components/App', () => {
    render()
  })
  module.hot.accept('./redux/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
