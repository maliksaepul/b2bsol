// Libraries
import React from 'react'
import Head from 'next/head'
import Home from '@/views/Home/Home'
import withAuth from '@/hoc/wrappers/withAuthStrict'

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

export default withAuth(HomePage)
