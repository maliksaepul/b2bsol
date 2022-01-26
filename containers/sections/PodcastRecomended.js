import PodcastRecomended from '@/components/templates/podcast-recomended'
import { fetchRelatedPodcast } from '@/redux/actions/content/_relatedContent'
import { connect } from 'react-redux'

const mapStateToProps = ({ relatedPodcast }) => ({
    podcast: relatedPodcast,
})

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    PodcastRecomended
)
