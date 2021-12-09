import ProfileBar from '@/components/molecules/profile/bar'
import { activeProfile } from '@/redux/actions/dropdown_action'
import { connect } from 'react-redux'
const mapStateToProps = ({ dropdownState }) => ({
    active: dropdownState.active_profile,
})

export default connect(mapStateToProps, { activeProfile })(ProfileBar)
