import React from 'react'
import { connect } from 'react-redux'
import { quizMarkCurrentAnswer } from '../redux/actions'
import { Box, Flex, Heading, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'

const QuizCard = ({ current, total, title, question, markAnswer }) => (
  <QuizWrapper>
    <Heading m={3}>{ title }</Heading>
    <Text style={{ minHeight: 80 + 'px' }} mx={10} mb={3} dangerouslySetInnerHTML={{ __html: question }} />
    <Text>{current} of {total}</Text>
    <Flex justify='space-around'>
      <Box width={1 / 3} p={2}>
        <LargeButton bg='success' onClick={() => markAnswer(true)}>True</LargeButton>
      </Box>
      <Box width={1 / 3} p={2}>
        <LargeButton bg='error' onClick={() => markAnswer(false)}>False</LargeButton>
      </Box>
    </Flex>
  </QuizWrapper>
)

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
