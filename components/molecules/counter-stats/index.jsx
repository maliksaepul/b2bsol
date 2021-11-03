import Image from 'next/image'
import iconoirHeadset from '@/public/iconoir_headset.svg'
import styles from './style.module.scss'
import React from 'react'

const CounterStats = () => {
    return (
        <div className={styles.countstats}>
            <div>
                <Image src={iconoirHeadset} width={40} height={40} />
            </div>
            <div>
                <h5>81.000</h5>
                <p className="p2">Total Duration Learning</p>
            </div>
        </div>
    )
}

export default CounterStats
