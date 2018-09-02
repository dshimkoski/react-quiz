import React from 'react'
import { Heading, LargeButton, Text } from '@hackclub/design-system'
import QuizCard from '../QuizCard'

describe('QuizCard', () => {
  let el
  const markAnswer = jest.fn()

  beforeEach(() => {
    el = mount(<QuizCard current={1} total={10} title='T' question='Q' markAnswer={markAnswer} />)
  })

  it('should render the title', () => {
    expect(el.find(Heading).text()).toBe('T')
  })

  it('should render the question', () => {
    expect(el.find(Text).first().text()).toBe('Q')
  })

  it('should render current position', () => {
    expect(el.find(Text).last().text()).toBe('1 of 10')
  })

  it('should mark the answer true when true button is clicked', () => {
    el.find(LargeButton).first().simulate('click', { preventDefault () {} })
    expect(markAnswer).toBeCalledWith(true)
  })

  it('should mark the answer false when false button is clicked', () => {
    el.find(LargeButton).last().simulate('click', { preventDefault () {} })
    expect(markAnswer).toBeCalledWith(false)
  })
})
