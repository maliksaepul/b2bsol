import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const withAuth = Component => {
    const EnchancedComponent = props => {
        const Router = useRouter()
        useEffect(async () => {
            const refreshToken = localStorage.getItem('refreshToken')
            // if no accessToken was found,then we redirect to "/" page.
            if (!refreshToken) {
                Router.replace('/')
            }
        }, [])
        return <Component {...props} />
    }

    return EnchancedComponent
}

export default withAuth
