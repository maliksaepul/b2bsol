import Schedule from '@/components/templates/schedule'
import { fetchSchedules } from '@/redux/actions/_scedule'
import { connect } from 'react-redux'
const mapStateToProps = ({ scheduleReducer }) => ({
    events: scheduleReducer,
})

export default connect(mapStateToProps, { fetchSchedules })(Schedule)
