import Navbar from '@/components/molecules/navbar'
import styles from './style.module.scss'
import React from 'react'
import AppbarContainer from '@/containers/AppbarContainer'
import routes from '@/utils/routes'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <Navbar
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
                                label: 'Video Learning',
                                url: routes.videolearning(),
                            },
                            {
                                label: 'Audio Playbook',
                                url: routes.audioplaybook(),
                            },
                            { label: 'LeaderBoard', url: routes.leaderboard() },
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
