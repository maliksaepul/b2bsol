import Appbar from '@/components/molecules/appbar'
import { activeSidebar } from '@/redux/actions/sidebar_action'
import { connect } from 'react-redux'

const mapStateToProps = ({ sidebarState }) => ({
    sidebarState,
})

export default connect(mapStateToProps, { activeSidebar })(Appbar)
