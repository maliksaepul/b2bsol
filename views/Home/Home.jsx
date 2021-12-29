// Libraries
import Section from '@/components/atoms/section'
import React from 'react'
import Layout from '@/hoc/layouts/common'
import About from '@/components/templates/about'
import Explore from '@/containers/ExploreContainer'
import Statistic from '@/containers/StatisticContainer'
import Schedule from '@/containers/SchedulesContainer'
import Gamification from '@/components/templates/gamification'
import PodcastRecomendation from '@/components/templates/podcast-recomendation'
import MasterCourse from '@/containers/MasterCourseContainer'
import Modal from '@/components/molecules/modals/modal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { modalClose } from '@/redux/actions/modal_action'
import GeneralModal from '@/components/molecules/modals/general-modal'

// Styles

const Home = ({ closeModal, modalClose }) => {
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
                    <Statistic id={1} />
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
            <Modal close={closeModal}>
                <GeneralModal
                    illu={'/images/loginsign_1.png'}
                    title={'Selamat datang di Inspigo Learning Platform !'}
                    description={
                        'Kembangkan diri bersama dan nikmati ragam fitur pembelajaran menarik dengan berbagai topik.'
                    }
                    ctaLabel="explore"
                    cta={() => {
                        modalClose(!closeModal)
                    }}
                />
            </Modal>
        </>
    )
}

Home.propTypes = {
    modalClose: PropTypes.func,
    closeModal: PropTypes.bool,
}

const mapStateToProps = ({ closeModal }) => ({
    closeModal,
})

export default connect(mapStateToProps, { modalClose })(Home)
