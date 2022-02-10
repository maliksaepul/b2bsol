import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './style.module.scss'
const SkeletonPlaceHolder = () => {
    return (
        <div className={styles.container}>
            <div className={styles._header}>
                <div className={styles._navbar}>
                    <div className={styles._navbar_item}>
                        <p>
                            <Skeleton height={'1rem'} width={'7rem'} />
                        </p>
                        &nbsp;&nbsp;&nbsp;
                        <p>
                            <Skeleton height={'1rem'} width={'7rem'} />
                        </p>
                    </div>
                </div>
                <div className={styles._appbar}>
                    <div>
                        <Skeleton height={'2.5rem'} width={'7.5rem'} />
                    </div>
                    <div className={styles._profile}>
                        <div>
                            <Skeleton height={'1rem'} width={'7.5rem'} />
                        </div>
                        &nbsp;
                        <div>
                            <Skeleton
                                height={'2.5rem'}
                                width={'2.5rem'}
                                circle={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles._about}>
                <div className={styles._about_head}>
                    <p>
                        <Skeleton height={'2rem'} width={'20rem'} />
                    </p>
                    <br />
                    <p>
                        <Skeleton height={'2rem'} width={'30rem'} />
                    </p>
                </div>

                <div className={styles._about_card}>
                    <p>
                        <Skeleton height={'1.25rem'} width={'10rem'} />
                    </p>
                    <p>
                        <Skeleton height={'1rem'} width={'15rem'} />
                    </p>

                    <div>
                        <Skeleton height={200} />
                    </div>
                </div>
            </div>
            <div className={styles._main}>
                <div className={styles._content}>
                    <Skeleton height={300} />
                </div>
                <div className={styles._content}>
                    <Skeleton height={300} />
                </div>
                <div className={styles._content}>
                    <Skeleton height={300} />
                </div>
            </div>
            <div className={styles._footer}>
                <Skeleton height={40} />
            </div>
        </div>
    )
}

export default SkeletonPlaceHolder
