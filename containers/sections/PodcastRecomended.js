import PodcastRecomended from '@/components/templates/podcast-recomended'
import { fetchRelatedPodcast } from '@/redux/actions/content/_relatedContent'
import { connect } from 'react-redux'

const mapStateToProps = ({ relatedPodcast, loading }) => ({
    podcast: relatedPodcast,
    loading,
})

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    PodcastRecomended
)
