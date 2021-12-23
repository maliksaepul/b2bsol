import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const EmbedPlayer = ({ src, token }) => {
    return (
        <div className={styles.player}>
            <iframe
                title="Inspigo Player"
                src={src}
                frameBorder="0"
                allowFullScreen={'allowfullscreen'}></iframe>
        </div>
    )
}

EmbedPlayer.propTypes = {
    src: PropTypes.string,
    token: PropTypes.string,
}

export default EmbedPlayer
