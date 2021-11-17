import Layout from '@/hoc/layouts/ondemand'
import About from '@/components/templates/about'
import Section from '@/components/atoms/section'
import Banner4x1 from '@/components/templates/banner/4x1'
import Contents from '@/components/molecules/contents'
import React from 'react'

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
                <Section>
                    <Banner4x1 />
                </Section>
                <Section>
                    <Contents>
                        <div className="">
                            <div className="">search component</div>
                            <div className="">filter component</div>
                            <div className="">sort component</div>
                        </div>
                        <div>audio playbook grid</div>
                    </Contents>
                </Section>
            </Layout>
        </>
    )
}

export default audioplaybook
