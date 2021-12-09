import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/sidebar_reducer'
import DropdownReducer from '@/redux/reducers/dropdown_reducer'

const rootReducer = combineReducers({
    sidebarState: SidebarReducer,
    dropdownState: DropdownReducer,
})

export default rootReducer
