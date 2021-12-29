import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const Copy = ({ url, label }) => {
    const [clipboard, setClipboard] = useState('Copy to clipboard')

    const handleClick = () => {
        navigator.clipboard.writeText(url)
        setClipboard('Copied')
    }

    const handleMouseOut = () => {
        setClipboard('Copy to clipboard')
    }

    return (
        <div className={styles.copy}>
            <p className={styles.text}>
                {' '}
                <span>{url}</span>
            </p>

            <div className={styles.tooltip}>
                <button
                    onClick={() => {
                        handleClick()
                    }}
                    onMouseOut={() => {
                        handleMouseOut()
                    }}
                    className={styles.button}>
                    <span className={styles.tooltiptext} id="myTooltip">
                        {clipboard}
                    </span>
                    {label}
                </button>
            </div>
        </div>
    )
}

Copy.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
}

export default Copy
