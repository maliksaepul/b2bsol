import MasterCourse from '@/components/templates/master-course'
import { fetchCourses } from '@/redux/actions/course_action'

import { connect } from 'react-redux'
const mapStateToProps = ({ courseReducer }) => ({
    courses: courseReducer,
})

export default connect(mapStateToProps, { fetchCourses })(MasterCourse)
