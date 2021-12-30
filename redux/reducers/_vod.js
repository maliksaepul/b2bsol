import { GET_VOD } from '../types'
const initialState = [
    {
        id: '',
        alias: '',
        artist: '',
        title: '',
        cover: '',
    },
]

const VodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VOD:
            return action.payload
        default:
            return state
    }
}

export default VodReducer
