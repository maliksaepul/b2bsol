// Libraries
import React from 'react'
import Head from 'next/head'
import Layout from '@/hoc/layouts/common'
import About from '@/components/templates/about'
import Explore from '@/components/templates/explore'
import Statistic from '@/components/templates/statistic'
import Schedule from '@/components/templates/schedule'
import Section from '@/components/atoms/section'
import Gamification from '@/components/templates/gamification'
import PodcastRecomendation from '@/components/templates/podcast-recomendation'
import MasterCourse from '@/components/templates/master-course'

// Views

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>

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
        </React.Fragment>
    )
}

export default HomePage
