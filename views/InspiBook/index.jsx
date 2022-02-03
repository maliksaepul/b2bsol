import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/hoc/layouts/ondemand'
import Section from '@/components/atoms/section'
import About from '@/components/templates/about'
import Grid from '@/components/atoms/grid'
import Contents from '@/components/organisms/contents'
import Toolbar from '@/containers/components/bars/Toolbar'
import { content } from '@/utils/apiroutelist'
import InspiBookCard from '@/components/organisms/inspibook-card'
import { TOOLBAR_INSPIBOOK } from '@/redux/types'
import SkeletonContent from '@/components/templates/skeletoncontent'
import Pagination from '@/components/molecules/pagination'
import { defaultContentLimit } from '@/utils/constants'

const InspiBook = ({ inspibook, onFetchData, path, loading }) => {
    const renderAudioCard = () => {
        if (loading) {
            return <SkeletonContent />
        } else {
            return inspibook.results.map((c, i) => (
                <InspiBookCard audio={c} key={i} path={path} />
            ))
        }
    }

    return (
        <Layout>
            <Section>
                <About
                    title={'InspiBook'}
                    subtitle={''}
                    description={'Dengarkan dan baca ringkasan buku terbaik'}
                    height={'10rem'}
                />
            </Section>
            <Section>
                <Contents>
                    <Toolbar
                        api={{
                            url: content.inspibook(path),
                            type: TOOLBAR_INSPIBOOK,
                        }}
                    />
                    <Grid>{renderAudioCard()}</Grid>
                </Contents>
                <Pagination
                    pages={Number(inspibook.total) / defaultContentLimit || 0}
                    limit={defaultContentLimit}
                    toPage={onFetchData}
                />
            </Section>
        </Layout>
    )
}

InspiBook.propTypes = {
    inspibook: PropTypes.any,
    onFetchData: PropTypes.func,
    path: PropTypes.any,
    loading: PropTypes.bool,
}

export default InspiBook
