import styles from './style.module.scss'
import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Profile from '@/components/organisms/profile'
import ClickOutside from '@/components/atoms/clickoutside'
import { Chevron } from '@/utils/icons'

const ProfileBar = ({
    username,
    usercover,
    userRole,
    activeProfile,
    active,
}) => {
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
        <ClickOutside behaviorfunc={() => activeProfile(false)}>
            <div
                className={cx(styles.profile)}
                onClick={() => {
                    activeProfile(!active)
                }}>
                <p>Hi, {username} !</p>
                <div className={styles.profile_cover}>
                    {usercover ? <img src={usercover} alt="cover" /> : 'S'}
                </div>

                <div
                    className={
                        active ? styles.chevron_up : styles.chevron_down
                    }>
                    {Chevron('black', 'black', 1)}
                </div>
                {renderProfile()}
            </div>
        </ClickOutside>
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
