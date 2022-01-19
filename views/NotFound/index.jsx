import Card from '@/components/organisms/card'
import React from 'react'
import styles from './style.module.scss'

const NotFound = props => {
    return (
        <div className={styles.notfound}>
            <Card
                title={{
                    type: 'image',
                    content: '/images/notfound.png',
                    width: 312,
                    height: 320,
                }}
                body={'Maaf, halaman yang kamu cari tidak ditemukan.'}
                cta={[]}
                align="center"
            />
        </div>
    )
}

export default NotFound
