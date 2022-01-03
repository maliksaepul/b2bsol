import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '../../molecules/navbar'
import routes from '@/utils/routes'

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
                        url: routes.myProfile(),
                    },
                    {
                        label: 'My Statistic',
                        url: routes.myProfile(),
                    },
                    {
                        label: 'My Badge',
                        url: routes.myProfile(),
                    },
                    { label: 'About', url: routes.myProfile() },
                    { label: 'Logout', url: routes.myProfile() },
                ]}
            />
        </div>
    )
}

Profile.propTypes = {
    background: PropTypes.string,
}

export default Profile
