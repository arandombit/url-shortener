import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import shortenedURL from './shortenedURL'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const rootReducer = combineReducers({
  shortenedURL
})

export default createStoreWithMiddleware(rootReducer)
