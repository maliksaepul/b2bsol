import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import styles from './style.module.scss'

const DropDown = ({ label, children, action, active }) => {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_container} onClick={action}>
                <p>{label}</p>
                <div
                    className={
                        active ? styles.chevron_up : styles.chevron_down
                    }>
                    <Icon name="Chevron" multiplier={1} fill={'black'} />
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

DropDown.propTypes = {
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
    action: PropTypes.func,
    active: PropTypes.bool,
}

export default DropDown
