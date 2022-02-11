// Libraries
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// Utils
import { GTM, IS_DEVELOPMENT } from 'utils/constants'

// Styles
import '@/styles/App.global.scss'
import { wrapper } from '@/redux/store'
import NextProgress from '@/components/atoms/next-progress'
import Dashboard from '@/hoc/layouts/dashboard'
import TagManager from 'react-gtm-module'

const App = ({ Component, pageProps }) => {
    const meta = {
        title: '#JadiLebihSiap bersama Inspigo',
        image: '/meta.png',
        description:
            'Kembangkan dirimu bersama Inspigo lewat konten pengembangan diri dan karier agar #JadiLebihSiap hadapi masa depan.',
        keywords:
            '#jadilebihsiap, inspigo, podcast, audio learning, live learning, inspibook',
        url: 'https://member.inspigo.id',
    }

    useEffect(() => {
        TagManager.initialize({ gtmId: GTM })
    }, [])

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
            <NextProgress
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={false}
            />
            <Dashboard>
                <Component {...pageProps} />
            </Dashboard>
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any,
}

export default wrapper.withRedux(App)
