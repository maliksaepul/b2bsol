import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Humberger = ({ hide, open, toggleNav }) => {
    if (hide) {
        return null
    } else {
        return (
            <div
                className={cx(styles.humberger, open ? styles.open : '')}
                onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

Humberger.propTypes = {
    hide: PropTypes.bool,
    open: PropTypes.bool,
    toggleNav: PropTypes.func,
}
export default Humberger
