import axios from 'axios'
import { GET_ACCOUNT } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getAccount = payload => {
    return {
        type: GET_ACCOUNT,
        payload: payload,
    }
}

export const fetchCourses = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.ACCOUNT}/login`)
        .then(({ data }) => {
            dispatch(getAccount(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
