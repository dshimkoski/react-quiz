import React, { Component } from 'react'
import { object } from 'prop-types'
import { hot } from 'react-hot-loader'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import QuizHome from './QuizHome'
import QuizCard from './QuizCard'
import QuizResults from './QuizResults'

class App extends Component {
  render () {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path='/' component={QuizHome} />
          <Route path='/card/:id' component={QuizCard} />
          <Route path='/results' component={QuizResults} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: object
}

export default hot(module)(App)
