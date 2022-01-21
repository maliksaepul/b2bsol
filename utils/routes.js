import { BASEURL, MEMBER } from './constants'

const routes = {
    /**
     * Audio Learning
     * @returns
     */
    audiolearning: (path, alias) => {
        if (alias) return `${BASEURL}/${path}/audiolearning/${alias}`
        else return `${BASEURL}/${path}/audiolearning/`
    },

    /**
     * Audio Learning
     * @returns
     */
    inspibook: (path, alias) => {
        if (alias) return `${BASEURL}/${path}/inspibook/${alias}`
        else return `${BASEURL}/${path}/inspibook`
    },
    /**
     * Video Learning
     * @returns
     */
    videolearning: (path, alias) => {
        if (alias) return `${BASEURL}/${path}/videolearning/${alias}`
        else return `${BASEURL}/${path}/videolearning`
    },
    /**
     * Audio Playbook
     * @returns
     */
    audioplaybook: (path, alias) => {
        if (alias) return `${BASEURL}/${path}//audioplaybook/${alias}`
        else return `${BASEURL}/${path}/audioplaybook`
    },
    /**
     * Audio Playbook
     * @returns
     */
    leaderboard: path => `${BASEURL}/${path}/leaderboard`,

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
