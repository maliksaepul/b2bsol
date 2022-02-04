import { GET_COURSES } from '../../types'
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

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES:
            return action.payload
        default:
            return state
    }
}

export default CourseReducer
