import React from 'react'
import PropTypes from 'prop-types'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const Dashboard = ({ children, account, path }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                account,
                path,
            })
        }
        return child
    })
    return <div>{childrenWithProps}</div>
}

Dashboard.propTypes = {
    children: PropTypes.any,
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

export default withAuth(Dashboard)
