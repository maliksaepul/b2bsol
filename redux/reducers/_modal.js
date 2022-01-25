import { CLOSE_MODAL } from '../types'

const ModalReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return (state = action.payload)
        default:
            return state
    }
}

export default ModalReducer
