import Navbar from '@/components/molecules/navbar'
import styles from './style.module.scss'
import React from 'react'
import AppbarContainer from '@/containers/AppbarContainer'
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <Navbar
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
                        align={'right'}
                    />
                </div>
                <AppbarContainer />
            </header>
        </>
    )
}

export default Header
