import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/helpers'
import { useRouter } from 'next/router'
import routes from '@/utils/routes'
import cx from 'classnames'

const InspiBookCard = ({ audio, withLabel, path, loading }) => {
    const router = useRouter()

    const renderLink = (link = null) => {
        if (link) {
            router.push(routes.inspibook(path, link))
        }
    }

    return (
        <div className={styles.object}>
            <img
                src={audio.cover.url}
                alt={audio.title}
                onClick={() => renderLink(audio.alias)}
            />
            {withLabel ? (
                <div>
                    <h6>{maxTitlesLength(audio.title)}</h6>
                    <p className={cx('p2')}>{audio.author}</p>
                </div>
            ) : null}
        </div>
    )
}

InspiBookCard.propTypes = {
    audio: PropTypes.shape({
        cover: PropTypes.any,
        title: PropTypes.string,
        alias: PropTypes.string,
        author: PropTypes.string,
        deeplink: PropTypes.string,
    }).isRequired,
    withLabel: PropTypes.bool,
    path: PropTypes.any,
    loading: PropTypes.bool,
}

InspiBookCard.defaultProps = {
    withLabel: true,
}

export default InspiBookCard
