import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/components/bars/Toolbar'
import { content } from '@/utils/apiroutelist'
import InspiBookCard from '@/components/organisms/inspibook-card'
import { TOOLBAR_INSPIBOOK } from '@/redux/types'

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
                    description={'Dengarkan dan baca ringkasan buku terbaik'}
                    height={'10rem'}
                />
            </Section>
            <Section>
                <Contents>
                    <Toolbar
                        api={{
                            url: content.inspibook(path),
                            type: TOOLBAR_INSPIBOOK,
                        }}
                    />
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
