// Libraries
import Section from '@/components/atoms/section'
import React from 'react'
import Layout from '@/hoc/layouts/common'
import About from '@/components/templates/about'
import Explore from '@/containers/ExploreContainer'
import Statistic from '@/containers/StatisticContainer'
import Schedule from '@/containers/SchedulesContainer'
import Gamification from '@/components/templates/gamification'
// import MasterCourse from '@/containers/MasterCourseContainer'
import PropTypes from 'prop-types'
import PodcastRecomended from '@/containers/PodcastRecomendedContainer'
import MasterCourse from '@/containers/MasterCourseContainer'
import InspiBook from '@/components/templates/InspiBook'
import Photobooth from '@/components/templates/photobooth'

// Styles

const Home = ({ account, path }) => {
    return (
        <>
            <Layout>
                <Section>
                    <About title={path.name} subtitle={'Learning Platform'} />
                </Section>
                <Section>
                    <Explore user={{ name: account.name }} />
                </Section>
                <Section>
                    <Statistic id={1} />
                </Section>
                <Section>
                    <Schedule />
                </Section>
                <Section>
                    <Gamification />
                </Section>

                <PodcastRecomended
                    title={'Podcast Recomendation'}
                    description={'Dengarkan di Inspigo'}
                    cta={{ label: 'explore' }}
                />

                <Section variant={'primary'}>
                    <MasterCourse />
                </Section>
                <Photobooth
                    title={'Photobooth'}
                    description={'Give your best smile'}></Photobooth>
                <InspiBook />
            </Layout>
        </>
    )
}

Home.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Home
