import React, { useEffect } from 'react'
import { fetchInspibook } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import InspiBook from '@/views/InspiBook'
import dynamic from 'next/dynamic'
const InspiBook = dynamic(() => import('@/views/InspiBook'))

const InspiBookPage = ({ inspibook, fetchInspibook, path, loading }) => {
    useEffect(() => {
        fetchInspibook(path.path)
    }, [])

    return (
        <>
            <InspiBook
                inspibook={inspibook}
                path={path.path}
                loading={loading}
            />
        </>
    )
}

InspiBookPage.propTypes = {
    fetchInspibook: PropTypes.func,
    inspibook: PropTypes.array,
    path: PropTypes.any,
    loading: PropTypes.bool,
}
const mapStateToProps = ({ inspibook }) => ({ inspibook })

export default connect(mapStateToProps, { fetchInspibook })(InspiBookPage)
