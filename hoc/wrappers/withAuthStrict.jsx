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
            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
            // if no accessToken was found,then we redirect to "/" page.
            const { refresh } = Router.query

            if (!Router.isReady) return
            if (!accessToken && Router.isReady) {
                if (refresh) {
                    await props.fetchAccount(refresh)
                    Router.push(Router.pathname)
                } else {
                    window.open(
                        MEMBER + '/login?r=' + BASEURL + Router.pathname,
                        '_self'
                    )
                }
            } else {
                await props.fetchAccount(refresh)
                Router.push(Router.pathname)
            }
        }, [Router.isReady])
        return <Component {...props} />
    }

    EnchancedComponent.propTypes = {
        fetchAccount: PropTypes.func,
        account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    }

    const mapStateToProps = ({ account }) => ({ account })

    return connect(mapStateToProps, { fetchAccount })(EnchancedComponent)
}

export default withAuth
