import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/ondemand_action'
import { connect } from 'react-redux'
import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'

const AudioLearningPage = ({ podcast, fetchPodcast }) => {
    useEffect(() => {
        fetchPodcast()
    }, [podcast.length])

    return (
        <>
            <AudioLearning podcast={podcast} />
        </>
    )
}

AudioLearningPage.propTypes = {
    fetchPodcast: PropTypes.func,
    podcast: PropTypes.array,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(AudioLearningPage)
