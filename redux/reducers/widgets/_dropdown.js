import { ACTIVE_FILTER, ACTIVE_PROFILE, ACTIVE_SORTING } from '@/redux/types'

const initialState = {
    active_filter: false,
    active_sorting: false,
    active_profile: false,
}
const dropdownReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_FILTER:
            return { ...state, active_filter: action.payload }
        case ACTIVE_SORTING:
            return {
                ...state,
                active_sorting: action.payload,
            }
        case ACTIVE_PROFILE:
            return {
                ...state,
                active_profile: action.payload,
            }
        default:
            return state
    }
}

export default dropdownReducers
