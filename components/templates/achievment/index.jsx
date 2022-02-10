// import CardBadge from '@/components/molecules/card-badge'
import styles from './style.module.scss'
import React from 'react'
import Card from '@/components/organisms/card'
import routes from '@/utils/routes'
import Image from 'next/image'
import cx from 'classnames'
const Achievment = () => {
    return (
        <div className={styles.achievment}>
            <div className={styles.achievment_item}>
                <div className={styles.achievment_card}>
                    <Card
                        title={{
                            type: 'string',
                            content: 'Challenge Yourself',
                        }}
                        body="<p>Pengalaman belajarmu semakin seru!
                        Kumpulkan badge dan selesaikan misi berhadiah.</p>"
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
            <div className={cx(styles.achievment_item, styles.illu)}>
                <Image
                    src={'/images/section/achievment/asset.png'}
                    width={477}
                    height={362}
                />
            </div>
        </div>
    )
}

export default Achievment
