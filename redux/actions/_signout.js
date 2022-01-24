import { LOCAL_STORAGE, ORIGIN } from '@/utils/constants'
import { GET_REVOKE_USER } from '../types'
import { apiEnd, apiStart } from './_scedule'
import Request from '@/redux/request'
import { account } from '@/utils/apiroutelist'
import { removeToken } from '@/utils/helpers'
import routes from '@/utils/routes'

export const getRevokeUser = payload => {
    return {
        type: GET_REVOKE_USER,
        payload: payload,
    }
}

export const fetchRevokeUser = () => async dispatch => {
    dispatch(apiStart())

    try {
        const values = {
            token: localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN),
            origin: ORIGIN,
        }
        const params = {}

        const request = new Request(params)
        const response = await request.post(account.revokeUser(), values)
        removeToken()
        dispatch(apiEnd())
        window.open(routes.signIn('/'), '_self')
        return response
    } catch (e) {
        return e.response || e
    }
}
