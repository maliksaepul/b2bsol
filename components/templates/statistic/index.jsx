import CounterStats from '@/components/molecules/counter-stats'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React, { useEffect } from 'react'
import * as colors from '@/styles/App.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { ArrowRight } from '@/utils/icons'

const Statistic = ({ myStat, fetchMyStat, id }) => {
    useEffect(() => {
        if (id) fetchMyStat(id)
    }, [myStat.podcast])

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
                        duration={myStat.podcast}
                        description={'Total Duration Audio Learning'}
                    />
                    <CounterStats
                        icon={{ name: 'ClarityVideo' }}
                        duration={myStat.vod}
                        description={'Total Duration Video Learning'}
                    />
                    <CounterStats
                        icon={{ name: 'FluentLearning' }}
                        duration={myStat.course}
                        description={'Total Duration Course'}
                    />
                </div>
            </div>

            <div
                className={cx(styles.navigation)}
                onClick={() => {
                    window.open('https://google.com')
                }}>
                {ArrowRight(colors.white, colors.inspirationBlue, 1.5)}
            </div>
        </div>
    )
}

Statistic.propTypes = {
    myStat: PropTypes.object,
    fetchMyStat: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Statistic
