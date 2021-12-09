import { ACTIVE_SIDEBAR } from '../types'

const ActiveSidebarReducer = (state = false, action) => {
    switch (action.type) {
        case ACTIVE_SIDEBAR:
            return (state = action.payload)
        default:
            return state
    }
}

export default ActiveSidebarReducer
