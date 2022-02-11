// import dynamic from 'next/dynamic'
// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import routes from '@/utils/routes'
import Fade from 'react-reveal/Fade'

/**
 * Components
 */
import Section from '@/components/atoms/section'
import Layout from '@/hoc/layouts/common'
// import Explore from '@/containers/sections/Explore'
// import Statistic from '@/containers/sections/Statistic'
import Schedule from '@/containers/sections/Schedules'
import Achievment from '@/components/templates/achievment'
// import MasterCourse from '@/containers/sections/MasterCourse'
import PodcastRecomended from '@/containers/sections/PodcastRecomended'
// import MasterCourse from '@/containers/sections/MasterCourse'
import InspiBook from '@/components/templates/inspi-book'
import Hero from '@/components/templates/hero'
// const Section = dynamic(() => import('@/components/atoms/section'))
// const Layout = dynamic(() => import('@/hoc/layouts/common'))
// const About = dynamic(() => import('@/components/templates/about'))
// // const Explore = dynamic(() => import('@/containers/sections/Explore'))
// const Gamification = dynamic(() =>
//     import('@/components/templates/gamification')
// )
// const Schedule = dynamic(() => import('@/containers/sections/Schedules'))
// const PodcastRecomended = dynamic(() =>
//     import('@/containers/sections/PodcastRecomended')
// )
// const InspiBook = dynamic(() => import('@/components/templates/inspi-book'))

const Home = ({ account, path }) => {
    return (
        <>
            <Layout>
                <div className="p-x-g">
                    <Hero title={path.name} />
                </div>
                <div className="p-x-g">
                    <Fade>
                        <Schedule />
                    </Fade>
                </div>

                <Section>
                    <Fade>
                        <Achievment />
                    </Fade>
                </Section>

                <PodcastRecomended
                    path={path.path}
                    title={'Recommended Podcasts'}
                    description={
                        'Kembangkan dirimu melalui beragam konten pembelajaran berbasis audio yang dapat kamu dengarkan kapan pun dan di mana pun!'
                    }
                    cta={{
                        label: 'Eksplor',
                        url: routes.audiolearning(path.path),
                    }}
                />

                <Section>
                    <Fade>
                        <InspiBook path={path.path} />
                    </Fade>
                </Section>
            </Layout>
        </>
    )
}

Home.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Home
