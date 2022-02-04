import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/components/bars/Toolbar'
import Grid from '@/components/atoms/grid'
import BookCard from '@/containers/components/cards/BookCard'
import { API_APB } from '@/utils/apiroutelist'
import { TOOLBAR_APB } from '@/redux/types'

const AudioPlaybook = ({ apb }) => {
    const renderAudioCard = () => {
        return apb.map((c, i) => <BookCard book={c} key={i} />)
    }

    return (
        <Layout>
            <Section>
                <About
                    title={'Audio Playbook'}
                    subtitle={''}
                    description={'Pembelajaran berbasis audio yang fleksibel'}
                    height={'10rem'}
                />
            </Section>
            <Section>
                <Contents>
                    <Toolbar api={{ url: API_APB, type: TOOLBAR_APB }} />
                    <Grid>{renderAudioCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

AudioPlaybook.propTypes = {
    apb: PropTypes.array,
}

export default AudioPlaybook
