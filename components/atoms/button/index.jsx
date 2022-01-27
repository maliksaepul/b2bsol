import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ variant, size, cta, id, label, children }) => {
    let typeOfButton, sizeOfButton
    switch (variant) {
        case 'primary':
            typeOfButton = styles.button_primary
            break
        case 'secondary':
            typeOfButton = styles.button_secondary
            break
        default:
            typeOfButton = ''
            break
    }

    switch (size) {
        case 'small':
            sizeOfButton = styles.button_sm
            break
        case 'large':
            sizeOfButton = styles.button_lg
            break
        case 'medium':
            sizeOfButton = styles.button_md
            break
        case 'xsmall':
            sizeOfButton = styles.button_xsm
            break
        default:
            sizeOfButton = ''
            break
    }

    return (
        <div
            className={cx(styles.button, typeOfButton, sizeOfButton)}
            onClick={cta}
            id={id || ''}>
            <div className={styles.text}>
                {children}
                <span>{label}</span>
            </div>
        </div>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    cta: PropTypes.func,
    id: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            name: PropTypes.string,
            fill: PropTypes.string,
            multiplier: PropTypes.string,
            stroke: PropTypes.string,
        }),
        PropTypes.object,
    ]),
    label: PropTypes.string,
    children: PropTypes.any,
}

Button.defaultProps = {
    icon: false,
}

export default Button
