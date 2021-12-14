import moment from 'moment'
export const maxTitlesLength = string => {
    if (string.length < 17) {
        return string
    } else {
        return string.slice(0, 15) + '...'
    }
}

export const dateDuration = (dateEnd, dateStart) => {
    const dateStartVal =
        dateStart !== undefined
            ? dateStart
            : moment().format('YYYY-MM-DD HH:mm')
    return moment.duration(moment(dateEnd).diff(dateStartVal))
}
