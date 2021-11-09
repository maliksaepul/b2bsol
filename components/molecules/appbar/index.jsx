import Logo from '@/components/atoms/logo'
import ProfileBar from '@/components/molecules/profile/bar'
import styles from './style.module.scss'
import React from 'react'
import Humberger from '@/components/molecules/humberger'

const Appbar = () => {
    return (
        <div className={styles.appbar}>
            <Logo />
            <div className={styles.toolbar}>
                <ProfileBar username={'Malik'} usercover={'S'} />
            </div>
            <div className={styles.humberger}>
                <Humberger />
            </div>
        </div>
    )
}

export default Appbar
