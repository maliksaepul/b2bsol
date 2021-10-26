// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// Utils
import { IS_DEVELOPMENT } from 'utils/constants'

// Styles
import 'styles/App.global.scss'

const App = ({ Component, pageProps }) => {
    const meta = {
        title: 'Inspigo',
        image: 'https://cdn.inspigo.id/public/cover/meta-image.png',
        description:
            'Dapatkan inspirasi & skill baru lewat berbagai topik menarik, kapan, dan di mana saja',
        keywords:
            'inspigo, podcast, audio playbook, video on demand, jadi lebih siap',
        url: 'https://inspigo.id',
    }

    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>

                <meta name="title" content={meta.title} />
                <meta name="image" content={meta.image} />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="url" content={meta.url} />

                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={meta.url} />

                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://inspigo.id" />

                {IS_DEVELOPMENT && <meta name="robots" content="noindex" />}
            </Head>

            <Component {...pageProps} />
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any,
}

export default App
