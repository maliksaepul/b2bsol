import Appbar from '@/components/molecules/appbar'
import { activeSidebar } from '@/redux/actions/_sidebar'
import { connect } from 'react-redux'

const mapStateToProps = ({ sidebarState }) => ({
    sidebarState,
})

export default connect(mapStateToProps, { activeSidebar })(Appbar)
