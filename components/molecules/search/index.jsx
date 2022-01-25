import React, { useEffect, useMemo } from 'react'
import Icon from '@/components/atoms/icon'
import styles from './style.module.scss'
import _ from 'lodash'
import PropTypes from 'prop-types'
const Search = ({ onChange }) => {
    const handleChange = e => {
        onChange && onChange(e.target.value)
    }

    const debouncedChangeHandler = useMemo(
        () => _.debounce(handleChange, 1000),
        []
    )

    useEffect(() => {
        return () => {
            debouncedChangeHandler.cancel()
        }
    }, [])

    return (
        <div className={styles.search}>
            <Icon name="search" multiplier={0.83} />
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
