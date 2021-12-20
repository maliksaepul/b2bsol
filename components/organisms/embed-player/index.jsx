import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const EmbedPlayer = ({ alias, token }) => {
    return (
        <div className={styles.player}>
            <iframe
                title="Podcast Player"
                src={`https://player.inspigo.id/${alias}?token=${token}`}
                frameBorder="0"
                allowFullScreen={'allowfullscreen'}></iframe>
        </div>
    )
}

EmbedPlayer.propTypes = {
    alias: PropTypes.string,
    token: PropTypes.string,
}

export default EmbedPlayer
