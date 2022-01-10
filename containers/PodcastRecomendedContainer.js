import PodcastRecomended from '@/components/templates/podcast-recomended'
import { fetchRelatedPodcast } from '@/redux/actions/_relatedContent'
import { connect } from 'react-redux'

const mapStateToProps = ({ relatedPodcast }) => ({
    podcast: relatedPodcast,
})

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    PodcastRecomended
)
