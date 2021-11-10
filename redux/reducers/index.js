import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/sidebar_reducer'

const rootReducer = combineReducers({
    sidebarState: SidebarReducer,
})

export default rootReducer
