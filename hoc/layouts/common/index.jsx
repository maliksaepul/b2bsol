import Footer from '@/components/molecules/footer'
import Header from '@/components/molecules/header'
import styles from './style.module.scss'
import React from 'react'

const common = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default common
