import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Button from '@/components/atoms/button'
import styles from './style.module.scss'

const GeneralModal = ({ illu, title, description, cta, ctaLabel }) => {
    return (
        <>
            <div className={styles.modal_illu}>
                <Image src={illu} width={200} height={200} />
            </div>
            <div className={styles.modal_title}>
                <h5>{title}</h5>
            </div>
            <div className={styles.modal_description}>
                <p className="text-black-2">{description}</p>
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
        </>
    )
}

GeneralModal.propTypes = {
    illu: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cta: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    ctaLabel: PropTypes.string,
}

GeneralModal.defaultProps = {
    cta: false,
}

export default GeneralModal
