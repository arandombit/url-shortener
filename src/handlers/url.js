import { isURL } from 'validator'

export const clickHandler = api => () => {
  api.setCopySuccess(true)
  navigator.clipboard.writeText(api.shortURL)
  setTimeout(() => api.setCopySuccess(false), 2000)
}

export const submitHandler = api => event => {
  event.preventDefault()
  if (isURL(api.url)) {
    api.shortenURL(api.url)
    api.setURL('')
    api.setError(false)
  } else {
    api.setError(true)
  }
}
