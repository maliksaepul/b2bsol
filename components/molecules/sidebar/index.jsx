import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Profile from '@/components/organisms/profile'
import Navbar from '@/components/molecules/navbar'
import routes from '@/utils/routes'

const Sidebar = ({ sidebarState }) => {
    const renderBody = () => {
        if (sidebarState) {
            return (
                <sidebar className={styles.sidebar}>
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
                                label: 'video learning',
                                url: routes.videolearning(),
                            },
                            {
                                label: 'audio playbook',
                                url: routes.audioplaybook(),
                            },
                            { label: 'LeaderBoard', url: routes.leaderboard() },
                        ]}
                    />
                    <Profile />
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
