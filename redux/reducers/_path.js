import { GET_PATH } from '../types'
const initialState = {
    path: '',
}

const PathReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PATH:
            return {
                ...initialState,
                ...action.payload?.data?.data?.organization,
            }
        default:
            return state
    }
}

export default PathReducer
