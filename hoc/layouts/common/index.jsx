import dynamic from 'next/dynamic'
// import Header from '@/containers/components/Header'
// import Footer from '@/components/templates/footer'
import styles from './style.module.scss'
import React from 'react'
// import HeaderBackground from '@/components/templates/header/background'
const Header = dynamic(() => import('@/containers/components/Header'))
const Footer = dynamic(() => import('@/components/templates/footer'))
const HeaderBackground = dynamic(() =>
    import('@/components/templates/header/background')
)

const common = ({ children }) => {
    return (
        <>
            <Header />
            <HeaderBackground
                foreground={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/fg_J8_de1kDFkp.png?updatedAt=1636427732547'
                }
                foregroundMobile={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/mobile_version_A1N-lWQRMTf.png?updatedAt=1636427723105'
                }
            />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default common
