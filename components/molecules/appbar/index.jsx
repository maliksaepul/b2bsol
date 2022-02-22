import Logo from '@/components/atoms/logo'
import ProfileBar from '@/containers/components/bars/Profilebar'
import styles from './style.module.scss'
import React from 'react'
import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'
import Sidebar from '@/containers/components/bars/Sidebar'
import { disableScroll } from '@/utils/helpers'
import { mediaMaxWidth, MobileBreakpoint } from '@/utils/breakpoint'

const Appbar = ({ activeSidebar, sidebarState, account, path }) => {
    if (mediaMaxWidth(MobileBreakpoint) && sidebarState) {
        disableScroll.on()
    } else {
        disableScroll.off()
    }

    return (
        <>
            {!sidebarState ? (
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
                            variant={'primary'}
                            open={sidebarState}
                            toggleNav={() => {
                                activeSidebar(!sidebarState)
                            }}
                        />
                    </div>
                </div>
            ) : null}
            <Sidebar username={account.name} usercover={account.cover?.url} />
        </>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

export default Appbar
