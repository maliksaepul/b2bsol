import InspiBookCard from '@/components/organisms/inspibook-card'
import { connect } from 'react-redux'

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(InspiBookCard)
