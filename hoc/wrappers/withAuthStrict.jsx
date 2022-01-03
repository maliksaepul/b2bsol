import { fetchAccount } from '@/redux/actions/_login'
import { BASEURL, LOCAL_STORAGE, MEMBER } from '@/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        useEffect(async () => {
            const refreshToken = localStorage.getItem(
                LOCAL_STORAGE.REFRESH_TOKEN
            )
            // if no accessToken was found,then we redirect to "/" page.
            const { refresh } = Router.query

            if (!Router.isReady) return
            if (!refreshToken && Router.isReady) {
                if (refresh) {
                    console.log('hallo')
                    await props.fetchAccount(refresh)
                    Router.push(Router.pathname)
                } else {
                    window.open(
                        MEMBER + '/login?r=' + BASEURL + Router.pathname,
                        '_self'
                    )
                }
            }
        }, [Router.isReady])
        return <Component {...props} />
    }

    EnchancedComponent.propTypes = {
        fetchAccount: PropTypes.func,
    }

    const mapStateToProps = ({ account }) => ({ account })

    return connect(mapStateToProps, { fetchAccount })(EnchancedComponent)
}

export default withAuth
