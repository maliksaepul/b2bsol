import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/_sidebar'
import DropdownReducer from '@/redux/reducers/_dropdown'
import LoaderReducer from '@/redux/reducers/_loader'
import ScheduleReducer from '@/redux/reducers/_schedule'
import CourseReducer from '@/redux/reducers/_course'
import LastLearningReducer from '@/redux/reducers/_lastlearning'
import ModalReducer from '@/redux/reducers/_modal'
import StatisticReducer from '@/redux/reducers/_statistic'
import ApbReducer from '@/redux/reducers/_apb'
import VodReducer from '@/redux/reducers/_vod'
import PodcastReducer from '@/redux/reducers/_podcast'
import RelatedPodcast from '@/redux/reducers/_relatedPodcast'
import RelatedAudioPlaybook from '@/redux/reducers/_relatedAudioplaybook'
import LoginReducer from '@/redux/reducers/_login'
import PathReducer from '@/redux/reducers/_path'
import OrganizationReducer from '@/redux/reducers/_organization'
import InspibookReducer from '@/redux/reducers/_inspibook'
import RelatedInspibook from '@/redux/reducers/_relatedInspibook'

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
    inspibook: InspibookReducer,
    relatedInspibook: RelatedInspibook,
    relatedPodcast: RelatedPodcast,
    relatedAudioPlaybook: RelatedAudioPlaybook,
    account: LoginReducer,
    path: PathReducer,
    organization: OrganizationReducer,
})

export default rootReducer
