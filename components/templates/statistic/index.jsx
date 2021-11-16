import CounterStats from '@/components/molecules/counter-stats'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React, { useRef } from 'react'
import * as colors from '@/styles/_dstoken.module.scss'
import cx from 'classnames'
import Icon from '@/components/atoms/icon'

const Statistic = () => {
    const ref = useRef(null)
    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }
    return (
        <div className={styles.statistic}>
            <div className={cx(styles.content)}>
                <Label
                    title={'Statistik Pembelajaran'}
                    description={'pantau activitas pembelajaran kamu'}
                />

                <div className={styles.statistic_container}>
                    <CounterStats
                        icon={{ name: 'Headset' }}
                        color={colors.inspirationBlue}
                        bgcolor={colors.secondaryCream}
                    />
                    <CounterStats
                        icon={{ name: 'ClarityVideo' }}
                        color={colors.inspirationBlue}
                        bgcolor={colors.secondaryPeach}
                    />
                    <CounterStats
                        icon={{ name: 'FluentLearning' }}
                        color={colors.inspirationBlue}
                        bgcolor={colors.secondaryTosca}
                    />
                </div>
            </div>

            <div className={cx(styles.navigation)} onClick={() => scroll(200)}>
                <Icon
                    name={'ArrowRight'}
                    multiplier={1.5}
                    fill={colors.white}
                    stroke={colors.inspirationBlue}
                />
            </div>
        </div>
    )
}

export default Statistic
