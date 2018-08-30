import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { appLoad } from '../redux/actions'
import QuizHome from './QuizHome'
import QuizCard from './QuizCard'
import QuizResults from './QuizResults'

class App extends Component {
  componentDidMount() {
    this.props.load()
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path='/' component={ QuizHome } />
          <Route path='/card/:id' component={ QuizCard } />
          <Route path='/results' component={ QuizResults } />
        </Switch>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: PropTypes.object
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(appLoad())
})

export default hot(module)(
  connect(null, mapDispatchToProps)(App)
)
