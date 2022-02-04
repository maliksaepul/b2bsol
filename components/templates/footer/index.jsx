import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_item}>
                PT Inspigo Inovasi Indonesia
            </div>
            <div className={cx(styles.footer_item, styles.right)}>
                Untuk bantuan admin@inspigo.id
            </div>
        </footer>
    )
}

export default Footer
