import { GET_ACCOUNT } from '../../types'
const initialState = []

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNT:
            return action.payload
        default:
            return state
    }
}

export default LoginReducer
