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

export const fetchRelatedPodcast = () => dispatch => {
    dispatch(apiStart())

    axios
        .get(`${process.env.BASEURL}/api/related-podcast`)
        .then(({ data }) => {
            dispatch(getRelatedPodcast(data))
        })
        .catch(error => {
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
