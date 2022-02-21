import React from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import Pagination from '@/components/molecules/pagination'
import { defaultContentLimit } from '@/utils/constants'
import NoContent from '@/components/templates/nocontent'
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

const Podcast = ({
    title,
    description,
    podcast,
    onFetchData,
    path,
    loading,
}) => {
    const renderAudioCard = () => {
        if (loading.state) {
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
                    title={title}
                    subtitle={''}
                    description={description}
                    height={'10rem'}
                />
            </Section>
            <Section>
                <Contents>
                    <Toolbar fetchData={onFetchData} />
                    {podcast?.results?.length === 0 && !loading.state ? (
                        <NoContent />
                    ) : (
                        <>
                            <Grid>
                                {renderAudioCard()} <div></div>{' '}
                            </Grid>
                            <Pagination
                                pages={
                                    Number(podcast.total) /
                                        defaultContentLimit || 0
                                }
                                limit={defaultContentLimit}
                                toPage={onFetchData}
                            />
                        </>
                    )}
                </Contents>
            </Section>
        </Layout>
    )
}

Podcast.propTypes = {
    podcast: PropTypes.any,
    onFetchData: PropTypes.func,
    path: PropTypes.any,
    loading: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Podcast
