import Logo from '@/components/atoms/logo'
import ProfileBar from '@/containers/components/bars/Profilebar'
import styles from './style.module.scss'
import React from 'react'
import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'
import Sidebar from '@/containers/components/bars/Sidebar'

const Appbar = ({ activeSidebar, sidebarState, account, path }) => {
    return (
        <div className={styles.appbar}>
            <Logo link={path.path} />
            <div className={styles.toolbar}>
                <ProfileBar
                    username={account.name}
                    usercover={account.cover?.url || 'S'}
                />
            </div>
            <div className={styles.humberger}>
                <Humberger
                    open={sidebarState}
                    toggleNav={() => {
                        activeSidebar(!sidebarState)
                    }}
                />
            </div>
            <Sidebar username={account.name} usercover={account.cover?.url} />
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

export default Appbar
