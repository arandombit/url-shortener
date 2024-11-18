import { shortenSuccess, updateStatus } from '../actions/shortenedURL'
import reducer, { initialState } from './shortenedURL'

test('ensure initial state when provided undefined input', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('ensure state is updated properly when receiving URL payload', () => {
  expect(reducer(initialState, shortenSuccess('http://localhost:8080/c')))
    .toEqual({
      status: 'success',
      value: 'http://localhost:8080/c'
    })
})

test('ensure state status is properly updated', () => {
  expect(reducer(initialState, updateStatus('fail')))
    .toEqual({
      status: 'fail',
      value: ''
    })
  expect(reducer({ ...initialState, status: 'fail' }, updateStatus('idle')))
    .toEqual({
      status: 'idle',
      value: ''
    })
})
