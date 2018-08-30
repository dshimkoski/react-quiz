import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Flex, Heading, Icon, LargeButton, Text } from '@hackclub/design-system'
import QuizWrapper from './QuizWrapper'
import styled from 'styled-components'

const List = styled.ol`
  list-style: none;
`

const Score = styled.div`
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

const QuizResults = ({ questions, answers, scores, restart }) => (
  <QuizWrapper>
    <Heading>
      You scored
      <Score>
        { scores.filter(x => x).length } / { questions.length }
      </Score>
    </Heading>
    <List>
      { questions.map(([ question, isTrue ], i) => {
        const isCorrect = answers[i] === isTrue
        const color = isCorrect ? '#0a0' : 'error'
        return <li key={i}>
          <Flex align='center' mt={10}>
            <Icon color={color} name={isCorrect ? 'add_circle' : 'do_not_disturb_on'} mr={20} />
            <Text align='left' color={color} dangerouslySetInnerHTML={{ __html: question }} mr={40} />
          </Flex>
        </li>
      }) }
    </List>
    <LargeButton bg='success' my={3} onClick={restart}>Play again?</LargeButton>
  </QuizWrapper>
)

const mapStateToProps = ({ quiz }) => quiz

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(push('/'))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults)
