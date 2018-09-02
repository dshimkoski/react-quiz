import { connect } from 'react-redux'
import { quizLoad } from '../actions'
import QuizHome from '../../components/QuizHome'

const mapStateToProps = ({ quiz }) => ({
  isError: quiz.isError,
  isLoading: quiz.isLoading
})

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(quizLoad())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizHome)
