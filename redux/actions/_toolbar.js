import { API_APB, API_PODCAST, API_VIDEO } from '@/utils/apiroutelist'
import axios from 'axios'
import { getApb, getPodcast, getVod } from './_ondemand'
import { apiEnd, apiError, apiStart } from './_scedule'

export const fetchDataToolbar = (params, api) => dispatch => {
    dispatch(apiStart())
    axios
        .get(api, { params })
        .then(({ data }) => {
            switch (api) {
                case API_PODCAST:
                    dispatch(getPodcast(data))
                    break
                case API_VIDEO:
                    dispatch(getVod(data))
                    break
                case API_APB:
                    dispatch(getApb(data))
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
