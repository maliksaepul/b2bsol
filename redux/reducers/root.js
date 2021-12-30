import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/_sidebar'
import DropdownReducer from '@/redux/reducers/_dropdown'
import LoaderReducer from './_loader'
import ScheduleReducer from './_schedule'
import CourseReducer from './_course'
import LastLearningReducer from './_lastlearning'
import ModalReducer from './_modal'
import StatisticReducer from './_statistic'
import ApbReducer from './_apb'
import VodReducer from './_vod'
import PodcastReducer from './_podcast'
import RelatedPodcast from './_relatedPodcast'
import RelatedAudioPlaybook from './_relatedAudioplaybook'
import LoginReducer from './_login'

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
    relatedPodcast: RelatedPodcast,
    relatedAudioPlaybook: RelatedAudioPlaybook,
    account: LoginReducer,
})

export default rootReducer
