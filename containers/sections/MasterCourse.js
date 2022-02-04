import MasterCourse from '@/components/templates/master-course'
import { fetchCourses } from '@/redux/actions/content/_course'

import { connect } from 'react-redux'
const mapStateToProps = ({ courseReducer }) => ({
    courses: courseReducer,
})

export default connect(mapStateToProps, { fetchCourses })(MasterCourse)
