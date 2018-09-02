import { connect } from 'react-redux'
import { quizMarkCurrentAnswer } from '../actions'
import QuizCard from '../../components/QuizCard'

const mapStateToProps = ({ quiz }, { match: { params: url } }) => {
  return {
    current: +url.id + 1,
    total: quiz.questions.length,
    title: quiz.questions[url.id][2],
    question: quiz.questions[url.id][0]
  }
}

const mapDispatchToProps = dispatch => ({
  markAnswer: value => dispatch(quizMarkCurrentAnswer(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizCard)
