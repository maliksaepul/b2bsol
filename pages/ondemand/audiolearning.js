import Section from '@/components/atoms/section'
// import Banner4x1 from '@/components/templates/banner/4x1'
import About from '@/components/templates/about'
import Layout from '@/hoc/layouts/ondemand'
import Contents from '@/containers/ContentContainer'
import React from 'react'
import AudioGrid from '@/containers/AudioGridContainer'
const audiolearning = () => {
    return (
        <>
            <Layout>
                <Section>
                    <About
                        title={'Audio Learning'}
                        subtitle={''}
                        description={
                            'Pembelajaran berbasis audio yang fleksibel'
                        }
                        height={'10rem'}
                    />
                </Section>
                {/* <Section>
                    <Banner4x1 />
                </Section> */}
                <Section>
                    <Contents>
                        <AudioGrid />
                    </Contents>
                </Section>
            </Layout>
        </>
    )
}

export default audiolearning
