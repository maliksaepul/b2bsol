const { ACTIVE_SIDEBAR } = require('@/redux/types/sidebar')

const ActiveSidebarReducer = (state = false, action) => {
    switch (action.type) {
        case ACTIVE_SIDEBAR:
            return (state = action.payload)
        default:
            return state
    }
}

export default ActiveSidebarReducer
