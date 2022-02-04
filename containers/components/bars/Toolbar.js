import Toolbar from '@/components/atoms/toolbar'
import { activeFilter, activeSorting } from '@/redux/actions/_dropdown'
import { fetchDataToolbar } from '@/redux/actions/_toolbar'
import { connect } from 'react-redux'

const mapStateToProps = ({ dropdown }) => ({
    filterActive: dropdown.active_filter,
    sortingActive: dropdown.active_sorting,
})

export default connect(mapStateToProps, {
    activeFilter,
    activeSorting,
    fetchData: fetchDataToolbar,
})(Toolbar)
