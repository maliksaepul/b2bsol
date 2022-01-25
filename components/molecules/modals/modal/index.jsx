import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

import { disableScroll } from '@/utils/helpers'

const Modal = ({ close, children, handleClose }) => {
    const renderModal = param => {
        if (param) {
            disableScroll.off()
            return null
        } else {
            disableScroll.on()
            return (
                <div
                    className={styles.modal}
                    onClick={() => {
                        handleClose && handleClose()
                    }}>
                    <div className={styles.modal_container}>{children}</div>
                </div>
            )
        }
    }

    return renderModal(close)
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
