import CounterStats from '@/components/molecules/counter-stats'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React, { useRef } from 'react'
import ArrowRight from '@/public/right.svg'
import Image from 'next/image'

const Statistic = () => {
    const ref = useRef(null)
    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }
    return (
        <div className={styles.statistic}>
            <div className={styles.content}>
                <Label
                    title={'Statistik Pembelajaran'}
                    description={'pantau activitas pembelajaran kamu'}
                />

                <div className={styles.statistic_container}>
                    <CounterStats />
                    <CounterStats />
                    <CounterStats />
                </div>
            </div>

            <div className={styles.navigation} onClick={() => scroll(200)}>
                <Image src={ArrowRight} width={40} height={40} />
            </div>
        </div>
    )
}

export default Statistic
