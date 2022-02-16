import React, { useEffect } from 'react'
import { fetchInspibook } from '@/redux/actions/content/_ondemand'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import InspiBook from '@/views/InspiBook'
import dynamic from 'next/dynamic'
import { defaultContentLimit } from '@/utils/constants'
import Head from 'next/head'
const InspiBook = dynamic(() => import('@/views/InspiBook'))

const DynamicPage = ({ inspibook, fetchInspibook, path, loading }) => {
    useEffect(() => {
        fetchInspibook(path.path, { limit: defaultContentLimit, skip: 0 })
    }, [])

    const handleFetchInspibook = skip => {
        fetchInspibook(path.path, { limit: defaultContentLimit, skip: skip })
    }
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <InspiBook
                inspibook={inspibook}
                path={path.path}
                loading={loading}
                onFetchData={handleFetchInspibook}
            />
        </>
    )
}

DynamicPage.propTypes = {
    fetchInspibook: PropTypes.func,
    inspibook: PropTypes.any,
    path: PropTypes.any,
    loading: PropTypes.object,
    navbar: PropTypes.array,
}
const mapStateToProps = ({ navbar }) => ({ navbar })

export default connect(mapStateToProps, { fetchInspibook })(DynamicPage)
