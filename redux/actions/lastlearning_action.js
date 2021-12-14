import axios from 'axios'
import { GET_LAST_LEARNING } from '../types'
import { apiEnd, apiError, apiStart } from './scedule_action'

export const getLastLearning = payload => {
    return {
        type: GET_LAST_LEARNING,
        payload: payload,
    }
}

export const fetchLastLearning = () => dispatch => {
    dispatch(apiStart())

    axios
        .get('http://localhost:3000/api/continue-learning')
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
