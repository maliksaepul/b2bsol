// Libraries
import React from 'react'
import { useRouter } from 'next/router'
import Dashboard from './layouts/dashboard'
import PropTypes from 'prop-types'

const generateLayout = children => {
    const router = useRouter()
    const layout = router.pathname.split('/')[1]

    switch (layout) {
        case '':
            return <Dashboard>{children}</Dashboard>
        case 'signin':
            return children
        case 'dynamic':
            return children
        default:
            return children
    }
}

const Base = ({ children }) => {
    return <>{generateLayout(children)}</>
}
Base.propTypes = {
    children: PropTypes.any,
}

export default Base
