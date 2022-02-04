import BookCard from '@/components/organisms/book-card'
import { connect } from 'react-redux'

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(BookCard)
