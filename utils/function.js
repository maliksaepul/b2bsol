import moment from 'moment'
import _ from 'lodash'
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

export const queryData = (data, search, filter, sorting) => {
    let response = data
    if (search) {
        response = response.filter((val, i) => {
            return val.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }
    if (filter) {
        const filterlist = filter.toLowerCase().split(',')
        response = response.filter((val, i) => {
            return filterlist.includes(val.category.toLowerCase())
        })
    }
    if (sorting) {
        response = _.sortBy(response, [sorting])
    }
    return response
}
