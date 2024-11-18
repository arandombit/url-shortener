export const initialState = { status: 'idle', value: '' }

const shortenedURL = (state = initialState, action = { type: '', payload: '' }) => {
  switch (action.type) {
    case 'SHORTEN_URL_SUCCESS':
      return { status: 'success', value: action.payload }
    case 'UPDATE_STATUS':
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export default shortenedURL
