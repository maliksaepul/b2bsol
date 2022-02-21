import { ACTIVE_SIDEBAR } from '@/redux/types'

export const activeSidebar = sidebar => {
    return {
        type: ACTIVE_SIDEBAR,
        payload: sidebar,
    }
}
