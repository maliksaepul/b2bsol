import { API_START, API_STOP } from '../types'

const LoaderReducer = (state = false, action) => {
    switch (action.type) {
        case API_START:
            return (state = true)
        case API_STOP:
            return (state = false)
        default:
            return state
    }
}

export default LoaderReducer
