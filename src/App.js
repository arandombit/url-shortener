import { useState } from 'react'
import { connect } from 'react-redux'

import './App.scss'

import { shortenURL } from './actions/shortenedURL'
import { clickHandler, submitHandler } from './handlers/url'

import ErrorMessage from './atoms/ErrorMessage'
import ShortenedLink from './components/ShortenedLink'
import ShortenerForm from './components/ShortenerForm'

const App = props => {
  const [url, setURL] = useState('')
  const [isError, setError] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const { shortenedURL } = props
  return (
    <div className='container'>
      <ShortenerForm
        onSubmit={submitHandler({
          url,
          setURL,
          setError,
          shortenURL: props.shortenURL
        })}
        onChange={e => setURL(e.target.value)}
        value={url} />
      { props.shortenedURL.status === 'success' &&
        <ShortenedLink
          onClick={clickHandler({
            setCopySuccess,
            shortURL: shortenedURL.value
          })}
          copySuccess={copySuccess}
          shortURL={shortenedURL.value}
        />
      }
      { props.shortenedURL.status === 'fail' &&
        <ErrorMessage message='Something went wrong on our side, try again later' /> }
      { isError && <ErrorMessage message='Invalid URL' /> }
    </div>
  )
}

export default connect(({ shortenedURL }) => ({ shortenedURL }), {
  shortenURL
})(App)
