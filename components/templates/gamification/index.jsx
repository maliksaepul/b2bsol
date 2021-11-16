import CardBadge from '@/components/molecules/card-badge'
import styles from './style.module.scss'
import React from 'react'
import Card from '@/components/molecules/card'

const Gamification = () => {
    return (
        <div className={styles.gamification}>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_card}>
                    <Card
                        title={{ type: 'string', content: 'Gamification' }}
                        body="<p>Belajar langsung dari para ahli. Master Course hadir dengan pembahasan mendalam hanya untukmu! Telusuri lebih lanjut dan mulai ikuti kursus.</p>"
                        cta={[
                            {
                                variant: 'secondary',
                                url: 'google.com',
                                label: 'Explore',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_badges}>
                    <div className={styles.gamification_badges_1}>
                        <CardBadge icon={'BadgeMindfullness'} />
                    </div>
                    <div className={styles.gamification_badges_2}>
                        <CardBadge icon={'BadgeAdventure'} />
                    </div>
                    <div className={styles.gamification_badges_3}>
                        <CardBadge icon={'BadgeKidsNFriend'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gamification
