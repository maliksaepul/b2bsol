// Libraries
import React from 'react'
import Head from 'next/head'

// Views
import Home from 'views/Home/Home'


const HomePage = ({ props }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>

            <Home {...props} />
        </React.Fragment>
    )
}

export default HomePage
