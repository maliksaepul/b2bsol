import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/_ondemand'
import { connect } from 'react-redux'
import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'

const AudioLearningPage = ({ podcast, fetchPodcast }) => {
    useEffect(() => {
        fetchPodcast()
    }, [])

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
