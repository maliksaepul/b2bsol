// import { SERVICE } from '@/utils/constants'
import { SERVICE } from '@/utils/constants'
import Request from '@/redux/request'
import { GET_ORGANIZATION } from '@/redux/types'
import { apiEnd, apiStart } from '@/redux/actions/section/_schedule'

export const getOrganization = payload => {
    return {
        type: GET_ORGANIZATION,
        payload: payload,
    }
}

export const fetchOrganization = () => async dispatch => {
    dispatch(apiStart())
    try {
        const request = new Request(null, null, true)
        const response = {
            ...(await request.get(`${SERVICE.CONTENT}/organization`)),
        }
        dispatch(getOrganization(response))
        dispatch(apiEnd())
        return response
    } catch (e) {
        return e.response || e
    }
}
