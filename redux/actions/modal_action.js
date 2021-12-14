import { CLOSE_MODAL } from '../types'

export const modalClose = close => {
    return {
        type: CLOSE_MODAL,
        payload: close,
    }
}
