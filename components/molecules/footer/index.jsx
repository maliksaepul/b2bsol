import styles from './style.module.scss'
import React from 'react'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_item}>
                PT Inspigo Inovasi Indonesia
            </div>
            <div className={styles.footer_item}>
                Untuk bantuan admin@inspigo.id
            </div>
        </footer>
    )
}

export default Footer
