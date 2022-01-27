// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NotFound from '@/views/NotFound'
import Forbidden from '@/views/Forbidden'
import { useRouter } from 'next/router'

// Views

const HomePage = props => {
    const Router = useRouter()
    switch (props.path.status) {
        case 200:
            Router.push(props.path.path)
            return null
        case 403:
            return <Forbidden />
        case 404:
            return <NotFound />
        default:
            return null
    }
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(HomePage)
