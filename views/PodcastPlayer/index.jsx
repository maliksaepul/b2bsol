import EmbedPlayer from '@/components/organisms/embed-player'
import WithoutHeader from '@/hoc/layouts/withoutHeader'
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '@/components/organisms/carousel'
import AudioCard from '@/containers/AudioCardContainer'
import Section from '@/components/atoms/section'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'

const PodcastPlayer = ({ alias, relatedPodcast }) => {
    return (
        <WithoutHeader>
            <div className={styles.container}>
                <Section>
                    <EmbedPlayer
                        src={`https://player.inspigo.id/${alias}?token=`}
                    />
                </Section>
                <Section>
                    <div className={styles.content}>
                        <div className={styles.content_container}>
                            <Label title="Related Podcast" />
                            <Carousel>
                                {relatedPodcast.map((c, i) => (
                                    <div
                                        style={{ paddingRight: '1rem' }}
                                        key={i}>
                                        <AudioCard audio={c} />
                                    </div>
                                ))}
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
}

export default PodcastPlayer
