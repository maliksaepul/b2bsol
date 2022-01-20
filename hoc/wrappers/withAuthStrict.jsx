import { fetchAccount } from '@/redux/actions/_login'
import { LOCAL_STORAGE } from '@/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getQueryParam } from '@/utils/helpers'
import routes from '@/utils/routes'
import { fetchPath } from '@/redux/actions/_path'
import NotFound from '@/views/NotFound'
import Forbidden from '@/views/Forbidden'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        const navigateByQuery = () => {
            if (Router.query.access || Router.query.refresh) {
                if (Router.query.path) {
                    Router.push(Router.query.path)
                } else if (Router.query.alias) {
                    Router.push(Router.query.alias)
                } else {
                    Router.push(Router.pathname)
                }
            } else {
                Router.push(Router.asPath)
            }
        }

        const renderComponent = () => {
            if (props.path && props.path.status) {
                switch (props.path.status) {
                    case 200:
                        return <Component {...props} />
                    case 404:
                        return <NotFound />
                    case 403:
                        return <Forbidden />
                    default:
                        return null
                }
            } else {
                return null
            }
        }

        if (typeof window !== 'undefined') {
            const access = getQueryParam('access')

            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)

            if ((!accessToken && access) || accessToken) {
                useEffect(async () => {
                    await props.fetchAccount(access)
                    if (Router.isReady) {
                        await props.fetchPath(Router.query.path)
                        navigateByQuery()
                    }
                }, [Router.isReady])

                return renderComponent()
            } else {
                window.open(routes.signIn(Router.pathname), '_self')
                return null
            }
        }
        return null
    }

    EnchancedComponent.propTypes = {
        fetchAccount: PropTypes.func,
        fetchPath: PropTypes.func,
        account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        path: PropTypes.object,
    }

    const mapStateToProps = ({ account, path }) => ({ account, path })

    return connect(mapStateToProps, { fetchAccount, fetchPath })(
        EnchancedComponent
    )
}

export default withAuth
