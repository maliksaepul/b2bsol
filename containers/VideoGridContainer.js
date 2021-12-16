import VideoGrid from '@/components/templates/video-grid'
import { fetchVod } from '@/redux/actions/ondemand_action'
import { connect } from 'react-redux'

const mapStateToProps = ({ vod }) => ({ vod })

export default connect(mapStateToProps, { fetchVod })(VideoGrid)
