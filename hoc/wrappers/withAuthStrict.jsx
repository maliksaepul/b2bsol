import { fetchAccount } from '@/redux/actions/_login'
import { BASEURL, LOCAL_STORAGE, MEMBER } from '@/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getQueryParam } from '@/utils/helpers'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        if (typeof window !== 'undefined') {
            const access = getQueryParam('access')
            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
            if ((!accessToken && access) || accessToken) {
                useEffect(async () => {
                    await props.fetchAccount(access)
                    Router.push(Router.pathname)
                }, [])
                return <Component {...props} />
            } else if (!accessToken && !access) {
                window.open(
                    MEMBER + '/login?r=' + BASEURL + Router.pathname,
                    '_self'
                )
                return null
            }
        }
        return null
    }

    EnchancedComponent.propTypes = {
        fetchAccount: PropTypes.func,
        account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    }

    const mapStateToProps = ({ account }) => ({ account })

    return connect(mapStateToProps, { fetchAccount })(EnchancedComponent)
}

export default withAuth
