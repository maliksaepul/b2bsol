import EmbedPlayer from '@/components/organisms/embed-player'
import WithoutHeader from '@/hoc/layouts/withoutHeader'
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '@/components/organisms/carousel'
import Section from '@/components/atoms/section'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import InspiBookCard from '@/containers/components/cards/InspiBookCard'
import SkeletonContent from '@/components/templates/skeletoncontent'
import { PLAYER } from '@/utils/constants'

const InspiBookPlayer = ({ alias, relatedInspibook, path, loading }) => {
    return (
        <WithoutHeader>
            <div className={styles.container}>
                <Section>
                    <EmbedPlayer
                        src={`${PLAYER}/HBYEYAQZZP?hide-header=1&hide-footer=1`}
                    />
                </Section>
                <Section>
                    <div className={styles.content}>
                        <div className={styles.content_container}>
                            <Label title="Similar Audio PlayBook" />
                            <Carousel>
                                {loading ? (
                                    <SkeletonContent />
                                ) : (
                                    relatedInspibook.map((c, i) => (
                                        <div
                                            style={{ paddingRight: '1rem' }}
                                            key={i}>
                                            <InspiBookCard
                                                audio={c}
                                                path={path}
                                            />
                                        </div>
                                    ))
                                )}
                            </Carousel>
                        </div>
                    </div>
                </Section>
            </div>
        </WithoutHeader>
    )
}

InspiBookPlayer.propTypes = {
    alias: PropTypes.string,
    relatedInspibook: PropTypes.array,
    path: PropTypes.any,
    loading: PropTypes.bool,
}

export default InspiBookPlayer
