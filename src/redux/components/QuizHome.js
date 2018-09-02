import { connect } from 'react-redux'
import { quizStart } from '../actions'
import QuizHome from '../../components/QuizHome'

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(quizStart())
})

export default connect(null, mapDispatchToProps)(QuizHome)
