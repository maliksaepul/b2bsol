// Libraries
import React from 'react'
import Head from 'next/head'
import Home from '@/views/Home/Home'

// Views

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>

            <Home />
        </React.Fragment>
    )
}

export default HomePage
