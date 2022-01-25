import Navbar from '@/components/molecules/navbar'
import styles from './style.module.scss'
import React from 'react'
import AppbarContainer from '@/containers/AppbarContainer'
import routes from '@/utils/routes'
import PropTypes from 'prop-types'

const Header = ({ path }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <Navbar
                        navitem={[
                            {
                                label: 'Audio Learning',
                                url: routes.audiolearning(path.path),
                            },
                            {
                                label: 'InspiBook',
                                url: routes.inspibook(path.path),
                            },
                            // {
                            //     label: 'Video Learning',
                            //     url: routes.videolearning(path.path),
                            // },
                            // {
                            //     label: 'Audio Playbook',
                            //     url: routes.audioplaybook(path.path),
                            // },
                            // {
                            //     label: 'LeaderBoard',
                            //     url: routes.leaderboard(path.path),
                            // },
                        ]}
                        align={'right'}
                    />
                </div>
                <AppbarContainer />
            </header>
        </>
    )
}

Header.propTypes = {
    path: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Header
