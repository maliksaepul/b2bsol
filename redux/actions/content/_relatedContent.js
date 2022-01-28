import { content } from '@/utils/apiroutelist'
import axios from 'axios'
import {
    GET_RELATED_AUDIOPLAYBOOK,
    GET_RELATED_INSPIBOOK,
    GET_RELATED_PODCAST,
} from '../../types'
import { apiEnd, apiError, apiStart } from '../section/_scedule'
import Request from '@/redux/request'

export const getRelatedPodcast = payload => {
    return {
        type: GET_RELATED_PODCAST,
        payload: payload,
    }
}

export const getRelatedInspibook = payload => {
    return {
        type: GET_RELATED_INSPIBOOK,
        payload: payload,
    }
}

export const getRelatedAudioPlaybook = payload => {
    return {
        type: GET_RELATED_AUDIOPLAYBOOK,
        payload: payload,
    }
}

export const fetchRelatedPodcast = (path, params) => async dispatch => {
    params = {
        ...params,
        limit: 10,
        skip: 0,
    }
    dispatch(apiStart())
    try {
        const request = new Request(params, null, true)
        const response = await request.get(content.podcast(path))
        dispatch(getRelatedPodcast(response.data.data.results))
    } catch (e) {
        return e
    } finally {
        dispatch(apiEnd())
    }
}

export const fetchRelatedInspibook = (path, params) => async dispatch => {
    params = {
        ...params,
        limit: 10,
        skip: 0,
    }
    dispatch(apiStart())
    try {
        const request = new Request(params, null, true)
        const response = await request.get(content.inspibook(path))
        dispatch(getRelatedInspibook(response.data.data.results))
    } catch (e) {
        return e
    } finally {
        dispatch(apiEnd())
    }
}

export const fetchRelatedAudioPlaybook = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/related-audioplaybook`)
        .then(({ data }) => {
            dispatch(getRelatedAudioPlaybook(data))
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
