import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '@/components/molecules/navbar'
import routes from '@/utils/routes'
import { PROFILE_ITEM } from '@/utils/constants'
import Logout from '@/containers/Logout'
import { disableScroll } from '@/utils/helpers'

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
                        <div className={styles.sidebar_cover}>
                            {usercover ? (
                                <img src={usercover} alt="cover" />
                            ) : (
                                'S'
                            )}
                        </div>
                        <div>
                            <h5>{username || 'John Due'}</h5>
                            <p className="p2">
                                {userRole || 'Frontend Engineer'}
                            </p>
                        </div>
                    </div>

                    <div
                        className={styles.sidebar_container}
                        onClick={() => {
                            activeSidebar(!sidebarState)
                        }}>
                        <div>
                            <h5 className="p-x-1">Learning</h5>
                            <Navbar
                                bgcolor="white"
                                align="left"
                                variant="column"
                                navitem={[
                                    {
                                        label: 'Audio Learning',
                                        url: routes.audiolearning(path),
                                    },
                                    {
                                        label: 'Inspi Book',
                                        url: routes.inspibook(path),
                                    },
                                    // {
                                    //     label: 'video learning',
                                    //     url: routes.videolearning(path),
                                    // },
                                    // {
                                    //     label: 'audio playbook',
                                    //     url: routes.audioplaybook(path),
                                    // },
                                    // {
                                    //     label: 'LeaderBoard',
                                    //     url: routes.leaderboard(path),
                                    // },
                                ]}
                            />
                        </div>
                        <div>
                            <h5 className="p-x-1">Profile</h5>
                            <Navbar
                                bgcolor="white"
                                align="left"
                                variant="column"
                                navitem={PROFILE_ITEM}
                            />
                        </div>
                        <Logout />
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
