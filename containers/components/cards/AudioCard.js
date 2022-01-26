import AudioCard from '@/components/organisms/audio-card'
import { connect } from 'react-redux'

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(AudioCard)
