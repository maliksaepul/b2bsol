import Loader from '@/components/molecules/loader'

import { connect } from 'react-redux'

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loader)
