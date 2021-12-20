import React, { useEffect } from 'react'
import VideoLearning from '@/views/VideoLearning'
import { fetchVod } from '@/redux/actions/ondemand_action'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const VideoLearningPage = ({ vod, fetchVod }) => {
    useEffect(() => {
        fetchVod()
    }, [])

    return (
        <>
            <VideoLearning videos={vod} />
        </>
    )
}

const mapStateToProps = ({ vod }) => ({ vod })

VideoLearningPage.propTypes = {
    vod: PropTypes.array,
    fetchVod: PropTypes.func,
}

export default connect(mapStateToProps, { fetchVod })(VideoLearningPage)
