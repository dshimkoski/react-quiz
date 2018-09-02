import React from 'react'
import { array, func } from 'prop-types'
import { Flex, Heading, Icon, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'
import styled from 'styled-components'

export const QUIZ_CORRECT_COLOR = '#0a0'
export const QUIZ_INCORRECT_COLOR = 'error'
export const QUIZ_CORRECT_ICON = 'add_circle'
export const QUIZ_INCORRECT_ICON = 'remove_circle'

const List = styled.ol`
  list-style: none;
`

export const Score = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 10px auto 0;
  background: #333;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding-top: 33px;
  text-align: center;
`

export default function QuizResults ({ questions, answers, scores, restart }) {
  return (
    <QuizWrapper>
      <Heading>
        You scored
        <Score>
          { scores.filter(x => x).length } / { questions.length }
        </Score>
      </Heading>
      <List>
        { questions.map((question, i) => {
          const color = scores[i] ? QUIZ_CORRECT_COLOR : QUIZ_INCORRECT_COLOR
          return <li key={i}>
            <Flex align='center' mt={10}>
              <Icon color={color} name={scores[i] ? QUIZ_CORRECT_ICON : QUIZ_INCORRECT_ICON} mr={20} />
              <Text align='left' color={color} dangerouslySetInnerHTML={{ __html: question }} mr={40} />
            </Flex>
          </li>
        }) }
      </List>
      <LargeButton bg='success' my={3} onClick={restart}>Play again?</LargeButton>
    </QuizWrapper>
  )
}

QuizResults.propTypes = {
  answers: array.isRequired,
  questions: array.isRequired,
  restart: func.isRequired,
  scores: array.isRequired
}
