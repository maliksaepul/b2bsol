import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@/components/atoms/icon'
// import * as colors from '@/styles/_dstoken.module.scss'

const CounterStats = ({ bgcolor, color, description, duration, icon }) => {
    return (
        <div
            className={styles.countstats}
            style={{ color: color, backgroundColor: bgcolor }}>
            <div>
                <Icon
                    name={icon.name}
                    multiplier={icon.multiplier || 1}
                    fill={icon.fill}
                    stroke={icon.stroke}
                />
            </div>
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
    duration: PropTypes.string,
    bgcolor: PropTypes.string,
    icon: PropTypes.shape({
        name: PropTypes.string,
        fill: PropTypes.string,
        multiplier: PropTypes.string,
        stroke: PropTypes.string,
    }),
}

export default CounterStats
