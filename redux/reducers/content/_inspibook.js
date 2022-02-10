import { GET_INSPIBOOK } from '../../types'
const initialState = {
    results: [],
}

const InspibookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INSPIBOOK:
            return action.payload
        default:
            return state
    }
}

export default InspibookReducer
