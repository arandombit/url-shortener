import { render, screen } from '@testing-library/react'

import ShortenedLink from './ShortenedLink'

const props = {
  onClick: () => {},
  shortURL: 'http://localhost:8080/c'
}

test('ensure correspondence between text copying status and button text', () => {
  render(<ShortenedLink {...props} copySuccess />)
  const copiedBtn = screen.getByRole('button', { name: /Copied!/i })
  expect(copiedBtn).toHaveTextContent('Copied!')
  render(<ShortenedLink {...props} copySuccess={false} />)
  const copyBtn = screen.getByRole('button', { name: /Copy/i })
  expect(copyBtn).toHaveTextContent('Copy')
})
