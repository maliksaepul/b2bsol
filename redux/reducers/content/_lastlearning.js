import { GET_LAST_LEARNING } from '../../types'
const initialState = [
    {
        activedatetime: '',
        name: '',
        code: '',
        actions: [
            {
                title: '',
                url: '',
            },
        ],
        datatime: '',
        description: '',
        cover: '',
    },
]

const LastLearningReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAST_LEARNING:
            return action.payload
        default:
            return state
    }
}

export default LastLearningReducer
