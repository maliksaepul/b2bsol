import { GET_RELATED_PODCAST } from '../types'
const initialState = [
    {
        title: '',
        deeplink: '',
        cover: '',
        author: '',
    },
]

const RelatedPodcast = (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATED_PODCAST:
            return action.payload
        default:
            return state
    }
}

export default RelatedPodcast
