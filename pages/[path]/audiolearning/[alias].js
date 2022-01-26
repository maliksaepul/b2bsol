import PodcastPlayer from '@/views/PodcastPlayer'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchRelatedPodcast } from '@/redux/actions/content/_relatedContent'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PodcastPlayerPage = ({ fetchRelatedPodcast, relatedPodcast, path }) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedPodcast(path.path)
    }, [])
    return <PodcastPlayer alias={alias} relatedPodcast={relatedPodcast} />
}

PodcastPlayerPage.propTypes = {
    fetchRelatedPodcast: PropTypes.func.isRequired,
    relatedPodcast: PropTypes.array,
    path: PropTypes.any,
}
const mapStateToProps = ({ relatedPodcast }) => ({ relatedPodcast })

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    PodcastPlayerPage
)
