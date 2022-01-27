import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import AudioCard from '@/containers/components/cards/AudioCard'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/components/bars/Toolbar'
import { TOOLBAR_PODCAST } from '@/redux/types'
import { content } from '@/utils/apiroutelist'
import SkeletonContent from '@/components/templates/skeletoncontent'

const AudioLearning = ({ podcast, fetchData, path, loading }) => {
    const renderAudioCard = () => {
        if (loading) {
            return <SkeletonContent />
        } else {
            return podcast.map((c, i) => <AudioCard audio={c} key={i} />)
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
                    <Grid>{renderAudioCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

AudioLearning.propTypes = {
    podcast: PropTypes.array,
    fetchData: PropTypes.func,
    path: PropTypes.any,
    loading: PropTypes.bool,
}

export default AudioLearning
