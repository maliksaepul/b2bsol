import ApbGrid from '@/components/templates/apb-grid'
import { fetchApb } from '@/redux/actions/ondemand_action'
import { connect } from 'react-redux'

const mapStateToProps = ({ apb }) => ({ apb })

export default connect(mapStateToProps, { fetchApb })(ApbGrid)
