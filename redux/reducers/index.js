import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/sidebar_reducer'
import DropdownReducer from '@/redux/reducers/dropdown_reducer'
import LoaderReducer from './loader_reducer'
import ScheduleReducer from './schedule_reducer'
import CourseReducer from './course_reducer'
import LastLearningReducer from './lastlearning_reducer'
import ModalReducer from './modal_reducer'
import StatisticReducer from './statistic_reducer'
import ApbReducer from './apb_reducer'
import VodReducer from './vod_reducer'
import PodcastReducer from './podcast_reducer'

const rootReducer = combineReducers({
    sidebarState: SidebarReducer,
    dropdownState: DropdownReducer,
    loaderState: LoaderReducer,
    scheduleReducer: ScheduleReducer,
    courseReducer: CourseReducer,
    lastLearningReducer: LastLearningReducer,
    closeModal: ModalReducer,
    myStat: StatisticReducer,
    apb: ApbReducer,
    vod: VodReducer,
    podcast: PodcastReducer,
})

export default rootReducer
