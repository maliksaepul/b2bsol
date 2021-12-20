import EmbedPlayer from '@/components/organisms/embed-player'
import WithoutHeader from '@/hoc/layouts/withoutHeader'
import React from 'react'
import PropTypes from 'prop-types'

const PodcastPlayer = ({ alias }) => {
    return (
        <WithoutHeader>
            <EmbedPlayer alias={alias} />
        </WithoutHeader>
    )
}

PodcastPlayer.propTypes = {
    alias: PropTypes.string,
}

export default PodcastPlayer
