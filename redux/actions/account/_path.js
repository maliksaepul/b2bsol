// import { SERVICE } from '@/utils/constants'
import { SERVICE } from '@/utils/constants'
import Request from '@/redux/request'
import { GET_PATH } from '@/redux/types'
import { apiEnd, apiStart } from '@/redux/actions/section/_scedule'

export const getPath = payload => {
    return {
        type: GET_PATH,
        payload: payload,
    }
}

export const fetchPath =
    (path = '') =>
    async dispatch => {
        dispatch(apiStart())
        try {
            const request = new Request(null, null, true)
            const response = {
                ...(await request.get(
                    `${SERVICE.CONTENT}/organization/${path}`
                )),
            }
            dispatch(getPath(response))
            dispatch(apiEnd())
            return response
        } catch (e) {
            return e.response || e
        }
    }
