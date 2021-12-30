import axios from 'axios'
import { GET_COURSES } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getCourses = payload => {
    return {
        type: GET_COURSES,
        payload: payload,
    }
}

export const fetchCourses = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/master-courses`)
        .then(({ data }) => {
            dispatch(getCourses(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
