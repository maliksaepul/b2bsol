import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
const Grid = ({ children }) => {
    return <div className={styles.grid}>{children}</div>
}

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
}

export default Grid
