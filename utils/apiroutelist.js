import { BASEURL, SERVICE } from './constants'

export const API_PODCAST = `${process.env.BASEURL}/api/podcast`

export const API_VIDEO = `${process.env.BASEURL}/api/vod`
export const API_APB = `${process.env.BASEURL}/api/apb`

export const content = {
    podcast: path => {
        return `${process.env.SERVICE_CONTENT}/organization/${path}/podcasts/learning`
    },
    inspibook: path => {
        return `${process.env.SERVICE_CONTENT}/organization/${path}/podcasts/inspibook`
    },
    dynamic: path => {
        return `${process.env.SERVICE_CONTENT}/organization${path}`
    },
}

export const dynamicUi = {
    home: path => BASEURL + path + 'home',
    podcasts: (path, link) => BASEURL + path + link,
}

export const serverDriven = {
    navbar: path => {
        return `${process.env.SERVICE_CONTENT}/organization/${path}/navbar`
    },
}

export const account = {
    self: () => SERVICE.ACCOUNT + '/accounts/self?ref_subs=true',
    revokeUser: () => SERVICE.ACCOUNT + '/login/revoke',
}
