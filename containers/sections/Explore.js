import Explore from '@/components/templates/explore'
import { fetchLastLearning } from '@/redux/actions/content/_lastlearning'

import { connect } from 'react-redux'
const mapStateToProps = ({ lastLearningReducer }) => ({
    lastlearning: lastLearningReducer,
})

export default connect(mapStateToProps, { fetchLastLearning })(Explore)
