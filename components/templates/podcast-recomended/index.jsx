import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Recomendation from '../recomendation'
import Marquee from '@/components/molecules/marquee'

const PodcastRecomended = props => {
    useEffect(() => {
        props.fetchRelatedPodcast(props.path)
    }, [])

    const renderPodcast = () => (
        <Marquee contents={props.podcast} animationDuration="32s" />
    )

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
    path: PropTypes.any,
}

export default PodcastRecomended
