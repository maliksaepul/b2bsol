import { GET_APB } from '../types'
const initialState = [
    {
        title: '',
        author: '',
        image: '',
        alias: '',
        description: '',
    },
]

const ApbReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APB:
            return action.payload
        default:
            return state
    }
}

export default ApbReducer
