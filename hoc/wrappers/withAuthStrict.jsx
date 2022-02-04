import { fetchAccount } from '@/redux/actions/account/_login'
import { LOCAL_STORAGE } from '@/utils/constants'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getQueryParam } from '@/utils/helpers'
import routes from '@/utils/routes'
import { fetchPath } from '@/redux/actions/account/_path'
import NotFound from '@/views/NotFound'
import Forbidden from '@/views/Forbidden'
import SkeletonPlaceHolder from '@/views/SkeletonPlaceHolder'
import { fetchOrganization } from '@/redux/actions/account/_organization'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        const [pagePath, setPagePath] = useState({})
        const navigateByQuery = data => {
            if (Router.query.access || Router.query.refresh) {
                Router.push(Router.basePath + window.location.pathname)
            } else {
                Router.push(Router.asPath)
            }
        }

        const renderComponent = () => {
            if (pagePath && pagePath.status) {
                switch (pagePath.status) {
                    case 200:
                        return <Component {...props} />
                    case 404:
                        return <NotFound />
                    case 403:
                        return <Forbidden />
                    default:
                        return <div></div>
                }
            } else {
                return <SkeletonPlaceHolder />
            }
        }

        if (typeof window !== 'undefined') {
            const paramAccess = getQueryParam('access')

            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)

            if ((!accessToken && paramAccess) || accessToken) {
                useEffect(async () => {
                    if (Router.isReady) {
                        await props.fetchAccount(paramAccess || accessToken)
                        const org = {
                            ...(await props.fetchOrganization(
                                paramAccess || accessToken
                            )),
                        }
                        if (Router.query.path) {
                            const response = await props.fetchPath(
                                Router.query.path
                            )
                            navigateByQuery()
                            setPagePath(
                                response.isAxiosError
                                    ? response.response
                                    : response
                            )
                        } else if (org) {
                            const response = await props.fetchPath(
                                org.data.data.path
                            )
                            setPagePath(
                                response.isAxiosError
                                    ? response.response
                                    : response
                            )
                        }
                    }
                }, [Router.isReady])
                return renderComponent()
            } else {
                window.open(routes.signIn(window.location.pathname), '_self')
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
        fetchOrganization: PropTypes.func,
    }

    const mapStateToProps = ({ account, path }) => ({ account, path })

    return connect(mapStateToProps, {
        fetchAccount,
        fetchPath,
        fetchOrganization,
    })(EnchancedComponent)
}

export default withAuth
