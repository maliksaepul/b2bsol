import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Humberger = ({ hide, open, toggleNav, variant, align }) => {
    if (hide) {
        return null
    } else {
        return (
            <div
                className={cx(
                    styles.humberger,
                    styles[variant],
                    styles[align],
                    open ? styles.open : ''
                )}
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
    variant: PropTypes.string,
    align: PropTypes.string,
}
export default Humberger
