import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/function'
import { useRouter } from 'next/router'
import routes from '@/utils/routes'

const AudioCard = ({ audio }) => {
    const router = useRouter()

    const renderLink = (link = null) => {
        if (link) {
            router.push(routes.audiolearning(link))
        }
    }
    return (
        <div className={styles.object}>
            <img
                src={audio.cover}
                alt={audio.title}
                onClick={() => renderLink(audio.alias)}
            />
            <div>
                <h6>{maxTitlesLength(audio.title)}</h6>
                <p className={'p2'}>{audio.author}</p>
            </div>
        </div>
    )
}

AudioCard.propTypes = {
    audio: PropTypes.shape({
        cover: PropTypes.string,
        title: PropTypes.string,
        alias: PropTypes.string,
        author: PropTypes.string,
        deeplink: PropTypes.string,
    }).isRequired,
}

export default AudioCard
