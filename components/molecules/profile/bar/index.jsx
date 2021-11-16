import styles from './style.module.scss'
import cx from 'classnames'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Profile from '@/components/molecules/profile'
import Icon from '@/components/atoms/icon'

const ProfileBar = ({ username, usercover }) => {
    const [chevron, setChevron] = useState(false)

    const chevronCondition = () => {
        if (chevron) {
            return styles.chevron_up
        } else {
            return styles.chevron_down
        }
    }

    const renderProfile = () => {
        if (chevron) {
            return (
                <div className={styles.profile_sidebar}>
                    <Profile />
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className={cx(styles.profile)}>
            <p>Hi {username}</p>
            <div className={styles.profile_cover}>{usercover}</div>
            <div
                onClick={() => {
                    setChevron(!chevron)
                }}
                className={chevronCondition()}>
                <Icon name={'Chevron'} multiplier={1} />
            </div>
            {renderProfile()}
        </div>
    )
}

ProfileBar.propTypes = {
    username: PropTypes.string,
    usercover: PropTypes.string,
}

export default ProfileBar
