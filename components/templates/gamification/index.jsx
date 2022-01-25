import CardBadge from '@/components/molecules/card-badge'
import styles from './style.module.scss'
import React from 'react'
import Card from '@/components/organisms/card'
import routes from '@/utils/routes'

const Gamification = () => {
    return (
        <div className={styles.gamification}>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_card}>
                    <Card
                        title={{
                            type: 'string',
                            content: 'Challenge Yourself',
                        }}
                        body="<p>Pengalaman belajarmu semakin seru!
                        Kumpulkan badge dan selesaikan misi berhadiah..</p>"
                        cta={[
                            {
                                variant: 'secondary',
                                url: routes.myBadge(),
                                label: 'Explore',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_badges}>
                    <div className={styles.gamification_badges_1}>
                        <CardBadge
                            icon={'BadgeMindfullness'}
                            description={'Description Maximum 120 Character'}
                        />
                    </div>
                    <div className={styles.gamification_badges_2}>
                        <CardBadge
                            icon={'BadgeAdventure'}
                            description={'Description Maximum 120 Character'}
                        />
                    </div>
                    <div className={styles.gamification_badges_3}>
                        <CardBadge
                            icon={'BadgeKidsNFriend'}
                            description={'Description Maximum 120 Character'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gamification
