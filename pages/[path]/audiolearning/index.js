import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/_ondemand'
import { connect } from 'react-redux'
import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const AudioLearningPage = ({ account, podcast, fetchPodcast, path }) => {
    useEffect(() => {
        fetchPodcast(path.path)
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
    account: PropTypes.any,
    path: PropTypes.any,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(
    withAuth(AudioLearningPage)
)
