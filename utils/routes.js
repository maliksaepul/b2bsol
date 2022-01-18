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
     * Audio Learning
     * @returns
     */
    inspibook: alias => {
        if (alias) return `/inspibook/${alias}`
        else return `/inspibook`
    },
    /**
     * Video Learning
     * @returns
     */
    videolearning: () => `/videolearning`,
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
