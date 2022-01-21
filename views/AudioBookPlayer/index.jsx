import EmbedPlayer from '@/components/organisms/embed-player'
import WithoutHeader from '@/hoc/layouts/withoutHeader'
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '@/components/organisms/carousel'
import BookCard from '@/containers/BookCardContainer'
import Section from '@/components/atoms/section'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'

const AudioBookPlayer = ({ alias, relatedAudioPlaybook }) => {
    return (
        <WithoutHeader>
            <div className={styles.container}>
                <Section>
                    <EmbedPlayer
                        src={`https://staging-player.inspigo.id/v2/HBYEYAQZZP?hide-header=1&hide-footer=1`}
                    />
                </Section>
                <Section>
                    <div className={styles.content}>
                        <div className={styles.content_container}>
                            <Label title="Similar Audio PlayBook" />
                            <Carousel>
                                {relatedAudioPlaybook.map((c, i) => (
                                    <div
                                        style={{ paddingRight: '1rem' }}
                                        key={i}>
                                        <BookCard book={c} />
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

AudioBookPlayer.propTypes = {
    alias: PropTypes.string,
    relatedAudioPlaybook: PropTypes.array,
}

export default AudioBookPlayer
