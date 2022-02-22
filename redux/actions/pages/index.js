import { GET_HOMEPAGE } from '@/redux/types'
import { dynamicUi } from '@/utils/apiroutelist'
import { apiEnd, apiStart } from '../section/_schedule'

export const getHomePage = payload => ({ type: GET_HOMEPAGE, payload: payload })
export const fetchHomePage = (path, params) => async dispatch => {
    dispatch(apiStart())
    try {
        const request = new Request(params, null, true)
        const response = await request.get(dynamicUi.home(path))
        dispatch(getHomePage(response.data.data))
    } catch (e) {
        dispatch(getHomePage(e.response))
        return e
    } finally {
        dispatch(apiEnd())
    }
}
