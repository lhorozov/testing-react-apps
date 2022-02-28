// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

const setup = ({initialProps} = {}) => {
  let result = {current: {}}
  function TestComponent() {
    Object.assign(result.current, useCounter(initialProps))
    return null
  }
  render(<TestComponent />)
  return result.current
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()
  expect(result.count).toBe(0)
  act(() => {
    result.increment()
  })
  expect(result.count).toBe(1)
  act(() => {
    result.decrement()
  })
  expect(result.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialProps: {initialCount: 5}})
  expect(result.count).toBe(5)
  act(() => {
    result.increment()
  })
  expect(result.count).toBe(6)
  act(() => {
    result.decrement()
  })
  expect(result.count).toBe(5)
})

test('allows customization of the initial step', () => {
  const result = setup({initialProps: {step: 5}})
  expect(result.count).toBe(0)
  act(() => {
    result.increment()
  })
  expect(result.count).toBe(5)
  act(() => {
    result.decrement()
  })
  expect(result.count).toBe(0)
})
