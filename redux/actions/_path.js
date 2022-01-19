import { GET_PATH } from '../types'
import { apiStart } from './_scedule'

export const getPath = payload => {
    return {
        type: GET_PATH,
        payload: payload,
    }
}

export const fetchPodcast = params => dispatch => {
    dispatch(apiStart())
}
