import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/helpers'
// import { useRouter } from 'next/router'

const VideoCard = ({ video }) => {
    // const router = useRouter()

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_self')
        }
    }
    return (
        <div className={styles.object}>
            <img
                src={video.cover}
                alt={video.title}
                onClick={() => renderLink(video.alias)}
            />
            <div>
                <h6>{maxTitlesLength(video.title)}</h6>
                <p className={'p2'}>{video.author}</p>
            </div>
        </div>
    )
}

VideoCard.propTypes = {
    video: PropTypes.shape({
        cover: PropTypes.string,
        title: PropTypes.string,
        alias: PropTypes.string,
        author: PropTypes.string,
        deeplink: PropTypes.string,
    }).isRequired,
}

export default VideoCard
