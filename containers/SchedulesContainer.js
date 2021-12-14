import Schedule from '@/components/templates/schedule'
import { fetchSchedules } from '@/redux/actions/scedule_action'
import { connect } from 'react-redux'
const mapStateToProps = ({ scheduleReducer }) => ({
    events: scheduleReducer,
})

export default connect(mapStateToProps, { fetchSchedules })(Schedule)
