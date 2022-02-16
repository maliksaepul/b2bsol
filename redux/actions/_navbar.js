import { serverDriven } from '@/utils/apiroutelist'
import Request from '../request'
import { GET_NAVBAR } from '../types'
import { apiEnd, apiStart } from './section/_schedule'

export const getNavbar = payload => {
    return {
        type: GET_NAVBAR,
        payload: payload,
    }
}

export const fetchDataNavbar =
    (path = '', params) =>
    async dispatch => {
        console.log(path, 'navbar')
        dispatch(apiStart())
        try {
            const request = new Request(params, null, true)
            const response = await request.get(serverDriven.navbar(path))
            dispatch(getNavbar(response.data.data.results))
        } catch (e) {
            console.log(e)
            return dispatch(getNavbar(e.response))
        } finally {
            dispatch(apiEnd())
        }
    }
