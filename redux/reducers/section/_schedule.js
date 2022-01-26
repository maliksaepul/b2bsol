import { GET_SCHEDULES } from '../../types'
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

const ScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCHEDULES:
            return action.payload
        default:
            return state
    }
}

export default ScheduleReducer
