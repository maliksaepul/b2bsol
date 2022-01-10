import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Recomendation from '../recomendation'
import AudioCard from '@/components/organisms/audio-card'

const PodcastRecomended = props => {
    useEffect(() => {
        props.fetchRelatedPodcast()
    }, [])

    const renderPodcast = () => {
        return props.podcast.map((c, i) => {
            return (
                <div className="p-x-1" key={i}>
                    <AudioCard audio={c} withLabel={false} />
                </div>
            )
        })
    }
    return (
        <Recomendation
            title={props.title}
            description={props.description}
            cta={props.cta}>
            {renderPodcast()}
        </Recomendation>
    )
}

PodcastRecomended.propTypes = {
    podcast: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    cta: PropTypes.object,
    fetchRelatedPodcast: PropTypes.func,
}

export default PodcastRecomended
