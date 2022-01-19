import axios from 'axios'
import { GET_APB, GET_PODCAST, GET_VOD } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getPodcast = payload => {
    return {
        type: GET_PODCAST,
        payload: payload,
    }
}

export const getVod = payload => {
    return {
        type: GET_VOD,
        payload: payload,
    }
}

export const getApb = payload => {
    return {
        type: GET_APB,
        payload: payload,
    }
}

export const fetchPodcast = params => dispatch => {
    dispatch(apiStart())
    axios
        .get(`${process.env.BASEURL}/api/podcast`, params)
        .then(({ data }) => {
            dispatch(getPodcast(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}

export const fetchApb = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/apb`)
        .then(({ data }) => {
            dispatch(getApb(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}

export const fetchVod = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/vod`)
        .then(({ data }) => {
            dispatch(getVod(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
