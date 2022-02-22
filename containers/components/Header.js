import Header from '@/components/templates/header'
import { connect } from 'react-redux'

const mapStateToProps = ({ path, navbar }) => ({ path, navbar })

export default connect(mapStateToProps)(Header)
