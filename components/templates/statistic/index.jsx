import Carousel from '@/components/molecules/carousel'
import CounterStats from '@/components/molecules/counter-stats'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'

const Statistic = () => {
    return (
        <div className={styles.statistic}>
            <Label
                title={'Statistik Pembelajaran'}
                description={'pantau activitas pembelajaran kamu'}
            />

            <Carousel>
                <CounterStats />
                <CounterStats />
                <CounterStats />
            </Carousel>
        </div>
    )
}

export default Statistic
