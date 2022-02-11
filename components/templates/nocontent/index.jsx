import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './style.module.scss'

const NoContent = props => {
    return (
        <div className={styles.nocontent}>
            <div className={styles.nocontent_container}>
                <Image src={'/images/notfound.png'} width={313} height={320} />
                <p className={'text-disabled'}>
                    {props.title ||
                        'Belum ada konten yang tersedia untuk topik ini. Silakan coba topik menarik lainnya!'}
                </p>
            </div>
        </div>
    )
}

NoContent.propTypes = {
    title: PropTypes.string,
}

export default NoContent
