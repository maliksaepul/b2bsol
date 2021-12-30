import Statistic from '@/components/templates/statistic'
import { fetchMyStat } from '@/redux/actions/_statistic'
import { connect } from 'react-redux'

const mapStateToProps = ({ myStat }) => ({ myStat })

export default connect(mapStateToProps, { fetchMyStat })(Statistic)
