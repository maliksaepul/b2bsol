import Layout from '@/hoc/layouts/ondemand'
import About from '@/components/templates/about'
import Section from '@/components/atoms/section'
// import Banner4x1 from '@/components/templates/banner/4x1'
import Contents from '@/containers/ContentContainer'
import React from 'react'
import ApbGrid from '@/containers/ApbGridContainer'

const audioplaybook = () => {
    return (
        <>
            <Layout>
                <Section>
                    <About
                        title={'Audio Playbook'}
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
                        <ApbGrid />
                    </Contents>
                </Section>
            </Layout>
        </>
    )
}

export default audioplaybook
