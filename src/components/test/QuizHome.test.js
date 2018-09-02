import React from 'react'
import { LargeButton } from '@hackclub/design-system'
import QuizHome from '../QuizHome'

describe('QuizHome', () => {
  let el
  const start = jest.fn()

  beforeEach(() => {
    el = mount(<QuizHome start={start} />)
  })

  it('should start the quiz when start button is clicked', () => {
    el.find(LargeButton).simulate('click', { preventDefault () {} })
    expect(start).toBeCalled()
  })
})
