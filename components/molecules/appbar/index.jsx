import Logo from "@/components/atoms/logo"
import ProfileBar from "@/components/molecules/profilebar"
import styles from './style.module.scss'
import React from 'react'

const Appbar = () => {
    return (
        <div className={styles.appbar}>
            <Logo/>
            <ProfileBar username={"Malik"} usercover={"S"} className={styles.appbar_profile} />
        </div>
    )
}

export default Appbar
