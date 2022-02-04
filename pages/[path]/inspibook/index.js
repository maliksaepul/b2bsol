import React, { useEffect } from 'react'
import { fetchInspibook } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import InspiBook from '@/views/InspiBook'
import dynamic from 'next/dynamic'
import { defaultContentLimit } from '@/utils/constants'
const InspiBook = dynamic(() => import('@/views/InspiBook'))

const InspiBookPage = ({ inspibook, fetchInspibook, path, loading }) => {
    useEffect(() => {
        fetchInspibook(path.path, { limit: defaultContentLimit, skip: 0 })
    }, [])

    const handleFetchInspibook = skip => {
        fetchInspibook(path.path, { limit: defaultContentLimit, skip: skip })
    }
    return (
        <>
            <InspiBook
                inspibook={inspibook}
                path={path.path}
                loading={loading}
                onFetchData={handleFetchInspibook}
            />
        </>
    )
}

InspiBookPage.propTypes = {
    fetchInspibook: PropTypes.func,
    inspibook: PropTypes.any,
    path: PropTypes.any,
    loading: PropTypes.bool,
}
const mapStateToProps = ({ inspibook }) => ({ inspibook })

export default connect(mapStateToProps, { fetchInspibook })(InspiBookPage)
