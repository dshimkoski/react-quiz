import React from 'react'
import { func } from 'prop-types'
import { Heading, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'

export default function QuizHome ({ start }) {
  return (
    <QuizWrapper>
      <Heading m={3}>Welcome to the <br /> Trivia Challenge!</Heading>
      <Text mb={3}>You will be presented with 10 True or False questions.</Text>
      <Text mb={2}>Can you score 100%?</Text>
      <LargeButton bg='success' chevronRight my={3} onClick={start}>Start</LargeButton>
    </QuizWrapper>
  )
}

QuizHome.propTypes = {
  start: func.isRequired
}
