import React, { useEffect } from 'react'
import { fetchInspibook } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InspiBook from '@/views/InspiBook'

const InspiBookPage = ({ inspibook, fetchInspibook, path }) => {
    useEffect(() => {
        fetchInspibook(path.path)
    }, [])

    return (
        <>
            <InspiBook inspibook={inspibook} path={path.path} />
        </>
    )
}

InspiBookPage.propTypes = {
    fetchInspibook: PropTypes.func,
    inspibook: PropTypes.array,
    path: PropTypes.any,
}
const mapStateToProps = ({ inspibook }) => ({ inspibook })

export default connect(mapStateToProps, { fetchInspibook })(InspiBookPage)
