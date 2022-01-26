import Toolbar from '@/components/atoms/toolbar'
import { activeFilter, activeSorting } from '@/redux/actions/_dropdown'
import { fetchDataToolbar } from '@/redux/actions/_toolbar'
import { connect } from 'react-redux'

const mapStateToProps = ({ dropdownState }) => ({
    filterActive: dropdownState.active_filter,
    sortingActive: dropdownState.active_sorting,
})

export default connect(mapStateToProps, {
    activeFilter,
    activeSorting,
    fetchData: fetchDataToolbar,
})(Toolbar)
