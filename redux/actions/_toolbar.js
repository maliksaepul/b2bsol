import { LOCAL_STORAGE } from '@/utils/constants'
import { saveToken } from '@/utils/helpers'
import axios from 'axios'
import {
    TOOLBAR_APB,
    TOOLBAR_INSPIBOOK,
    TOOLBAR_PODCAST,
    TOOLBAR_PODCAST_MEDITATION,
    TOOLBAR_VOD,
} from '../types'
import {
    getApb,
    getInspibook,
    getPodcast,
    getPodcastMeditation,
    getVod,
} from './content/_ondemand'
import { apiEnd, apiError, apiStart } from './section/_schedule'

export const fetchDataToolbar = (params, api) => dispatch => {
    dispatch(apiStart())
    const config = {
        params: {
            ...params,
        },
        headers: {},
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem(
        LOCAL_STORAGE.ACCESS_TOKEN
    )}`

    axios
        .get(api.url, config)
        .then(({ data }) => {
            switch (api.type) {
                case TOOLBAR_PODCAST:
                    saveToken(data.token)
                    dispatch(getPodcast(data.data))
                    break
                case TOOLBAR_PODCAST_MEDITATION:
                    saveToken(data.token)
                    dispatch(getPodcastMeditation(data.data))
                    break
                case TOOLBAR_VOD:
                    dispatch(getVod(data.data))
                    break
                case TOOLBAR_APB:
                    dispatch(getApb(data))
                    break
                case TOOLBAR_INSPIBOOK:
                    saveToken(data.token)
                    dispatch(getInspibook(data.data))
                    break
                default:
                    dispatch(getPodcast(data))
                    break
            }
        })
        .catch(error => {
            dispatch(apiError(error))
        })
        .then(() => {
            dispatch(apiEnd())
        })
}
