import Statistic from '@/components/templates/statistic'
import { fetchMyStat } from '@/redux/actions/statistic_action'
import { connect } from 'react-redux'

const mapStateToProps = ({ myStat }) => ({ myStat })

export default connect(mapStateToProps, { fetchMyStat })(Statistic)
