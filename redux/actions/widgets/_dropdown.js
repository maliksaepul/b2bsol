import { ACTIVE_FILTER, ACTIVE_PROFILE, ACTIVE_SORTING } from '../../types'

export const activeFilter = val => {
    return {
        type: ACTIVE_FILTER,
        payload: val,
    }
}

export const activeSorting = val => {
    return {
        type: ACTIVE_SORTING,
        payload: val,
    }
}

export const activeProfile = val => {
    return {
        type: ACTIVE_PROFILE,
        payload: val,
    }
}
