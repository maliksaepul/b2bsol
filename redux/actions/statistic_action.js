import axios from 'axios'
import { GET_STAT } from '../types'
import { apiEnd, apiError, apiStart } from './scedule_action'

export const getMyStat = payload => {
    return {
        type: GET_STAT,
        payload: payload,
    }
}

export const fetchMyStat = id => dispatch => {
    dispatch(apiStart())

    axios
        .get(`http://localhost:3000/api/statistic/${id}`)
        .then(({ data }) => {
            dispatch(getMyStat(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
