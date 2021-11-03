import About from '@/components/templates/about'
import Layout from '@/hoc/layouts/common'
import Section from '@/components/atoms/section'
import Banner4x1 from '@/components/templates/banner/4x1'
import Contents from '@/components/molecules/contents'
import React from 'react'

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
                        <div>video grid</div>
                    </Contents>
                </Section>
            </Layout>
        </>
    )
}

export default videolearning
