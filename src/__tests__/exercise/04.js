// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)

  userEvent.type(username, 'someusername')
  userEvent.type(password, 'somepassword')

  const button = screen.getByRole('button', {name: /submit/i})
  userEvent.click(button)
  expect(handleSubmit).toBeCalledWith({
    username: 'someusername',
    password: 'somepassword',
  })
})
