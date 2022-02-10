import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import Head from 'next/head'
// import AudioLearning from '@/views/AudioLearning'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { defaultContentLimit } from '@/utils/constants'
const Meditasi = dynamic(() => import('@/views/Meditasi'))
const MeditasiPage = ({ account, podcast, fetchPodcast, path, loading }) => {
    useEffect(() => {
        fetchPodcast(path.path, {
            limit: defaultContentLimit,
            skip: 0,
            filter: 'Meditasi',
        })
    }, [])

    const handleFetchPodcast = skip => {
        fetchPodcast(path.path, { limit: defaultContentLimit, skip: skip })
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
    fetchPodcast: PropTypes.func,
    podcast: PropTypes.any,
    account: PropTypes.any,
    path: PropTypes.any,
    loading: PropTypes.bool,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(MeditasiPage)
