import React from 'react'
import { Flex, Icon, Text } from '@hackclub/design-system'

export default function Error () {
  return (
    <Flex color='error' align='center' width={300} style={{ margin: '0 auto' }}>
      <Icon name='error_outline' mr={2} />
      <Text>There was an error. Please try again</Text>
    </Flex>
  )
}
