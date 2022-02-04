import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const CounterStats = ({ bgcolor, color, description, duration, children }) => {
    return (
        <div
            className={styles.countstats}
            style={{ color: color, backgroundColor: bgcolor }}>
            <div>{children}</div>
            <div>
                <h5>{duration || '81.000'}</h5>
                <p className="p2">{description || 'Total Duration Learning'}</p>
            </div>
        </div>
    )
}

CounterStats.propTypes = {
    color: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bgcolor: PropTypes.string,
    icon: PropTypes.shape({
        name: PropTypes.string,
        fill: PropTypes.string,
        multiplier: PropTypes.string,
        stroke: PropTypes.string,
    }),
    children: PropTypes.any,
}

export default CounterStats
