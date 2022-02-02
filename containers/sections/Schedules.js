import Schedule from '@/components/templates/schedule'
import { fetchSchedules } from '@/redux/actions/section/_schedule'
import { connect } from 'react-redux'
const mapStateToProps = ({ scheduleReducer, organization }) => ({
    events: scheduleReducer,
    organization,
})

export default connect(mapStateToProps, { fetchSchedules })(Schedule)
