import styles from './style.module.scss'
import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Profile from '@/components/organisms/profile'
import Icon from '@/components/atoms/icon'

const ProfileBar = ({
    username,
    usercover,
    userRole,
    activeProfile,
    active,
}) => {
    const chevronCondition = () => {
        if (active) {
            return styles.chevron_up
        } else {
            return styles.chevron_down
        }
    }

    const renderProfile = () => {
        if (active) {
            return (
                <div className={styles.profile_sidebar}>
                    <Profile
                        usercover={usercover}
                        username={username}
                        userRole={userRole}
                    />
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className={cx(styles.profile)}>
            <p>Hi {username}</p>
            <div className={styles.profile_cover}>
                {usercover ? <img src={usercover} alt="cover" /> : 'S'}
            </div>

            <div
                onClick={() => {
                    activeProfile(!active)
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
    activeProfile: PropTypes.func,
    active: PropTypes.bool,
    userRole: PropTypes.string,
}

export default ProfileBar
