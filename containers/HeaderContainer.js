import Header from '@/components/templates/header'
import { connect } from 'react-redux'

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(Header)
