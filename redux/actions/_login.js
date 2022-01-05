import { SERVICE } from '@/utils/constants'
import { GET_ACCOUNT } from '../types'
import { apiStart } from './_scedule'
import Request from '@/redux/request'

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
            ...(
                await request.get(
                    SERVICE.ACCOUNT + '/accounts/self?ref_subs=true'
                )
            ).data.data,
        }
        dispatch(getAccount(response))
    } catch (error) {
        return error
    }
}
