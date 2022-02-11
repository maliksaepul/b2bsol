import routes from '@/utils/routes'

export const ENVIRONMENT = process.env.ENVIRONMENT
export const BASEURL = process.env.BASEURL
export const MEMBER = process.env.MEMBER
export const PLAYER = process.env.PLAYER
export const IS_DEVELOPMENT = ENVIRONMENT !== 'production'
export const ORIGIN = process.env.ORIGIN
export const GTM = process.env.GTM

export const SERVICE = {
    ACCOUNT: process.env.SERVICE_ACCOUNT,
    API: process.env.SERVICE_API,
    CONTENT: process.env.SERVICE_CONTENT,
}

export const LOCAL_STORAGE = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
}

export const MODAL = 'showModal'

export const GRANT_TYPE = {
    TOKEN: 'token',
    PASSWORD: 'password',
}

export const CARD_EVENT_TYPE = {
    EVENT: 'event',
    COURSE: 'course',
    PODCAST: 'podcast',
    APB: 'audioplaybook',
    INSPIBOOK: 'inspibook',
    VOD: 'vod',
}

export const PROFILE_ITEM = [
    {
        label: 'My Profile',
        url: routes.myProfile(),
    },
    // {
    //     label: 'My Statistic',
    //     url: routes.myStatistic(),
    // },
    {
        label: 'My Badge',
        url: routes.myBadge(),
    },
    // { label: 'About', url: routes.myProfile() },
]

export const defaultContentLimit = 10
