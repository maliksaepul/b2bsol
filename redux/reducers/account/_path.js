import { GET_PATH } from '@/redux/types'

const initialState = {
    path: '',
}

const PathReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PATH:
            return {
                ...initialState,
                ...action.payload?.data?.data?.organization,
                status: action.payload.status,
            }
        default:
            return state
    }
}

export default PathReducer
