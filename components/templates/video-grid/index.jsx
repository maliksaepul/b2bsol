import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/function'

const VideoGrid = ({ vod, fetchVod }) => {
    useEffect(() => {
        fetchVod()
    }, [])

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_blank')
        }
    }

    const renderVideoCard = () => {
        return vod.map((c, i) => (
            <div key={i} className={styles.object}>
                <img
                    src={c.cover}
                    alt={c.title}
                    onClick={() => renderLink(c.alias)}
                />
                <div>
                    <h6>{maxTitlesLength(c.title)}</h6>
                    <p className={'p2'}>{c.artist}</p>
                </div>
            </div>
        ))
    }

    return <div className={styles.video}>{renderVideoCard()}</div>
}

VideoGrid.propTypes = {
    vod: PropTypes.array,
    fetchVod: PropTypes.func,
}

export default VideoGrid
