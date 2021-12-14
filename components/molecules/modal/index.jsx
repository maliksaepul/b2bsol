import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Image from 'next/image'
import Button from '@/components/atoms/button'
import cx from 'classnames'
const Modal = ({ illu, title, description, cta, ctaLabel, close }) => {
    return (
        <div className={cx(styles.modal, close ? styles.modal_close : '')}>
            <div className={styles.modal_container}>
                <div className={styles.modal_illu}>
                    <Image src={illu} width={200} height={200} />
                </div>
                <div className={styles.modal_title}>
                    <h5>{title}</h5>
                </div>
                <div className={styles.modal_description}>
                    <p className="text-secondary">{description}</p>
                </div>
                <div className={styles.modal_cta}>
                    {cta ? (
                        <Button
                            variant={'primary'}
                            icon={false}
                            label={ctaLabel}
                            cta={cta}
                        />
                    ) : null}
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
    ctaLabel: PropTypes.string,
    close: PropTypes.bool,
}

Modal.defaultProps = {
    cta: false,
}

export default Modal
