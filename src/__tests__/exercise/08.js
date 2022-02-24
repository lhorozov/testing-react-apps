// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

const TestUseCounter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <>
      <div data-testid="count">{count}</div>
      <button onClick={increment} data-testid="increment">
        increment
      </button>
      <button onClick={decrement} data-testid="decrement">
        decrement
      </button>
    </>
  )
}

test('exposes the count and increment/decrement functions', () => {
  render(<TestUseCounter />)
  const count = screen.getByTestId('count')
  const incrementButton = screen.getByTestId('increment')
  const decrementButton = screen.getByTestId('decrement')
  expect(count).toHaveTextContent(0)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  expect(count).toHaveTextContent(2)
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)
  expect(count).toHaveTextContent(-1)
})

/* eslint no-unused-vars:0 */
