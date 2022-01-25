import { content } from '@/utils/apiroutelist'
import { LOCAL_STORAGE } from '@/utils/constants'
import { saveToken } from '@/utils/helpers'
import axios from 'axios'
import { GET_RELATED_AUDIOPLAYBOOK, GET_RELATED_PODCAST } from '../types'
import { apiEnd, apiError, apiStart } from './_scedule'

export const getRelatedPodcast = payload => {
    return {
        type: GET_RELATED_PODCAST,
        payload: payload,
    }
}

export const getRelatedAudioPlaybook = payload => {
    return {
        type: GET_RELATED_AUDIOPLAYBOOK,
        payload: payload,
    }
}

export const fetchRelatedPodcast = (path, params) => dispatch => {
    params = {
        ...params,
        limit: 10,
        skip: 0,
    }
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
            dispatch(getRelatedPodcast(data?.data?.results))
        })
        .catch(error => {
            console.log(error)
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
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
