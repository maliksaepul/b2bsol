// React & Libraries
import React from 'react'

// Styles
import styles from './spinner.module.scss'
import PropTypes from 'prop-types'

const Spinner = ({ size, color }) => {
    return (
        <div className={styles.spinner} style={{ width: size, height: size }}>
            <div className={styles.spinner__loader}>
                <svg className={styles.circular} viewBox="25 25 50 50">
                    <circle
                        className={styles.path}
                        cx="50"
                        cy="50"
                        r="16"
                        fill="none"
                        stroke={color}
                        strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}

Spinner.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default Spinner
