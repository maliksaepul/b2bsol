import axios from 'axios'

// Utils
import { ORIGIN, GRANT_TYPE, LOCAL_STORAGE, SERVICE } from 'utils/constants'
import { saveToken, getQueryParam } from 'utils/helpers'

// Services
// import services from 'store/services'

class Request {
    constructor(params, headers, withAccessToken) {
        this.config = {
            params: {
                ...params,
            },
            headers: {
                ...headers,
            },
        }

        this.pendingRequest = []
        this.withAccessToken = withAccessToken || null

        this.setToken()
        this.setAuthorizationHeaders()
    }

    setToken(token) {
        console.log(token)
        this.accessToken = token
            ? token.access
            : localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN) || null
        this.refreshToken = token
            ? token.refresh
            : localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN) || null
    }

    setAuthorizationHeaders() {
        if (this.withAccessToken) {
            this.config.headers.Authorization = `Bearer ${
                getQueryParam('refresh') || this.accessToken
            }`
        }
    }

    async sendRequest(request, regenerateToken) {
        try {
            const response = await request()
            const replaceToken = response.status === 200 && this.withAccessToken

            if (replaceToken && getQueryParam('refresh')) {
                const token = {
                    access: response.data.token.access,
                    refresh: getQueryParam('refresh'),
                }
                saveToken(token)
            }
            return response
        } catch (error) {
            if (error.response.status === 401 && regenerateToken) {
                this.pendingRequest.push(() => this.sendRequest(request))
                return this.regenerateAccessToken()
            }

            throw error
        }
    }

    async regenerateAccessToken() {
        const url = SERVICE.ACCOUNT + '/login'
        const values = {
            grant_type: GRANT_TYPE.TOKEN,
            origin: ORIGIN,
            value: this.refreshToken,
        }

        try {
            const request = () => axios.post(url, values, this.config)
            const response = await request()

            this.setToken(response.data.data.token)
            this.setAuthorizationHeaders()

            return await this.pendingRequest[0]()
        } catch (error) {
            return error
        }
    }

    get(url) {
        const request = () => axios.get(url, this.config)
        return this.sendRequest(request, true)
    }

    post(url, values) {
        const request = () => axios.post(url, values, this.config)
        return this.sendRequest(request, true)
    }

    put(url, values) {
        const request = () => axios.put(url, values, this.config)
        return this.sendRequest(request, true)
    }

    delete(url) {
        const request = () => axios.delete(url, this.config)
        return this.sendRequest(request, true)
    }
}

export default Request
