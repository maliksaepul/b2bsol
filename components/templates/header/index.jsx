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
                                url: '/audiolearning',
                            },
                            {
                                label: 'video learning',
                                url: '/video-learning',
                            },
                            {
                                label: 'audio playbook',
                                url: '/audioplaybook',
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
