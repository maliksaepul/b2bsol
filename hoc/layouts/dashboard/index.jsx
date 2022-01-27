import React from 'react'
import PropTypes from 'prop-types'
import withAuth from '@/hoc/wrappers/withAuthStrict'
import { connect } from 'react-redux'

const Dashboard = ({ children, account, path, loading }) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                account,
                path,
                loading,
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
    loading: PropTypes.bool,
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(withAuth(Dashboard))
