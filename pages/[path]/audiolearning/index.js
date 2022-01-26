import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'

const AudioLearningPage = ({ account, podcast, fetchPodcast, path }) => {
    useEffect(() => {
        fetchPodcast(path.path)
    }, [])

    return (
        <>
            <AudioLearning podcast={podcast} path={path.path} />
        </>
    )
}

AudioLearningPage.propTypes = {
    fetchPodcast: PropTypes.func,
    podcast: PropTypes.array,
    account: PropTypes.any,
    path: PropTypes.any,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(AudioLearningPage)
