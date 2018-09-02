import React from 'react'
import { Heading, Loading } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'

export default function QuizLoading () {
  return (
    <QuizWrapper>
      <Heading>Loading...</Heading>
      <Loading />
    </QuizWrapper>
  )
}
