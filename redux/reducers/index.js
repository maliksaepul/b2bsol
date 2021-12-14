import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/sidebar_reducer'
import DropdownReducer from '@/redux/reducers/dropdown_reducer'
import LoaderReducer from './loader_reducer'
import ScheduleReducer from './schedule_reducer'
import CourseReducer from './course_reducer'
import LastLearningReducer from './lastlearning_reducer'
import ModalReducer from './modal_reducer'

const rootReducer = combineReducers({
    sidebarState: SidebarReducer,
    dropdownState: DropdownReducer,
    loaderState: LoaderReducer,
    scheduleReducer: ScheduleReducer,
    courseReducer: CourseReducer,
    lastLearningReducer: LastLearningReducer,
    closeModal: ModalReducer,
})

export default rootReducer
