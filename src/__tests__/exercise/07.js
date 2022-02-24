// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

test('renders with the light styles for the light theme', () => {
  const LightTheme = ({children}) => (
    <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  )

  render(<EasyButton>Easy</EasyButton>, {wrapper: LightTheme})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  const DarkTheme = ({children}) => (
    <ThemeProvider initialTheme="dark">{children}</ThemeProvider>
  )

  render(<EasyButton>Easy</EasyButton>, {wrapper: DarkTheme})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})
