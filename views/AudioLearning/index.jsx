import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import AudioCard from '@/containers/AudioCardContainer'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/ToolbarContainer'
import { API_PODCAST } from '@/utils/apiroutelist'

const AudioLearning = ({ podcast, fetchData }) => {
    const renderAudioCard = () => {
        return podcast.map((c, i) => <AudioCard audio={c} key={i} />)
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
                    <Toolbar api={API_PODCAST} />
                    <Grid>{renderAudioCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

AudioLearning.propTypes = {
    podcast: PropTypes.array,
    fetchData: PropTypes.func,
}

export default AudioLearning
