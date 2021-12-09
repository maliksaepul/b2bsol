import React from 'react'
import Icon from '@/components/atoms/icon'
import styles from './style.module.scss'
const Search = () => {
    return (
        <div className={styles.search}>
            <Icon name="search" multiplier={0.83} />
            <input
                className={styles.search_input}
                type="text"
                placeholder="Search Here"
            />
        </div>
    )
}

export default Search
