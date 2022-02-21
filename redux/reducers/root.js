import { combineReducers } from 'redux'
import SidebarReducer from '@/redux/reducers/widgets/_sidebar'
import DropdownReducer from '@/redux/reducers/widgets/_dropdown'
import LoaderReducer from '@/redux/reducers/widgets/_loader'
import ScheduleReducer from '@/redux/reducers/section/_schedule'
import CourseReducer from '@/redux/reducers/content/_course'
import LastLearningReducer from '@/redux/reducers/content/_lastlearning'
import ModalReducer from '@/redux/reducers/widgets/_modal'
import StatisticReducer from '@/redux/reducers/section/_statistic'
import ApbReducer from '@/redux/reducers/content/_apb'
import VodReducer from '@/redux/reducers/content/_vod'
import PodcastReducer from '@/redux/reducers/content/_podcast'
import RelatedPodcast from '@/redux/reducers/content/_relatedPodcast'
import RelatedAudioPlaybook from '@/redux/reducers/content/_relatedAudioplaybook'
import LoginReducer from '@/redux/reducers/account/_login'
import PathReducer from '@/redux/reducers/account/_path'
import OrganizationReducer from '@/redux/reducers/account/_organization'
import InspibookReducer from '@/redux/reducers/content/_inspibook'
import RelatedInspibook from '@/redux/reducers/content/_relatedInspibook'
import NavbarReducer from '@/redux/reducers/widgets/_navbar'
import PageReducer from '@/redux/reducers/pages'

const rootReducer = combineReducers({
    sidebarState: SidebarReducer,
    dropdown: DropdownReducer,
    loading: LoaderReducer,
    scheduleReducer: ScheduleReducer,
    courseReducer: CourseReducer,
    lastLearningReducer: LastLearningReducer,
    modal: ModalReducer,
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
    navbar: NavbarReducer,
    page: PageReducer,
})

export default rootReducer
