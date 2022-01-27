import moment from 'moment'
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
    // if (sorting) {
    //     response = respons
    // }
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
 * Get query param
 * @param {string} param
 * @returns
 */
export const getQueryParam = param => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}

export class disableScroll {
    static on() {
        document.body.style.overflow = 'hidden'
        document.body.style.top = `-${window.scrollY}px`
    }

    static off() {
        document.body.style.overflow = 'auto'
        const scrollY = document.body.style.top
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
}

export const debounce = (func, timeout = 300, cancel) => {
    let timer
    if (cancel) {
        return clearTimeout(timer)
    }
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}
