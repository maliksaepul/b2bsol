// import PodcastPlayer from '@/views/PodcastPlayer'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchRelatedPodcast } from '@/redux/actions/content/_relatedContent'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
const PodcastPlayer = dynamic(() => import('@/views/PodcastPlayer'))

const PodcastPlayerPage = ({
    fetchRelatedPodcast,
    relatedPodcast,
    path,
    loading,
}) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedPodcast(path.path)
    }, [])
    return (
        <PodcastPlayer
            alias={alias}
            relatedPodcast={relatedPodcast}
            loading={loading}
        />
    )
}

PodcastPlayerPage.propTypes = {
    fetchRelatedPodcast: PropTypes.func.isRequired,
    relatedPodcast: PropTypes.array,
    path: PropTypes.any,
    loading: PropTypes.bool,
}
const mapStateToProps = ({ relatedPodcast, loading }) => ({
    relatedPodcast,
    loading,
})

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    PodcastPlayerPage
)
