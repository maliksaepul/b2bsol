import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from '@/redux/reducers'
const middleware = [thunk]
const makeStore = () =>
    createStore(rootReducer, compose(applyMiddleware(...middleware)))

const wrapper = createWrapper(makeStore)
export default wrapper
