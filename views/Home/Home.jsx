// Libraries
import Section from '@/components/atoms/section'
import React from 'react'
import Layout from '@/hoc/layouts/common'
import About from '@/components/templates/about'
import Explore from '@/containers/ExploreContainer'
import Statistic from '@/components/templates/statistic'
import Schedule from '@/containers/SchedulesContainer'
import Gamification from '@/components/templates/gamification'
import PodcastRecomendation from '@/components/templates/podcast-recomendation'
import MasterCourse from '@/containers/MasterCourseContainer'

// Styles

const Home = () => {
    return (
        <>
            <Layout>
                <Section>
                    <About subtitle={'Learning Platform'} />
                </Section>
                <Section>
                    <Explore user={{ name: 'Malik' }} />
                </Section>
                <Section>
                    <Statistic />
                </Section>
                <Section>
                    <Schedule />
                </Section>
                <Section>
                    <Gamification />
                </Section>

                <PodcastRecomendation />

                <Section variant={'primary'}>
                    <MasterCourse />
                </Section>
            </Layout>
        </>
    )
}

export default Home
