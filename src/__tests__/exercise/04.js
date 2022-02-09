// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

const buildLoginForm = build({
  fields: {
    username: fake(faker => faker.internet.userName()),
    password: fake(faker => faker.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  const {username, password} = buildLoginForm()

  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)

  const button = screen.getByRole('button', {name: /submit/i})
  userEvent.click(button)
  expect(handleSubmit).toBeCalledWith({
    username,
    password,
  })
})
