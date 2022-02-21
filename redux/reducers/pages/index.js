import {
    GET_COURSEPAGE,
    GET_HOMEPAGE,
    GET_LEADERBOARDPAGE,
    GET_PODCASTPAGE,
    GET_VODPAGE,
} from '@/redux/types'

const initialState = {
    home: {},
    podcasts: {},
    vod: {},
    leaderboard: {},
    course: {},
}

const PageReducer = (state = initialState, action) => {
    const newState = { ...state, ...action.payload }
    switch (action.type) {
        case GET_HOMEPAGE:
            return newState
        case GET_PODCASTPAGE:
            return newState
        case GET_VODPAGE:
            return newState
        case GET_LEADERBOARDPAGE:
            return newState
        case GET_COURSEPAGE:
            return newState
        default:
            return state
    }
}

export default PageReducer
