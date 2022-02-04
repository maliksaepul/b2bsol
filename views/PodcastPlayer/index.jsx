import EmbedPlayer from '@/components/organisms/embed-player'
import WithoutHeader from '@/hoc/layouts/withoutHeader'
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '@/components/organisms/carousel'
import AudioCard from '@/containers/components/cards/AudioCard'
import Section from '@/components/atoms/section'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import SkeletonContent from '@/components/templates/skeletoncontent'
import { LOCAL_STORAGE, PLAYER } from '@/utils/constants'

const PodcastPlayer = ({ alias, relatedPodcast, loading }) => {
    return (
        <WithoutHeader>
            <div className={styles.container}>
                <Section>
                    <EmbedPlayer
                        src={`${PLAYER}/${alias}?token=${localStorage.getItem(
                            LOCAL_STORAGE.REFRESH_TOKEN
                        )}&hide-header=1&hide-footer=1`}
                    />
                </Section>
                <Section>
                    <div className={styles.content}>
                        <div className={styles.content_container}>
                            <Label title="Related Podcast" />
                            <Carousel>
                                {loading ? (
                                    <SkeletonContent />
                                ) : (
                                    relatedPodcast.map((c, i) => (
                                        <div
                                            style={{ paddingRight: '1rem' }}
                                            key={i}>
                                            <AudioCard audio={c} />
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

PodcastPlayer.propTypes = {
    alias: PropTypes.string,
    relatedPodcast: PropTypes.array,
    loading: PropTypes.bool,
}

export default PodcastPlayer
