import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/common'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Contents from '@/containers/ContentContainer'
import Grid from '@/components/atoms/grid'

import VideoCard from '@/components/organisms/video-card'

const VideoLearning = ({ videos }) => {
    const renderVideoCard = () => {
        return videos.map((c, i) => <VideoCard video={c} key={i} />)
    }

    return (
        <Layout>
            <Section>
                <About
                    title={'Video Learning'}
                    subtitle={''}
                    description={
                        'lorem ipsum dolor sit amet, consectetur adipiscing'
                    }
                    height={'10rem'}
                />
            </Section>
            {/* <Section>
            <Banner4x1 />
        </Section> */}
            <Section>
                <Contents>
                    <Grid variant={'large'}>{renderVideoCard()}</Grid>
                </Contents>
            </Section>
        </Layout>
    )
}

VideoLearning.propTypes = {
    videos: PropTypes.array,
}

export default VideoLearning
