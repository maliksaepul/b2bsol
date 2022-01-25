import { GET_RELATED_INSPIBOOK } from '../types'
const initialState = [
    {
        title: '',
        deeplink: '',
        cover: '',
        author: '',
    },
]

const RelatedInspibook = (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATED_INSPIBOOK:
            return action.payload
        default:
            return state
    }
}

export default RelatedInspibook
