// import Section from '@/components/atoms/section'
// import About from '@/components/templates/about'
// import Leaderboard from '@/components/templates/leaderboard'
// import Layout from '@/hoc/layouts/ondemand'
import React from 'react'
import dynamic from 'next/dynamic'
const Leaderboard = dynamic(() => import('@/components/templates/leaderboard'))
const Layout = dynamic(() => import('@/hoc/layouts/ondemand'))
const Section = dynamic(() => import('@/components/atoms/section'))
const About = dynamic(() => import('@/components/templates/about'))

const LeaderboarPage = () => {
    return (
        <>
            <Layout>
                <Section>
                    <About
                        title={'Leaderboard'}
                        subtitle={''}
                        description={
                            '<p>Ayo capai peringkat teratas dan menangkan hadiah menarik dengan cara menyelesaikan seluruh konten pembelajaran yang ada! <br/> Persentase angka menunjukkan seberapa unggul pencapaian belajar kamu di antara anggota organisasimu. </p>'
                        }
                    />
                </Section>

                <Section>
                    <Leaderboard />
                </Section>
            </Layout>
        </>
    )
}

export default LeaderboarPage
