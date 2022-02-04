import React from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
// import Layout from '@/hoc/layouts/ondemand'
// import Section from '@/components/atoms/section'
// import About from '@/components/templates/about'
// import Grid from '@/components/atoms/grid'
// import AudioCard from '@/containers/components/cards/AudioCard'
// import Contents from '@/components/organisms/contents'
// import Toolbar from '@/containers/components/bars/Toolbar'
import { TOOLBAR_PODCAST } from '@/redux/types'
import { content } from '@/utils/apiroutelist'
import Pagination from '@/components/molecules/pagination'
import { defaultContentLimit } from '@/utils/constants'
// import SkeletonContent from '@/components/templates/skeletoncontent'
const Layout = dynamic(() => import('@/hoc/layouts/ondemand'))
const Section = dynamic(() => import('@/components/atoms/section'))
const About = dynamic(() => import('@/components/templates/about'))
const Grid = dynamic(() => import('@/components/atoms/grid'))
const AudioCard = dynamic(() =>
    import('@/containers/components/cards/AudioCard')
)
const Contents = dynamic(() => import('@/components/organisms/contents'))
const Toolbar = dynamic(() => import('@/containers/components/bars/Toolbar'))
const SkeletonContent = dynamic(() =>
    import('@/components/templates/skeletoncontent')
)

const AudioLearning = ({ podcast, onFetchData, path, loading }) => {
    const renderAudioCard = () => {
        if (loading) {
            return <SkeletonContent />
        } else {
            return podcast.results.map((c, i) => (
                <AudioCard audio={c} key={i} />
            ))
        }
    }

    return (
        <Layout>
            <Section>
                <About
                    title={'Audio Learning'}
                    subtitle={''}
                    description={'Pembelajaran berbasis audio yang fleksibel'}
                    height={'10rem'}
                />
            </Section>
            <Section>
                <Contents>
                    <Toolbar
                        api={{
                            url: content.podcast(path),
                            type: TOOLBAR_PODCAST,
                        }}
                    />
                    <Grid>
                        {renderAudioCard()} <div></div>{' '}
                    </Grid>
                    <Pagination
                        pages={Number(podcast.total) / defaultContentLimit || 0}
                        limit={defaultContentLimit}
                        toPage={onFetchData}
                    />
                </Contents>
            </Section>
        </Layout>
    )
}

AudioLearning.propTypes = {
    podcast: PropTypes.any,
    onFetchData: PropTypes.func,
    path: PropTypes.any,
    loading: PropTypes.bool,
}

export default AudioLearning
