import InspiBookCard from '@/components/organisms/inspibook-card'
import { connect } from 'react-redux'

const mapStateToProps = ({ path, loading }) => ({ path, loading })

export default connect(mapStateToProps)(InspiBookCard)
