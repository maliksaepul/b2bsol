import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
// import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { defaultContentLimit } from '@/utils/constants'
const AudioLearning = dynamic(() => import('@/views/AudioLearning'))
const AudioLearningPage = ({
    account,
    podcast,
    fetchPodcast,
    path,
    loading,
}) => {
    useEffect(() => {
        fetchPodcast(path.path, { limit: defaultContentLimit, skip: 0 })
    }, [])

    const handleFetchPodcast = skip => {
        fetchPodcast(path.path, { limit: defaultContentLimit, skip: skip })
    }

    return (
        <>
            <AudioLearning
                podcast={podcast}
                path={path.path}
                loading={loading}
                onFetchData={handleFetchPodcast}
            />
        </>
    )
}

AudioLearningPage.propTypes = {
    fetchPodcast: PropTypes.func,
    podcast: PropTypes.any,
    account: PropTypes.any,
    path: PropTypes.any,
    loading: PropTypes.object,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(AudioLearningPage)
