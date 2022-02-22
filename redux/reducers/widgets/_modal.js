import { CLOSE_MODAL, MODAL_EVENT } from '@/redux/types'

const initialState = {
    close: true,
    event: {
        title: '',
        description: '',
    },
}

const ModalReducer = (state = initialState, action) => {
    const newState = { ...state, ...action.payload }
    switch (action.type) {
        case CLOSE_MODAL:
            return newState
        case MODAL_EVENT:
            return newState
        default:
            return state
    }
}

export default ModalReducer
