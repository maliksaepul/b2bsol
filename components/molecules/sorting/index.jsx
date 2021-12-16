import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const Sorting = ({ sortingList }) => {
    return (
        <div className={styles.sorting}>
            {sortingList.map((sort, key) => {
                return <p key={key}>{sort}</p>
            })}
        </div>
    )
}

Sorting.propTypes = {
    sortingList: PropTypes.array,
}

export default Sorting
