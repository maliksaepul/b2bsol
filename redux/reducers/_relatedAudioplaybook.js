import { GET_RELATED_AUDIOPLAYBOOK } from '../types'
const initialState = [
    {
        title: '',
        author: '',
        image: '',
        alias: '',
        description: '',
    },
]

const RelatedAudioPlaybook = (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATED_AUDIOPLAYBOOK:
            return action.payload
        default:
            return state
    }
}

export default RelatedAudioPlaybook
