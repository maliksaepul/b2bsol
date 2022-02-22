import React, { useState } from 'react'
import styles from './style.module.scss'

import PropTypes from 'prop-types'

import { search } from '@/utils/icons'

const Search = ({ onChange }) => {
    const [searchVal, setSearchVal] = useState('')

    const handleChange = e => {
        setSearchVal(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onChange && onChange(searchVal)
    }

    return (
        <form className={styles.search} onSubmit={e => handleSubmit(e)}>
            {search(null, null, 0.83)}
            <input
                className={styles.search_input}
                type="text"
                placeholder="Cari judul  atau nama speaker"
                onChange={e => handleChange(e)}
                value={searchVal}
            />
            <button name="search" type="submit" className={styles.search_btn}>
                Cari
            </button>
        </form>
    )
}

Search.propTypes = {
    onChange: PropTypes.func,
}

export default Search
