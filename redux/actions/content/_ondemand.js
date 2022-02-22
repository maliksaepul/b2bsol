import { content } from '@/utils/apiroutelist'
import axios from 'axios'
import {
    GET_APB,
    GET_INSPIBOOK,
    GET_PODCAST,
    GET_PODCAST_MEDITATION,
    GET_VOD,
} from '../../types'
import { apiEnd, apiError, apiStart } from '../section/_schedule'
import Request from '@/redux/request'
export const getPodcast = payload => {
    return {
        type: GET_PODCAST,
        payload: payload,
    }
}

export const getPodcastMeditation = payload => {
    return {
        type: GET_PODCAST_MEDITATION,
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

export const getInspibook = payload => {
    return {
        type: GET_INSPIBOOK,
        payload: payload,
    }
}

export const fetchPodcast =
    (path = '', params) =>
    async dispatch => {
        dispatch(apiStart())
        try {
            const request = new Request(params, null, true)
            const response = await request.get(content.podcast(path))
            dispatch(getPodcast(response.data.data))
        } catch (e) {
            return e
        } finally {
            dispatch(apiEnd())
        }
    }

export const fetchDynamicContent =
    (path = '', params) =>
    async dispatch => {
        dispatch(apiStart())
        try {
            const request = new Request(params, null, true)
            const response = await request.get(content.dynamic(path))
            return response
        } catch (e) {
            return e || e.response
        } finally {
            dispatch(apiEnd())
        }
    }

export const fetchInspibook =
    (path = '', params) =>
    async dispatch => {
        dispatch(apiStart())
        try {
            const request = new Request(params, null, true)
            const response = await request.get(content.inspibook(path))
            dispatch(getInspibook(response.data.data))
        } catch (e) {
            return e
        } finally {
            dispatch(apiEnd())
        }
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
