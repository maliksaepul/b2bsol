import Footer from '@/components/templates/footer'
import Header from '@/components/templates/header'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const WithoutHeader = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

WithoutHeader.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.array,
        PropTypes.object,
        PropTypes.element
    ),
}

export default WithoutHeader
