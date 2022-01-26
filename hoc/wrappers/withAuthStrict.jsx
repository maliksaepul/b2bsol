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

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        const [pagePath, setPagePath] = useState({})
        const navigateByQuery = () => {
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
                        return <SkeletonPlaceHolder />
                }
            } else {
                return <SkeletonPlaceHolder />
            }
        }

        if (typeof window !== 'undefined') {
            const access = getQueryParam('access')

            const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)

            if ((!accessToken && access) || accessToken) {
                useEffect(async () => {
                    await props.fetchAccount(access)
                    if (Router.isReady) {
                        const response = await props.fetchPath(
                            Router.query.path
                        )
                        navigateByQuery()
                        setPagePath(
                            response.isAxiosError ? response.response : response
                        )
                    }
                }, [Router.isReady])
                return renderComponent()
            } else {
                window.open(routes.signIn(window.location.pathname), '_self')
                return <SkeletonPlaceHolder />
            }
        }
        return <SkeletonPlaceHolder />
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
