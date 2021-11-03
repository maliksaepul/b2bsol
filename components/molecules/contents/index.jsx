import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
const Contents = ({children}) => {
    return (
        <div className={styles.contents}>
            <div className={styles.toolbar}>
                <div className={styles.toolbar_item}>
                    <div>Search here</div>
                </div>
                <div className={styles.toolbar_item}>
                    <div>Filter</div>
                    <div>Urutkan</div>
                </div>
            </div>
            <div className={styles.grid}>
                content grid
            </div>
            {children}
        </div>
    )
}

Contents.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default Contents
