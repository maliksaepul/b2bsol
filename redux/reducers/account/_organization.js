import { GET_ORGANIZATION } from '../../types'
const initialState = {
    path: '',
}

const OrganizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORGANIZATION:
            return { ...state, ...action.payload?.data?.data }

        default:
            return state
    }
}

export default OrganizationReducer
