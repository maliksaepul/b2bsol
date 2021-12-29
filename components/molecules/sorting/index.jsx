import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const Sorting = ({ sortingList, onChange }) => {
    const handleClick = val => {
        onChange && onChange(val)
    }
    return (
        <div className={styles.sorting}>
            {sortingList.map((sort, key) => {
                return (
                    <p
                        className={styles.sorting_item}
                        key={key}
                        onClick={() => {
                            handleClick(sort.key)
                        }}>
                        {sort.label}
                    </p>
                )
            })}
        </div>
    )
}

Sorting.propTypes = {
    sortingList: PropTypes.array,
    onChange: PropTypes.func,
}

export default Sorting
