import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Section = props => {
    const { children, className, id, variant } = props
    let bgc = ''
    switch (variant) {
        case 'primary':
            bgc = styles.section_primary
            break
        default:
            bgc = ''
            break
    }
    return (
        <section
            className={cx(styles.section, bgc)}
            id={id}
            style={props.style || {}}>
            <div className={cx(styles.section_container, className)}>
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.string,
    decoration: PropTypes.array,
    style: PropTypes.object,
}

export default Section
