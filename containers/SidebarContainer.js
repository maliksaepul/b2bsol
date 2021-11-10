import Sidebar from '@/components/molecules/sidebar'
import { connect } from 'react-redux'
const mapStateToProps = ({ sidebarState }) => ({
    sidebarState,
})

export default connect(mapStateToProps)(Sidebar)
