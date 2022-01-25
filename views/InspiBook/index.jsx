import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/ToolbarContainer'
import { API_PODCAST } from '@/utils/apiroutelist'
import InspiBookCard from '@/components/organisms/inspibook-card'

const InspiBook = ({ inspibook, fetchData, path }) => {
    const renderAudioCard = () => {
        // console.log(inspibook);
        // return null
        return inspibook.map((c, i) => (
            <InspiBookCard audio={c} key={i} path={path} />
        ))
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
    inspibook: PropTypes.array,
    fetchData: PropTypes.func,
    path: PropTypes.any,
}

export default InspiBook
