import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import cx from 'classnames'
const Grid = ({ children, variant }) => {
    return <div className={cx(styles.grid, styles[variant])}>{children}</div>
}

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
    variant: PropTypes.string,
}

export default Grid
