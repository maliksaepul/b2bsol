import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Layout from '@/hoc/layouts/common'
import React from 'react'
const LeaderboarPage = () => {
    return (
        <>
        <Layout>
        <Section>
                <About title={"Leaderboard"} subtitle={""} description={"<p>Ayo capai peringkat teratas dan menangkan hadiah menarik dengan cara menyelesaikan seluruh konten pembelajaran yang ada!</p>"} />
            </Section>
        
            <Section>
                <div className="">
                   statistik component
                </div>
                <div>
                    leaderboard component
                </div>
            </Section>
        </Layout>
    </>
    )
}

export default LeaderboarPage;