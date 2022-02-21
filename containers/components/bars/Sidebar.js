import Sidebar from '@/components/molecules/sidebar'
import { activeSidebar } from '@/redux/actions/widgets/_sidebar'
import { connect } from 'react-redux'
const mapStateToProps = ({ sidebarState, path, navbar }) => ({
    sidebarState,
    path: path.path,
    navbar,
})

export default connect(mapStateToProps, { activeSidebar })(Sidebar)
