const { GET_STAT } = require('../../types')

const initialState = {
    podcast: 0,
    apb: 0,
    vod: 0,
    course: 0,
}

const StatisticReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAT:
            return action.payload
        default:
            return state
    }
}

export default StatisticReducer
