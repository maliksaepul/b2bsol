import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
const Logout = ({ fetchRevokeUser }) => {
    return (
        <div
            className="text-danger cursor-pointer "
            onClick={() => fetchRevokeUser()}>
            <span className={styles.logout}>Logout</span>
        </div>
    )
}

Logout.propTypes = {
    fetchRevokeUser: PropTypes.func,
}

export default Logout
