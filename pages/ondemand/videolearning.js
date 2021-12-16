import About from '@/components/templates/about'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
// import Banner4x1 from '@/components/templates/banner/4x2'
import Contents from '@/containers/ContentContainer'
import React from 'react'
import VideoGrid from '@/containers/VideoGridContainer'

const videolearning = () => {
    return (
        <>
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
                        <VideoGrid />
                    </Contents>
                </Section>
            </Layout>
        </>
    )
}

export default videolearning
