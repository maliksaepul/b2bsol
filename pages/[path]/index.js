// Libraries
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import Head from 'next/head'
// import Home from '@/views/Home/Home'
import PropTypes from 'prop-types'
import { fetchHomePage } from '@/redux/actions/pages'
import { connect } from 'react-redux'

const Home = dynamic(() => import('@/views/Home/Home'))

// Views

const HomePage = props => {
    useEffect(() => {
        props.fetchHomePage(props.path.organizationId)
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>
            <Home account={props.account} path={props.path} page={props.page} />
        </React.Fragment>
    )
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
    fetchHomePage: PropTypes.func,
    page: PropTypes.any,
}

const mapStateToProps = ({ page }) => ({ page: page.home })

export default connect(mapStateToProps, { fetchHomePage })(HomePage)
