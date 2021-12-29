const routes = {
    /**
     * Audio Learning
     * @returns
     */
    audilearning: alias => {
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
}

export default routes
