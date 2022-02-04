import { GET_PODCAST } from '../../types'
const initialState = [
    {
        title: '',
        deeplink: '',
        cover: '',
        author: '',
    },
]

const PodcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PODCAST:
            return action.payload
        default:
            return state
    }
}

export default PodcastReducer
