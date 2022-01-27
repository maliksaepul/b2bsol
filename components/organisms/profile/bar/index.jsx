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
                    <ClickOutside behaviorfunc={() => activeProfile(!active)}>
                        <Profile
                            usercover={usercover}
                            username={username}
                            userRole={userRole}
                        />
                    </ClickOutside>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div
            className={cx(styles.profile)}
            onClick={() => {
                activeProfile(!active)
            }}>
            <p>Hi, {username} !</p>
            <div className={styles.profile_cover}>
                {usercover ? <img src={usercover} alt="cover" /> : 'S'}
            </div>

            <div className={chevronCondition()}>{Chevron(null, null, 1)}</div>
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
