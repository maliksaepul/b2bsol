import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Navbar from '../../molecules/navbar'
import { PROFILE_ITEM } from '@/utils/constants'
import Logout from '@/containers/components/Logout'

const Profile = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile_head}>
                <div className={styles.profile_cover}>
                    {
                        <img
                            src={
                                props.usercover ||
                                'https://cdn.inspigo.id/public/cover/default-profile/avatar1.png'
                            }
                            alt="cover"
                        />
                    }
                </div>
                <div>
                    <h5>{props.username}</h5>
                    {/* <p className="p2">
                        {props.userRole || 'Frontend Engineer'}
                    </p> */}
                </div>
            </div>
            <Navbar bgcolor={'white'} variant="column" navitem={PROFILE_ITEM} />
            <div className={styles.cta}>
                <Logout />
            </div>
        </div>
    )
}

Profile.propTypes = {
    background: PropTypes.string,
    username: PropTypes.string,
    usercover: PropTypes.string,
    userRole: PropTypes.string,
}

export default Profile
