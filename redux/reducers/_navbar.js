import { GET_NAVBAR } from '../types'

const initialState = []

const NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NAVBAR:
            return action.payload
        default:
            return state
    }
}

export default NavbarReducer
