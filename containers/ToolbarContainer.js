import Toolbar from '@/components/atoms/toolbar'
import { activeFilter, activeSorting } from '@/redux/actions/dropdown_action'
import { fetchDataToolbar } from '@/redux/actions/toolbar_action'
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
