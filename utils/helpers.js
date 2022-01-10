import moment from 'moment'
import _ from 'lodash'
import { LOCAL_STORAGE } from 'utils/constants'

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

/**
 * Save token
 * @param {object} token
 */
export const saveToken = token => {
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token.access)
    token.refresh &&
        localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, token.refresh)
}

/**
 * Remove token
 */
export const removeToken = () => {
    localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN)
    localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN)
}

/**
 * Date converter
 */
//  export class dateConverter {
//     static check = (date, result) => {
//         if (date === null || date === undefined) {
//             return 'Unknown'
//         } else {
//             return result
//         }
//     }

//     static unix(unixString) {
//         return this.check(unixString, moment.unix(unixString).format('lll'))
//     }

//     static iso(ISOString) {
//         return this.check(ISOString, moment(ISOString).format('lll'))
//     }
// }

/**
 * Get query param
 * @param {string} param
 * @returns
 */
export const getQueryParam = param => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}
