// Libraries
import Section from '@/components/atoms/section'
import React, { useState } from 'react'
import Layout from '@/hoc/layouts/common'
import About from '@/components/templates/about'
import Explore from '@/containers/ExploreContainer'
import Statistic from '@/components/templates/statistic'
import Schedule from '@/containers/SchedulesContainer'
import Gamification from '@/components/templates/gamification'
import PodcastRecomendation from '@/components/templates/podcast-recomendation'
import MasterCourse from '@/containers/MasterCourseContainer'
import Modal from '@/components/molecules/modal'

// Styles

const Home = () => {
    const [closeModal, setCloseModal] = useState(false)
    const modalClose = () => {
        setCloseModal(!closeModal)
    }
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
            <Modal
                illu={'/images/loginsign_1.png'}
                title={'Selamat datang di Inspigo Learning Platform !'}
                description={
                    'Kembangkan diri bersama dan nikmati ragam fitur pembelajaran menarik dengan berbagai topik.'
                }
                ctaLabel="explore"
                cta={() => {
                    modalClose()
                }}
                close={closeModal}
            />
        </>
    )
}

export default Home
