import Navbar from '@/components/molecules/navbar'
import Appbar from '@/components/molecules/appbar'
import styles from './style.module.scss'
import React from 'react'
const Header = () => {
    return (
        <>
            <header className={styles.header}>
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
                <Appbar />
            </header>
            <div className={styles.container}>
                <div className={styles.container_bg}>
                    <div className={styles.container_fg}></div>
                </div>
            </div>
        </>
    )
}

export default Header
