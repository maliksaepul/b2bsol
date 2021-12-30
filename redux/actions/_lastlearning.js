import axios from 'axios'
import { GET_LAST_LEARNING } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getLastLearning = payload => {
    return {
        type: GET_LAST_LEARNING,
        payload: payload,
    }
}

export const fetchLastLearning = () => dispatch => {
    dispatch(apiStart())
    axios
        .get(`${process.env.BASEURL}/api/continue-learning`)
        .then(({ data }) => {
            dispatch(getLastLearning(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
