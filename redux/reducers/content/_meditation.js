import { GET_PODCAST_MEDITATION } from '../../types'
const initialState = {
    results: [],
}

const PodcastMeditationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PODCAST_MEDITATION:
            return action.payload
        default:
            return state
    }
}

export default PodcastMeditationReducer
