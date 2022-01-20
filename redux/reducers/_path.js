import { GET_PATH } from '../types'
const initialState = {
    data: {},
    message: '',
}

const PathReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PATH:
            if (action.payload.isAxiosError) {
                return action.payload.response
            } else {
                return action.payload
            }
        default:
            return state
    }
}

export default PathReducer
