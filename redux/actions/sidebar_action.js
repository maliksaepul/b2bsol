import { ACTIVE_SIDEBAR } from '../types'

export const activeSidebar = sidebar => {
    return {
        type: ACTIVE_SIDEBAR,
        payload: sidebar,
    }
}
