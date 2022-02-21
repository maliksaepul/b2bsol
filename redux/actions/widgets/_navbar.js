import Request from '@/redux/request'
import { GET_NAVBAR } from '@/redux/types'
import { serverDriven } from '@/utils/apiroutelist'
import { apiEnd, apiStart } from '../section/_schedule'

export const getNavbar = payload => {
    return {
        type: GET_NAVBAR,
        payload: payload,
    }
}

export const fetchDataNavbar =
    (path = '', params) =>
    async dispatch => {
        dispatch(apiStart())
        try {
            const request = new Request(params, null, true)
            const response = await request.get(serverDriven.navbar(path))
            dispatch(getNavbar(response.data.data.results))
        } catch (e) {
            dispatch(getNavbar(e.response))
            // console.log(e);
            return e
        } finally {
            dispatch(apiEnd())
        }
    }
