import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Image from 'next/image'
import cx from 'classnames'

const WithIllu = ({ children, illu, className }) => {
    return (
        <div className={cx(styles.withIllu, className)}>
            <div className={cx(styles.withIllu_card, styles.item)}>
                {children}
            </div>
            <div className={cx(styles.withIllu_illu, styles.item)}>
                <Image
                    src={illu.src}
                    width={illu.width || 500}
                    height={illu.height || 500}
                    layouts="responsive"
                />
            </div>
        </div>
    )
}

WithIllu.propTypes = {
    illu: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default WithIllu
