import React from 'react'
import { Card } from '@hackclub/design-system'

const QuizWrapper = props => (
  <Card bg="white" boxShadowSize="sm" ml="auto" mr="auto" my={4} p={3} width={500} align="center">
    {props.children}
  </Card>
)

export default QuizWrapper
