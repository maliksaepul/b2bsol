import AudioGrid from '@/components/templates/audio-grid'
import { fetchPodcast } from '@/redux/actions/ondemand_action'
import { connect } from 'react-redux'

const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(AudioGrid)
