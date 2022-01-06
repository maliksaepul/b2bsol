import Logo from '@/components/atoms/logo'
import ProfileBar from '@/containers/ProfilebarContainer'
import styles from './style.module.scss'
import React from 'react'
// import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'
import SidebarContainer from '@/containers/SidebarContainer'

const Appbar = ({ activeSidebar, sidebarState, account }) => {
    return (
        <div className={styles.appbar}>
            <Logo />
            <div className={styles.toolbar}>
                <ProfileBar
                    username={account.name}
                    usercover={account.cover?.url || 'S'}
                />
            </div>
            {/* <div className={styles.humberger}>
                <Humberger
                    open={sidebarState}
                    toggleNav={() => {
                        activeSidebar(!sidebarState)
                    }}
                />
            </div> */}
            <SidebarContainer />
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Appbar
