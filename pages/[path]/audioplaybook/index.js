import React, { useEffect } from 'react'
import AudioPlayBook from '@/views/AudioPlaybook'
import { fetchApb } from '@/redux/actions/content/_ondemand'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const AudioPlayBookPage = ({ apb, fetchApb }) => {
    useEffect(() => {
        fetchApb()
    }, [])

    return (
        <>
            <AudioPlayBook apb={apb} />
        </>
    )
}

AudioPlayBookPage.propTypes = {
    apb: PropTypes.array,
    fetchApb: PropTypes.func,
}

const mapStateToProps = ({ apb }) => ({ apb })

export default connect(mapStateToProps, { fetchApb })(AudioPlayBookPage)
