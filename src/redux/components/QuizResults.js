import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import QuizResults from '../../components/QuizResults'

const mapStateToProps = ({ quiz }) => ({
  answers: quiz.answers,
  questions: quiz.questions.map(q => q[0]),
  scores: quiz.scores
})

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(push('/'))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults)
