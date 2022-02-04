import { CLOSE_MODAL, MODAL_EVENT } from '../types'

export const modalClose = close => {
    return {
        type: CLOSE_MODAL,
        payload: { close },
    }
}

export const modalEvent = event => {
    return {
        type: MODAL_EVENT,
        payload: { event },
    }
}
