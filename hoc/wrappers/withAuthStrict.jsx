import { fetchAccount } from '@/redux/actions/_login'
import { LOCAL_STORAGE } from '@/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getQueryParam } from '@/utils/helpers'
import routes from '@/utils/routes'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        if (typeof window !== 'undefined') {
            const access = getQueryParam('access')

            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)

            if ((!accessToken && access) || accessToken) {
                useEffect(async () => {
                    await props.fetchAccount(access)
                    console.log(Router.query)
                    if (Router.isReady) {
                        if (Router.query.path) {
                            Router.push(Router.query.path)
                        } else if (Router.query.alias) {
                            Router.push(Router.query.alias)
                        } else {
                            Router.push(Router.pathname)
                        }
                    }
                }, [Router.isReady])
                if (
                    Object.values(props.account).length <= 0 ||
                    props.account.length <= 0
                ) {
                    return null
                } else {
                    return <Component {...props} />
                }
            } else {
                window.open(routes.signIn(Router.pathname), '_self')
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
