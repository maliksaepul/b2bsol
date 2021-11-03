import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'


const Button = ({ varian, size, cta, id, label, icon }) => {
    let typeOfButton, sizeOfButton
    switch (varian) {
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

    const renderIcon = condition => {
        if (condition !== true) {
            return null
        } else {
            return (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.16675 4.16664V15.8333C4.16675 16.0543 4.25455 16.2663 4.41083 16.4226C4.56711 16.5788 4.77907 16.6666 5.00008 16.6666H7.50008V15H5.83341V4.99997H7.50008V3.33331H5.00008C4.77907 3.33331 4.56711 3.4211 4.41083 3.57738C4.25455 3.73366 4.16675 3.94563 4.16675 4.16664ZM16.0351 3.35831L9.36841 1.69164C9.2456 1.66101 9.11741 1.65876 8.99359 1.68506C8.86978 1.71136 8.75358 1.76552 8.65381 1.84344C8.55405 1.92135 8.47335 2.02097 8.41784 2.13472C8.36232 2.24848 8.33345 2.37339 8.33341 2.49997V17.5C8.33312 17.6267 8.36178 17.7517 8.4172 17.8657C8.47261 17.9796 8.55333 18.0794 8.65317 18.1573C8.75302 18.2353 8.86936 18.2895 8.99332 18.3156C9.11727 18.3418 9.24557 18.3393 9.36841 18.3083L16.0351 16.6416C16.2154 16.5967 16.3756 16.4927 16.49 16.3462C16.6045 16.1997 16.6667 16.0192 16.6667 15.8333V4.16664C16.6667 3.98075 16.6045 3.80022 16.49 3.65375C16.3756 3.50729 16.2154 3.40329 16.0351 3.35831ZM12.5001 10.1566C12.4905 10.3712 12.3985 10.5738 12.2433 10.7222C12.088 10.8707 11.8815 10.9535 11.6667 10.9535C11.452 10.9535 11.2455 10.8707 11.0902 10.7222C10.935 10.5738 10.843 10.3712 10.8334 10.1566V9.84247C10.8335 9.62146 10.9214 9.40954 11.0778 9.25334C11.2341 9.09714 11.4462 9.00945 11.6672 9.00956C11.8882 9.00967 12.1001 9.09757 12.2563 9.25393C12.4125 9.41029 12.5002 9.62229 12.5001 9.84331V10.1566Z"
                        fill="#F8F8F8"
                    />
                </svg>
            )
        }
    }

    return (
        <div
            className={cx(styles.button, typeOfButton, sizeOfButton)}
            onClick={cta}
            id={id || ''}>
            {renderIcon(icon)}
            <span>{label}</span>
        </div>
    )
}

Button.propTypes = {
    varian : PropTypes.string,
    size : PropTypes.string,
    cta : PropTypes.func,
    id : PropTypes.string,
    icon : PropTypes.bool,
    label : PropTypes.string
}

export default Button
