import React from 'react'
import { Card } from '@hackclub/design-system'

export default function QuizWrapper (props) {
  return (
    <Card bg='white' boxShadowSize='sm' ml='auto' mr='auto' my={4} p={3} width={500} align='center'>
      {props.children}
    </Card>
  )
}
