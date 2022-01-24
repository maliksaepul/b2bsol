import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import cx from 'classnames'
import { disableScroll } from '@/utils/helpers'
const Modal = ({ close, children, handleClose }) => {
    useEffect(() => {
        if (close) {
            disableScroll.off()
        } else {
            disableScroll.on()
        }
    })
    return (
        <div
            className={cx(styles.modal, close ? styles.modal_close : '')}
            onClick={() => {
                handleClose && handleClose()
            }}>
            <div className={styles.modal_container}>{children}</div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    close: PropTypes.bool,
    handleClose: PropTypes.func,
}

Modal.defaultProps = {
    cta: false,
}

export default Modal
