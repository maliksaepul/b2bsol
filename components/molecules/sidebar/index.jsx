import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '@/components/molecules/navbar'
import routes from '@/utils/routes'
import { PROFILE_ITEM } from '@/utils/constants'

const Sidebar = ({ sidebarState, usercover, username, userRole }) => {
    const renderBody = () => {
        if (sidebarState) {
            return (
                <sidebar className={styles.sidebar}>
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

                    <div className={styles.sidebar_container}>
                        <div>
                            <h5 className="p-x-1">Learning</h5>
                            <Navbar
                                bgcolor="white"
                                align="left"
                                variant="column"
                                navitem={[
                                    {
                                        label: 'Audio Learning',
                                        url: routes.audiolearning(),
                                    },
                                    {
                                        label: 'Inspi Book',
                                        url: routes.inspibook(),
                                    },
                                    {
                                        label: 'video learning',
                                        url: routes.videolearning(),
                                    },
                                    {
                                        label: 'audio playbook',
                                        url: routes.audioplaybook(),
                                    },
                                    {
                                        label: 'LeaderBoard',
                                        url: routes.leaderboard(),
                                    },
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
                    </div>
                </sidebar>
            )
        } else {
            return null
        }
    }
    return renderBody()
}

Sidebar.propTypes = {
    sidebarState: PropTypes.bool,
}

export default Sidebar
