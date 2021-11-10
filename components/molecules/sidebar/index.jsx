import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Profile from '@/components/molecules/profile'
import Navbar from '@/components/molecules/navbar'

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
                                url: '/ondemand/audiolearning',
                            },
                            {
                                label: 'video learning',
                                url: '/ondemand/videolearning',
                            },
                            {
                                label: 'audio playbook',
                                url: '/ondemand/audioplaybook',
                            },
                            { label: 'LeaderBoard', url: '/leaderboard' },
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
