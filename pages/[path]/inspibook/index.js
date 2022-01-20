import React, { useEffect } from 'react'
import { fetchPodcast } from '@/redux/actions/_ondemand'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InspiBook from '@/views/InspiBook'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const InspiBookPage = ({ podcast, fetchPodcast }) => {
    useEffect(() => {
        fetchPodcast()
    }, [])

    return (
        <>
            <InspiBook podcast={podcast} />
        </>
    )
}

InspiBookPage.propTypes = {
    fetchPodcast: PropTypes.func,
    podcast: PropTypes.array,
}
const mapStateToProps = ({ podcast }) => ({ podcast })

export default connect(mapStateToProps, { fetchPodcast })(
    withAuth(InspiBookPage)
)
