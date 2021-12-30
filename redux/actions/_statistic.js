import axios from 'axios'
import { GET_STAT } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getMyStat = payload => {
    return {
        type: GET_STAT,
        payload: payload,
    }
}

export const fetchMyStat = id => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/statistic/${id}`)
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
