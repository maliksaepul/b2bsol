import Appbar from '@/components/molecules/appbar'
import { activeSidebar } from '@/redux/actions/_sidebar'
import { connect } from 'react-redux'

const mapStateToProps = ({ sidebarState, account, path }) => ({
    sidebarState,
    account,
    path,
})

export default connect(mapStateToProps, { activeSidebar })(Appbar)
