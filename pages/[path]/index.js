// Libraries
import dynamic from 'next/dynamic'
import React from 'react'
import Head from 'next/head'
// import Home from '@/views/Home/Home'
import PropTypes from 'prop-types'

const Home = dynamic(() => import('@/views/Home/Home'))

// Views

const HomePage = props => {
    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>

            <Home account={props.account} path={props.path} />
        </React.Fragment>
    )
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

export default HomePage
