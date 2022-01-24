import Sidebar from '@/components/molecules/sidebar'
import { activeSidebar } from '@/redux/actions/_sidebar'
import { connect } from 'react-redux'
const mapStateToProps = ({ sidebarState, path }) => ({
    sidebarState,
    path: path.path,
})

export default connect(mapStateToProps, { activeSidebar })(Sidebar)
