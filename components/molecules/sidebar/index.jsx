import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '@/components/molecules/navbar'
import routes from '@/utils/routes'
import { PROFILE_ITEM } from '@/utils/constants'
import Logout from '@/containers/components/Logout'
import { disableScroll } from '@/utils/helpers'
import Humberger from '../humberger'

const Sidebar = ({
    sidebarState,
    usercover,
    username,
    userRole,
    activeSidebar,
    path,
}) => {
    const renderBody = () => {
        if (sidebarState) {
            disableScroll.on()
            return (
                <aside className={styles.sidebar}>
                    <div className={styles.sidebar_head}>
                        <div className={styles.humberger}>
                            <Humberger
                                open={sidebarState}
                                variant={'light'}
                                toggleNav={() => {
                                    activeSidebar(!sidebarState)
                                }}
                            />
                        </div>
                        <div className={styles.sidebar_cover}>
                            <img
                                src={
                                    usercover ||
                                    'https://cdn.inspigo.id/public/cover/default-profile/avatar1.png'
                                }
                                alt="cover"
                            />
                        </div>
                        <div>
                            <h5>{username || 'John Due'}</h5>
                        </div>
                    </div>

                    <div
                        className={styles.sidebar_container}
                        onClick={() => {
                            activeSidebar(!sidebarState)
                        }}>
                        <div>
                            <center>
                                <h5 className="p-x-1">Learning</h5>
                            </center>

                            <Navbar
                                bgcolor="white"
                                align="center"
                                variant="column"
                                navitem={[
                                    {
                                        label: 'Audio Learning',
                                        url: routes.audiolearning(path),
                                    },
                                    {
                                        label: 'InspiBook',
                                        url: routes.inspibook(path),
                                    },
                                    {
                                        label: 'Meditasi',
                                        url: routes.meditasi(path),
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <center>
                                <h5 className="p-x-1">Profile</h5>
                            </center>

                            <Navbar
                                bgcolor="white"
                                align="center"
                                variant="column"
                                navitem={PROFILE_ITEM}
                            />
                        </div>
                        <center>
                            <Logout />
                        </center>
                    </div>
                </aside>
            )
        } else {
            disableScroll.off()
            return null
        }
    }
    return renderBody()
}

Sidebar.propTypes = {
    sidebarState: PropTypes.bool,
    activeSidebar: PropTypes.func,
}

export default Sidebar
