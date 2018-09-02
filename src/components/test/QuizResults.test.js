import React from 'react'
import { Icon, LargeButton, Text } from '@hackclub/design-system'
import QuizResults, {
  Score,
  QUIZ_CORRECT_COLOR,
  QUIZ_INCORRECT_COLOR,
  QUIZ_CORRECT_ICON,
  QUIZ_INCORRECT_ICON } from '../QuizResults'

describe('QuizResults', () => {
  let el
  const restart = jest.fn()

  beforeEach(() => {
    el = mount(<QuizResults
      questions={[1, 2, 3]}
      answers={[true, false, false]}
      scores={[true, false, true]}
      restart={restart} />)
  })

  it('should render the correct score', () => {
    expect(el.find(Score).text()).toBe('2 / 3')
  })

  it('should render icons with correct colors', () => {
    expect(el.find(Icon).filterWhere(item =>
      item.prop('name') === QUIZ_CORRECT_ICON &&
      item.prop('color') === QUIZ_CORRECT_COLOR
    ).length).toBe(2)
    expect(el.find(Icon).filterWhere(item =>
      item.prop('name') === QUIZ_INCORRECT_ICON &&
      item.prop('color') === QUIZ_INCORRECT_COLOR
    ).length).toBe(1)
  })

  it('should render answers with correct colors', () => {
    expect(el.find(Text).filterWhere(item =>
      item.prop('color') === QUIZ_CORRECT_COLOR
    ).length).toBe(2)
    expect(el.find(Icon).filterWhere(item =>
      item.prop('color') === QUIZ_INCORRECT_COLOR
    ).length).toBe(1)
  })

  it('should restart quiz when restart button is clicked', () => {
    el.find(LargeButton).simulate('click', { preventDefault () {} })
    expect(restart).toBeCalled()
  })
})
