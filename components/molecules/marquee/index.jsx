import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Marquee = ({ contents, animationDuration }) => {
    const updatedContents = contents.concat(contents)

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_blank')
        }
    }

    return (
        <div className={styles.marquee}>
            <div className={styles.container} style={{ animationDuration }}>
                {updatedContents.map((c, i) => (
                    <div key={i} className={styles.object}>
                        {/* tes */}
                        <img
                            src={c.cover}
                            alt={c.title}
                            onClick={() => renderLink(c.deeplink)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

Marquee.propTypes = {
    contents: PropTypes.array,
    animationDuration: PropTypes.string,
}

export default Marquee
