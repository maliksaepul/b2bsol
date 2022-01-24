import { disableScroll } from '@/utils/helpers'
import { CLOSE_MODAL } from '../types'

const ModalReducer = (state = false, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            if (action.payload === true) {
                disableScroll.off()
            } else {
                disableScroll.on()
            }
            return (state = action.payload)
        default:
            if (typeof window !== 'undefined') {
                disableScroll.on()
            }
            return state
    }
}

export default ModalReducer
