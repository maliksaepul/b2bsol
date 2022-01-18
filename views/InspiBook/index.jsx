import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/common'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/ToolbarContainer'
import { API_PODCAST } from '@/utils/apiroutelist'
import InspiBookCard from '@/components/organisms/inspibook-card'

const InspiBook = ({ podcast, fetchData }) => {
    const renderAudioCard = () => {
        return podcast.map((c, i) => <InspiBookCard audio={c} key={i} />)
    }

    return (
        <Layout>
            <Section>
                <About
                    title={'Inspi Book'}
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

InspiBook.propTypes = {
    podcast: PropTypes.array,
    fetchData: PropTypes.func,
}

export default InspiBook
