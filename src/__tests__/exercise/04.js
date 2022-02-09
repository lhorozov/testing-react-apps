// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = ({username, password} = {}) => {
  return {
    username: username ?? faker.internet.userName(),
    password: password ?? faker.internet.password(),
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  const {username, password} = buildLoginForm({password: '123'})

  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)

  const button = screen.getByRole('button', {name: /submit/i})
  userEvent.click(button)
  expect(handleSubmit).toBeCalledWith({
    username,
    password,
  })
})
