import React from 'react'
import PropTypes from 'prop-types'

const Logout = ({ fetchRevokeUser }) => {
    return (
        <div
            className="text-danger cursor-pointer"
            onClick={() => fetchRevokeUser()}>
            Logout
        </div>
    )
}

Logout.propTypes = {
    fetchRevokeUser: PropTypes.func,
}

export default Logout
