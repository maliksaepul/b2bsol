import Button from '@/components/atoms/Button'
import CardBadge from '@/components/molecules/card-badge'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'

const Gamification = () => {
    return (
        <div className={styles.gamification}>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_card}>
                    <Label
                        title="Gamification"
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla nunc efficitur dignissim a id nibh. Fusce ac felis erat placerat.'
                        }
                        headline={true}
                    />
                    <Button
                        varian={'secondary'}
                        cta={() => {
                            console.log('Button')
                        }}
                        label={'Explore'}
                    />
                </div>
            </div>
            <div className={styles.gamification_item}>
                <div className={styles.gamification_badges}>
                    <div className={styles.gamification_badges_1}>
                        <CardBadge icon={'mindfulness'} />
                    </div>
                    <div className={styles.gamification_badges_2}>
                        <CardBadge icon={'adventure'} />
                    </div>
                    <div className={styles.gamification_badges_3}>
                        <CardBadge icon={'kidsnfriend'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gamification
