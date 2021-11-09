import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '../navbar'

const Profile = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_head}>
                <div className={styles.profile_cover}>S</div>
                <div>
                    <h5>Saepul Malik</h5>
                    <p className="p2">Frontend Engineer</p>
                </div>
            </div>
            <Navbar
                bgcolor={'white'}
                variant="column"
                navitem={[
                    {
                        label: 'My Profile',
                        url: '/ondemand/audiolearning',
                    },
                    {
                        label: 'My Statistic',
                        url: '/ondemand/videolearning',
                    },
                    {
                        label: 'My Badge',
                        url: '/ondemand/audioplaybook',
                    },
                    { label: 'About', url: '/leaderboard' },
                    { label: 'Logout', url: '/leaderboard' },
                ]}
            />
        </div>
    )
}

Profile.propTypes = {
    background: PropTypes.string,
}

export default Profile
