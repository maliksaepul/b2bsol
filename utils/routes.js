import { BASEURL, MEMBER } from './constants'

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
    myProfile: () => MEMBER + '/home/profile/overview',

    myBadge: () => MEMBER + '/home/profile/badge',
    myStatistic: () => MEMBER + '/home/profile/statistic',
    signIn: pathname =>
        MEMBER + '/signin?r=' + BASEURL + pathname + '&withToken=1',
}

export default routes
