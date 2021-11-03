import Image from 'next/image'
import chevronAsset from '@/public/chevron.svg'
import styles from './style.module.scss'
import cx from 'classnames'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProfileBar = ({ username, usercover }) => {
    const [chevron, setChevron] = useState(false)

    const chevronCondition = () => {
        if (chevron) {
            return styles.chevron_up
        } else {
            return styles.chevron_down
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
                <Image
                    src={chevronAsset}
                    alt="chevron logo"
                    width={16}
                    height={9}
                />
            </div>
        </div>
    )
}

ProfileBar.propTypes = {
    username: PropTypes.string,
    usercover: PropTypes.string,
}

export default ProfileBar
