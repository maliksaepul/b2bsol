import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withAuth from '@/hoc/wrappers/withAuthStrict'
import { connect } from 'react-redux'
import { fetchDataNavbar } from '@/redux/actions/widgets/_navbar'

const Dashboard = ({ children, account, path, loading, fetchDataNavbar }) => {
    useEffect(() => {
        console.log(path)
        fetchDataNavbar(path.path)
    }, [])

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
    loading: PropTypes.object,
    fetchDataNavbar: PropTypes.func,
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps, { fetchDataNavbar })(
    withAuth(Dashboard)
)
