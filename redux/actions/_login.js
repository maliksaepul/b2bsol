import { GET_ACCOUNT } from '../types'
import { apiEnd, apiStart } from './_scedule'
import Request from '@/redux/request'
import routes from '@/utils/routes'
import { account } from '@/utils/apiroutelist'

export const getAccount = payload => {
    return {
        type: GET_ACCOUNT,
        payload: payload,
    }
}

export const fetchAccount = () => async dispatch => {
    dispatch(apiStart())

    try {
        const request = new Request(null, null, true)
        const response = {
            ...(await request.get(account.self())),
        }
        if (response.status === 200) {
            dispatch(getAccount(response.data.data))
        } else {
            window.open(routes.signIn('/'), '_self')
        }
        dispatch(apiEnd())
    } catch (e) {
        return e
    }
}
