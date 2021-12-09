const { ACTIVE_SORTING, ACTIVE_FILTER, ACTIVE_PROFILE } = require('../types')

const initialState = {
    active_filter: false,
    active_sorting: false,
    active_profile: false,
}
const dropdownReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_FILTER:
            return {
                active_profile: false,
                active_sorting: false,
                active_filter: action.payload,
            }
        case ACTIVE_SORTING:
            return {
                active_profile: false,
                active_filter: false,
                active_sorting: action.payload,
            }
        case ACTIVE_PROFILE:
            return {
                active_sorting: false,
                active_filter: false,
                active_profile: action.payload,
            }
        default:
            return state
    }
}

export default dropdownReducers
