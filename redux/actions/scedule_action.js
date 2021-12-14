import axios from 'axios'
import { API_ERROR, API_START, API_STOP, GET_SCHEDULES } from '../types'

export const apiStart = payload => {
    return {
        type: API_START,
        payload: payload,
    }
}
export const apiEnd = payload => {
    return {
        type: API_STOP,
        payload: payload,
    }
}

export const apiError = payload => {
    return {
        type: API_ERROR,
        payload: payload,
    }
}

export const getSchedules = payload => {
    console.log(payload)
    return {
        type: GET_SCHEDULES,
        payload: payload,
    }
}

export const fetchSchedules = () => dispatch => {
    dispatch(apiStart())

    axios
        .get('http://localhost:3000/api/schedules')
        .then(({ data }) => {
            dispatch(getSchedules(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
