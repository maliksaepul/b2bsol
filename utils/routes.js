import { LOCAL_STORAGE, MEMBER } from './constants'

const routes = {
    /**
     * Audio Learning
     * @returns
     */
    audiolearning: alias => {
        if (alias) return `/audiolearning/${alias}`
        else return `/audiolearning`
    },
    /**
     * Video Learning
     * @returns
     */
    videolearning: () => `/video-learning`,
    /**
     * Audio Playbook
     * @returns
     */
    audioplaybook: alias => {
        if (alias) return `/audioplaybook/${alias}`
        else return `/audioplaybook`
    },
    /**
     * Audio Playbook
     * @returns
     */
    leaderboard: () => `/leaderboard`,

    /**
     * My Profile
     * @returns
     */
    myProfile: () =>
        MEMBER +
        '/home/profile/overview' +
        '?refresh=' +
        localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN),
}

export default routes
