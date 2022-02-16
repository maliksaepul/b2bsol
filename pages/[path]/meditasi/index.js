import React, { useEffect } from 'react'
import { fetchPodcastMeditation } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import Head from 'next/head'
// import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { defaultContentLimit } from '@/utils/constants'
const Meditasi = dynamic(() => import('@/views/Meditasi'))
const MeditasiPage = ({
    account,
    podcast,
    fetchPodcastMeditation,
    path,
    loading,
}) => {
    useEffect(() => {
        fetchPodcastMeditation(path.path, {
            limit: defaultContentLimit,
            skip: 0,
        })
    }, [])

    const handleFetchPodcast = skip => {
        fetchPodcastMeditation(path.path, {
            limit: defaultContentLimit,
            skip: skip,
        })
    }

    return (
        <>
            <Head>
                <title>Meditasi</title>
            </Head>
            <Meditasi
                podcast={podcast}
                path={path.path}
                loading={loading}
                onFetchData={handleFetchPodcast}
            />
        </>
    )
}

MeditasiPage.propTypes = {
    fetchPodcastMeditation: PropTypes.func,
    podcast: PropTypes.any,
    account: PropTypes.any,
    path: PropTypes.any,
    loading: PropTypes.object,
}
const mapStateToProps = ({ meditation }) => ({ podcast: meditation })

export default connect(mapStateToProps, { fetchPodcastMeditation })(
    MeditasiPage
)
