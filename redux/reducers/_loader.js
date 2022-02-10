import { API_START, API_STOP } from '../types'

const initialState = {
    state: false,
    message: 'Mempersiapkan Platform',
}

const LoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_START:
            return { ...initialState, state: true, ...action.payload }
        case API_STOP:
            return { ...initialState, state: false, ...action.payload }

        default:
            return state
    }
}

export default LoaderReducer
