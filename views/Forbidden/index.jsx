import Card from '@/components/organisms/card'
import React from 'react'
import styles from './style.module.scss'

const Forbidden = props => {
    return (
        <div className={styles.forbidden}>
            <Card
                title={{
                    type: 'image',
                    content: '/images/forbidden.png',
                    width: 312,
                    height: 320,
                }}
                body={'Kamu tidak memiliki akses ke halaman ini'}
                cta={[]}
                align="center"
            />
        </div>
    )
}

export default Forbidden
