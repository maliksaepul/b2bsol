import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { connect } from 'react-redux'
import { fetchDynamicContent } from '@/redux/actions/content/_ondemand'
import { defaultContentLimit } from '@/utils/constants'
const InspiBook = dynamic(() => import('@/views/InspiBook'))
const Podcast = dynamic(() => import('@/views/Podcast'))

const PodcastCategoriesPage = props => {
    const router = useRouter()
    const { categories } = router.query
    const [dataContent, setDataContent] = useState({ results: [] })
    const [dynamicLink, setDynamicLink] = useState(router.asPath)
    const [titlePage, setTitlePage] = useState('')
    const [descriptionPage, setDescriptionPage] = useState('')

    useEffect(() => {
        handleFetchPodcast(0)
    }, [router.isReady])

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    useEffect(() => {
        getPageData()
    }, [props.navbar.length])

    const handleFetchPodcast = async (params, url) => {
        const response = await props.fetchDynamicContent(url || dynamicLink, {
            limit: defaultContentLimit,
            skip: params.skip || 0,
            ...params,
        })
        if (response.status === 200) {
            setDataContent(response.data.data)
        }
    }

    const getPageData = (url = router.asPath) => {
        const path = url.replace(`/${props.path.path}`, '')
        const page = props.navbar.find(val => val.path === path)
        setTitlePage(page?.title)
        setDescriptionPage(page?.secondaryTitle)
    }

    const handleRouteChange = (url, { shallow }) => {
        setDynamicLink(url)
        handleFetchPodcast(0, url)
        getPageData(url)
    }

    switch (categories) {
        case 'inspibook':
            return (
                <>
                    <Head>
                        <title>{categories}</title>
                    </Head>
                    <InspiBook
                        inspibook={dataContent}
                        path={props.path.path}
                        loading={props.loading}
                        onFetchData={handleFetchPodcast}
                        title={titlePage}
                        description={descriptionPage}
                    />
                </>
            )
        default:
            return (
                <>
                    <Head>
                        <title>{categories}</title>
                    </Head>
                    <Podcast
                        podcast={dataContent}
                        path={props.path.path}
                        loading={props.loading}
                        onFetchData={handleFetchPodcast}
                        title={titlePage}
                        description={descriptionPage}
                    />
                </>
            )
    }
}

PodcastCategoriesPage.propTypes = {
    path: PropTypes.any,
    fetchDynamicContent: PropTypes.func,
    loading: PropTypes.any,
    navbar: PropTypes.array,
}

const mapStateToProps = ({ path, loading, navbar }) => ({
    path,
    loading,
    navbar,
})

export default connect(mapStateToProps, { fetchDynamicContent })(
    PodcastCategoriesPage
)
