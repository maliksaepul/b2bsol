import Toolbar from '@/components/atoms/toolbar'
import { activeFilter, activeSorting } from '@/redux/actions/widgets/_dropdown'
import { connect } from 'react-redux'

const mapStateToProps = ({ dropdown }) => ({
    filterActive: dropdown.active_filter,
    sortingActive: dropdown.active_sorting,
})

export default connect(mapStateToProps, {
    activeFilter,
    activeSorting,
})(Toolbar)
