import { ACTIVE_SIDEBAR } from '../types/sidebar'

export const activeSidebar = sidebar => {
    return {
        type: ACTIVE_SIDEBAR,
        payload: sidebar,
    }
}
