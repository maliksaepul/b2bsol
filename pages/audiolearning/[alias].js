import PodcastPlayer from '@/views/PodcastPlayer'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchRelatedPodcast } from '@/redux/actions/_relatedContent'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const PodcastPlayerPage = ({ fetchRelatedPodcast, relatedPodcast }) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedPodcast()
    }, [])
    return <PodcastPlayer alias={alias} relatedPodcast={relatedPodcast} />
}

PodcastPlayerPage.propTypes = {
    fetchRelatedPodcast: PropTypes.func.isRequired,
    relatedPodcast: PropTypes.array,
}
const mapStateToProps = ({ relatedPodcast }) => ({ relatedPodcast })

export default connect(mapStateToProps, { fetchRelatedPodcast })(
    withAuth(PodcastPlayerPage)
)
