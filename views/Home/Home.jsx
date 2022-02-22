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
import Schedule from '@/containers/sections/Schedules'
import Achievment from '@/components/templates/achievment'
import PodcastRecomended from '@/containers/sections/PodcastRecomended'
import InspiBook from '@/components/templates/inspi-book'
import Hero from '@/components/templates/hero'

const Home = ({ account, path }) => {
    return (
        <>
            <Layout>
                <div className="p-x-g">
                    <Hero title={path?.name || ''} />
                </div>
                <div className="p-x-g">
                    <Fade>
                        <Schedule />
                    </Fade>
                </div>

                <Section>
                    <Fade>
                        <InspiBook path={path?.path} />
                    </Fade>
                </Section>

                <PodcastRecomended
                    path={path?.path}
                    title={'Audio Learning'}
                    description={
                        'Kembangkan dirimu melalui beragam konten pembelajaran berbasis audio yang dapat kamu dengarkan kapan pun dan di mana pun!'
                    }
                    cta={{
                        label: 'Eksplor',
                        url: routes.audiolearning(path?.path),
                    }}
                />
                <Section>
                    <Fade>
                        <Achievment />
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
