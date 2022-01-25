import { content } from '@/utils/apiroutelist'
import { LOCAL_STORAGE } from '@/utils/constants'
import { saveToken } from '@/utils/helpers'
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

export const fetchPodcast =
    (path = '', params) =>
    dispatch => {
        dispatch(apiStart())
        axios
            .get(content.podcast(path), {
                params,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        LOCAL_STORAGE.ACCESS_TOKEN
                    )}`,
                },
            })
            .then(({ data }) => {
                saveToken(data.token)
                dispatch(getPodcast(data?.data?.results))
            })
            .catch(error => {
                console.log(error)
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
