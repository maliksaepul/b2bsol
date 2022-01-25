import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Contents from '@/components/organisms/contents'
import Grid from '@/components/atoms/grid'
import Toolbar from '@/containers/ToolbarContainer'
import VideoCard from '@/components/organisms/video-card'
import { API_VIDEO } from '@/utils/apiroutelist'

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
                    <Toolbar api={API_VIDEO} />
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
