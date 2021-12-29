import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/common'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/ToolbarContainer'
import Grid from '@/components/atoms/grid'
import BookCard from '@/components/organisms/book-card'
import { API_APB } from '@/utils/apiroutelist'

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
                    <Toolbar api={API_APB} />
                    <Grid variant="small">{renderAudioCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

AudioPlaybook.propTypes = {
    apb: PropTypes.array,
}

export default AudioPlaybook
