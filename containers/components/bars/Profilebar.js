import ProfileBar from '@/components/organisms/profile/bar'
import { activeProfile } from '@/redux/actions/_dropdown'
import { connect } from 'react-redux'
const mapStateToProps = ({ dropdownState }) => ({
    active: dropdownState.active_profile,
})

export default connect(mapStateToProps, { activeProfile })(ProfileBar)
