import React from 'react'
import { func, number, string } from 'prop-types'
import { Box, Flex, Heading, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'

export default function QuizCard ({ current, total, title, question, markAnswer }) {
  return (
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
}

QuizCard.propTypes = {
  current: number.isRequired,
  markAnswer: func.isRequired,
  question: string.isRequired,
  title: string.isRequired,
  total: number.isRequired
}
