import Image from 'next/image'
import iconoirHeadset from '@/public/iconoir_headset.svg'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const CounterStats = ({ color, description, duration }) => {
    return (
        <div className={styles.countstats} style={{ color: color }}>
            <div>
                <Image src={iconoirHeadset} width={40} height={40} />
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
}

export default CounterStats
