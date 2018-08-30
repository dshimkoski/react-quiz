import React from 'react'
import { connect } from 'react-redux'
import { quizStart } from '../redux/actions'
import { Heading, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'

const QuizHome = ({ start }) => (
  <QuizWrapper>
    <Heading m={3}>Welcome to the <br /> Trivia Challenge!</Heading>
    <Text mb={3}>You will be presented with 10 True or False questions.</Text>
    <Text mb={2}>Can you score 100%?</Text>
    <LargeButton bg='success' chevronRight my={3} onClick={start}>Start</LargeButton>
  </QuizWrapper>
)

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(quizStart())
})

export default connect(null, mapDispatchToProps)(QuizHome)
