import dynamic from 'next/dynamic'
// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import routes from '@/utils/routes'

/**
 * Components
 */
// import Section from '@/components/atoms/section'
// import Layout from '@/hoc/layouts/common'
// import About from '@/components/templates/about'
// import Explore from '@/containers/sections/Explore'
// import Statistic from '@/containers/sections/Statistic'
// import Schedule from '@/containers/sections/Schedules'
// import Gamification from '@/components/templates/gamification'
// import MasterCourse from '@/containers/sections/MasterCourse'
// import PodcastRecomended from '@/containers/sections/PodcastRecomended'
// import MasterCourse from '@/containers/sections/MasterCourse'
// import InspiBook from '@/components/templates/inspi-book'
const Section = dynamic(() => import('@/components/atoms/section'))
const Layout = dynamic(() => import('@/hoc/layouts/common'))
const About = dynamic(() => import('@/components/templates/about'))
const Explore = dynamic(() => import('@/containers/sections/Explore'))
const Gamification = dynamic(() =>
    import('@/components/templates/gamification')
)
const Schedule = dynamic(() => import('@/containers/sections/Schedules'))
const PodcastRecomended = dynamic(() =>
    import('@/containers/sections/PodcastRecomended')
)
const InspiBook = dynamic(() => import('@/components/templates/inspi-book'))

const Home = ({ account, path }) => {
    return (
        <>
            <Layout>
                <Section>
                    <About title={path.name} subtitle={'Learning Platform'} />
                </Section>
                <Section>
                    <Explore user={{ name: account.name }} path={path.path} />
                </Section>
                {/* <Section>
                    <Statistic id={1} />
                </Section> */}
                <Section>
                    <Schedule />
                </Section>
                <Section>
                    <Gamification />
                </Section>

                <PodcastRecomended
                    path={path.path}
                    title={'Recommended Podcast'}
                    description={
                        'Kembangkan dirimu melalui beragam konten pembelajaran berbasis audio yang dapat kamu dengarkan kapan pun dan di mana pun!'
                    }
                    cta={{
                        label: 'Eksplor',
                        url: routes.audiolearning(path.path),
                    }}
                />

                {/* <Section variant={'primary'}>
                    <MasterCourse />
                </Section> */}
                {/* <Photobooth
                    title={'Photobooth'}
                    description={'Give your best smile'}></Photobooth>
                 */}
                <InspiBook path={path.path} />
            </Layout>
        </>
    )
}

Home.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Home
