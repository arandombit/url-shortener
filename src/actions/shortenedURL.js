import request from '../utils/request'

export const shortenSuccess = payload => ({ type: 'SHORTEN_URL_SUCCESS', payload })

export const updateStatus = payload => ({ type: 'UPDATE_STATUS', payload })

export const shortenURL = url => dispatch =>
  request.post('http://localhost:8080/', { url })
    .then(({ url }) => dispatch(shortenSuccess(url)))
    .catch(() => {
      dispatch(updateStatus('fail'))
      setTimeout(() => dispatch(updateStatus('idle')), 3000)
    })
