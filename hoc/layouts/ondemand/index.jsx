import Footer from '@/components/molecules/footer'
import Header from '@/components/molecules/header'
import styles from './style.module.scss'
import React from 'react'
import HeaderBackground from '@/components/molecules/header/background'

const ondemand = ({ children }) => {
    return (
        <>
            <Header />
            <HeaderBackground
                foreground={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/ondemand_fg_87vo1LsOhqw.png?updatedAt=1636432770590'
                }
                foregroundMobile={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/ondemand_mobile_llT-uKq67II.png?updatedAt=1636428541030'
                }
                height={'25rem'}
            />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default ondemand
