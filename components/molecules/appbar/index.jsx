import Logo from '@/components/atoms/logo'
import ProfileBar from '@/components/molecules/profile/bar'
import styles from './style.module.scss'
import React from 'react'
import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'
import SidebarContainer from '@/containers/SidebarContainer'

const Appbar = ({ activeSidebar, sidebarState }) => {
    return (
        <div className={styles.appbar}>
            <Logo />
            <div className={styles.toolbar}>
                <ProfileBar username={'Malik'} usercover={'S'} />
            </div>
            <div className={styles.humberger}>
                <Humberger
                    open={sidebarState}
                    toggleNav={() => {
                        activeSidebar(!sidebarState)
                    }}
                />
            </div>
            <SidebarContainer />
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
}

export default Appbar
