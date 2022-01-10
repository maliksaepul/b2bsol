// React & Libraries

// Styles
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Marquee = ({ children, animationDuration }) => {
    // const updatedContents = contents.concat(contents)

    return (
        <div className={styles.marquee}>
            <div className={styles.container} style={{ animationDuration }}>
                {children}
            </div>
        </div>
    )
}

Marquee.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string,
    ]),
    animationDuration: PropTypes.string,
}

export default Marquee
