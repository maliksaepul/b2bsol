import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './style.module.scss'
const SkeletonPlaceHolder = () => {
    return (
        <div>
            <div role="header" className={styles._header}>
                <Skeleton height={40} />
            </div>
            <div role="main" className={styles._main}>
                <div role="content" className={styles._content}>
                    <Skeleton height={300} />
                </div>
                <div role="content" className={styles._content}>
                    <Skeleton height={300} />
                </div>
                <div role="content" className={styles._content}>
                    <Skeleton height={300} />
                </div>
                <div role="content" className={styles._content}>
                    <Skeleton height={300} />
                </div>
            </div>
            <div role="footer" className={styles._footer}>
                <Skeleton height={40} />
            </div>
        </div>
    )
}

export default SkeletonPlaceHolder
