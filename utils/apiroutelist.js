import { SERVICE } from './constants'

export const API_PODCAST = (path, skip, limit) =>
    `${process.env.SERVICE_CONTENT}/organization/${
        path || 'inspigo'
    }/albums?limit=${limit || 10}&skip${skip || 0}`

export const API_VIDEO = `${process.env.BASEURL}/api/vod`
export const API_APB = `${process.env.BASEURL}/api/apb`

export const account = {
    self: () => SERVICE.ACCOUNT + '/accounts/self?ref_subs=true',
    revokeUser: () => SERVICE.ACCOUNT + '/login/revoke',
}
