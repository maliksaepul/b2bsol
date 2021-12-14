import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Image from 'next/image'
// import Button from '@/components/atoms/button'

const Modal = ({ illu, title, description, cta, close }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_container}>
                <div className={styles.modal_illu}>
                    <Image src={illu} width={200} height={200} />
                </div>
                <div className={styles.modal_title}>
                    <h3>{title}</h3>{' '}
                </div>
                <div className={styles.modal_description}>
                    {' '}
                    <p>{description}</p>{' '}
                </div>
                <div className={styles.modal_cta}>
                    {/* {
                        cta ? Button 
                    } */}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    illu: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cta: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    close: PropTypes.bool,
}

Modal.defaultProps = {
    cta: false,
}

export default Modal
