import axios from 'axios'
import { GET_COURSES } from '../types'
import { apiEnd, apiError, apiStart } from './scedule_action'

export const getCourses = payload => {
    console.log(payload)
    return {
        type: GET_COURSES,
        payload: payload,
    }
}

export const fetchCourses = () => dispatch => {
    dispatch(apiStart())

    axios
        .get('http://localhost:3000/api/master-courses')
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
