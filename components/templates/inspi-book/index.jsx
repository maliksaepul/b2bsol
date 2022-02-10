// import CardBadge from '@/components/molecules/card-badge'
import styles from './style.module.scss'
import React from 'react'
import Card from '@/components/organisms/card'
import routes from '@/utils/routes'
import Image from 'next/image'
import cx from 'classnames'
const InspiBook = () => {
    return (
        <div className={styles.inspibook}>
            <div className={styles.inspibook_item}>
                <div className={styles.inspibook_card}>
                    <Card
                        title={{
                            type: 'string',
                            content: 'InspiBook',
                        }}
                        body="<p>Dengarkan dan baca ringkasan buku terbaik</p>"
                        cta={[
                            {
                                variant: 'secondary',
                                url: routes.myBadge(),
                                label: 'Eksplor',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={cx(styles.inspibook_item, styles.illu)}>
                <Image
                    src={'/images/section/inspibook/asset.png'}
                    width={477}
                    height={362}
                />
            </div>
        </div>
    )
}

export default InspiBook
