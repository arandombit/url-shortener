import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'

import App from './App'

const mockStore = configureStore([])

const urlReducer = (status, value) => ({ shortenedURL: { status, value } })

const shortenedURL = 'http://localhost:8080/c'

const defaultProps = urlReducer('idle', '')
const failProps = urlReducer('fail', '')
const successProps = urlReducer('success', shortenedURL)

const apiErrorText = 'Something went wrong on our side, try again later'

const app = store => (
  <Provider store={store}>
    <App />
  </Provider>
)

test('ensure url is copied to clipboard when copy button is clicked', () => {
  Object.assign(navigator, {
    clipboard: { writeText: () => shortenedURL }
  })
  const store = mockStore({ ...successProps })
  render(app(store))
  jest.spyOn(navigator.clipboard, 'writeText')
  fireEvent.click(screen.getByRole('button', { name: /Copy/i }))
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(shortenedURL)
})

test('ensure error is shown when url reducer status is set to fail', () => {
  const store = mockStore({ ...failProps })
  render(app(store))
  const error = screen.getByText(apiErrorText)
  expect(error).toHaveTextContent(apiErrorText)
})

test('ensure error is shown when provided invalid input', () => {
  const store = mockStore({ ...defaultProps })
  render(app(store))
  userEvent.type(screen.getByRole('textbox'), 'qwerty{enter}')
  const error = screen.getByText('Invalid URL')
  expect(error).toHaveTextContent('Invalid URL')
})
