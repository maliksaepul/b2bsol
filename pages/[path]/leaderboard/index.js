import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Leaderboard from '@/components/templates/leaderboard'
import Layout from '@/hoc/layouts/ondemand'
import React from 'react'
import withAuth from '@/hoc/wrappers/withAuthStrict'
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

export default withAuth(LeaderboarPage)
