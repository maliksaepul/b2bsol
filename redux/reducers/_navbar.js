import { GET_NAVBAR } from '../types'

const initialState = { data: [] }

const NavbarReducer = (state = initialState, action) => {
    const newState = { ...state, ...action.payload }
    switch (action.type) {
        case GET_NAVBAR:
            return newState
        default:
            return state
    }
}

export default NavbarReducer
