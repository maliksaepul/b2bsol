// Libraries
import React, { useEffect } from 'react'
import Head from 'next/head'
import withAuth from '@/hoc/wrappers/withAuthStrict'
import PropTypes from 'prop-types'

// Views

const HomePage = ({ account }) => {
    useEffect(() => {}, [])
    return (
        <>
            <Head>
                <title>Beranda</title>
            </Head>
        </>
    )
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default withAuth(HomePage)
