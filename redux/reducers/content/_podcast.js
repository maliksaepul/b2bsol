import { GET_PODCAST } from '../../types'
const initialState = {
    results: [],
}

const PodcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PODCAST:
            return action.payload
        default:
            return state
    }
}

export default PodcastReducer
