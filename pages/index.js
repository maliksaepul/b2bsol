// Libraries
import React, { useEffect, useState } from 'react'
import withAuth from '@/hoc/wrappers/withAuthStrict'
import PropTypes from 'prop-types'
import { fetchOrganization } from '@/redux/actions/_organization'
import { connect } from 'react-redux'
import NotFound from '@/views/NotFound'
import Forbidden from '@/views/Forbidden'
import { useRouter } from 'next/router'
import SkeletonPlaceHolder from '@/views/SkeletonPlaceHolder'

// Views

const HomePage = props => {
    const [org, setOrg] = useState({})
    useEffect(async () => {
        const api = { ...(await props.fetchOrganization()) }
        setOrg(api)
    }, [])
    const Router = useRouter()

    switch (org && org.status) {
        case 200:
            Router.push(org.data.data.path)
            return null
        case 403:
            return <Forbidden />
        case 404:
            return <NotFound />
        default:
            return <SkeletonPlaceHolder />
    }
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
    fetchOrganization: PropTypes.func,
    organization: PropTypes.any,
}

const mapStateToProps = ({ organization }) => ({ organization })

export default connect(mapStateToProps, { fetchOrganization })(
    withAuth(HomePage)
)
