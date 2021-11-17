import React from 'react'
import PropTypes from 'prop-types'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import Icon from '@/components/atoms/icon'
import * as colors from '@/styles/_dstoken.module.scss'

const Leaderboard = props => {
    const leaderboardData = [
        {
            description: 'Surpass 100% participant',
            duration: 100,
            percentage: 100,
            name: 'John Due',
        },
        {
            description: 'Surpass 90% participant',
            duration: 90,
            percentage: 90,
            name: 'John Due',
        },
        {
            description: 'Surpass 80% participant',
            duration: 80,
            percentage: 80,
            name: 'John Due',
        },
        {
            description: 'Surpass 70% participant',
            duration: 70,
            percentage: 70,
            name: 'John Due',
        },
        {
            description: 'Surpass 60% participant',
            duration: 60,
            percentage: 60,
            name: 'John Due',
        },
        {
            description: 'Surpass 50% participant',
            duration: 50,
            percentage: 50,
            name: 'John Due',
        },
        {
            description: 'Surpass 40% participant',
            duration: 40,
            percentage: 40,
            name: 'John Due',
        },
        {
            description: 'Surpass 30% participant',
            duration: 30,
            percentage: 30,
            name: 'John Due',
        },
        {
            description: 'Surpass 20% participant',
            duration: 20,
            percentage: 20,
            name: 'John Due',
        },
        {
            description: 'Surpass 10% participant',
            duration: 10,
            percentage: 10,
            name: 'John Due',
        },
    ]

    const renderRanking = params => {
        switch (params) {
            case 1:
                return <Icon name={'GoldMedal'} multiplier={1} />
            case 2:
                return <Icon name={'SilverMedal'} multiplier={1} />
            case 3:
                return <Icon name={'BronzeMedal'} multiplier={1} />
            default:
                return (
                    <div className={styles.ranking}>
                        <h4>{params}</h4>
                        <sup>th</sup>
                    </div>
                )
        }
    }

    const renderPercentileBar = (ranking, percentage) => {
        switch (ranking) {
            case 1:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.freedomBlue,
                        }}></div>
                )
            case 2:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.intuitionBlue,
                        }}></div>
                )
            case 3:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryOrange,
                        }}></div>
                )
            case 4:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryPeach,
                        }}></div>
                )
            case 5:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryYellow,
                        }}></div>
                )
            case 6:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryRed,
                        }}></div>
                )
            case 7:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryViolet,
                        }}></div>
                )
            case 8:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryTosca,
                        }}></div>
                )
            case 9:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.secondaryCream,
                        }}></div>
                )
            case 10:
                return (
                    <div
                        className={styles.percentile_bar}
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.white,
                        }}></div>
                )

            default:
                return <div>undefined</div>
        }
    }

    const renderLeaderboard = () => {
        return leaderboardData.map((item, key) => {
            return (
                <tr key={key}>
                    <td>{renderRanking(key + 1)}</td>
                    <td className={styles.percentile}>
                        {renderPercentileBar(key + 1, item.percentage)}
                        <div>
                            <p>
                                <strong>{item.name}</strong>
                            </p>
                            <p className="p3">{item.description}</p>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className={styles.leaderboard}>
            <Label
                title="Peringkat"
                description={
                    '<p>Ayo tingkatkan durasi belajarmu dan capai peringkat teratas!</p>'
                }
            />

            <div className={styles.leaderboard_container}>
                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        {renderLeaderboard()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Leaderboard.propTypes = {
    data: PropTypes.array,
}

export default Leaderboard
