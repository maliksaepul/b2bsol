import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/common'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Contents from '@/containers/ContentContainer'
import Grid from '@/components/atoms/grid'
import AudioCard from '@/components/organisms/audio-card'

const AudioLearning = ({ podcast }) => {
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
                    <Grid>{renderAudioCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

AudioLearning.propTypes = {
    podcast: PropTypes.array,
}

export default AudioLearning
