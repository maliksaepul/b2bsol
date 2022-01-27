import React, { useEffect, useMemo } from 'react'
import styles from './style.module.scss'

import PropTypes from 'prop-types'
import { debounce } from '@/utils/helpers'
import { search } from '@/utils/icons'

const Search = ({ onChange }) => {
    const handleChange = e => {
        if (e) {
            onChange && onChange(e.target.value)
        }
    }

    const debouncedChangeHandler = useMemo(
        () => debounce(handleChange, 1000),
        []
    )

    useEffect(() => {
        return () => {
            debounce(handleChange, 1000, true)
        }
    }, [])

    return (
        <div className={styles.search}>
            {search(null, null, 0.83)}
            <input
                className={styles.search_input}
                type="text"
                placeholder="Cari judul  atau nama speaker"
                onChange={debouncedChangeHandler}
            />
        </div>
    )
}

Search.propTypes = {
    onChange: PropTypes.func,
}

export default Search
