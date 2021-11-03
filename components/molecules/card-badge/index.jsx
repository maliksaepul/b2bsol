import Label from '@/components/molecules/label'
import Image from 'next/image'
import adventure from '@/public/badge_skill-Adventurer.svg'
import mindfulness from '@/public/badge_Mindfull-Calm.svg'
import kidsnfriend from '@/public/badge_KF-Kids.svg'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const CardBadge = ({ icon, description }) => {
    const renderIcon = name => {
        switch (name) {
            case 'adventure':
                return <Image src={adventure} width={40} height={40} />
            case 'mindfulness':
                return <Image src={mindfulness} width={40} height={40} />
            case 'kidsnfriend':
                return <Image src={kidsnfriend} width={40} height={40} />
            default:
                return <Image src={adventure} width={40} height={40} />
        }
    }

    return (
        <div className={styles.cardBadge}>
            <div>{renderIcon(icon)}</div>
            <Label
                title={'Adventurer'}
                description={
                    description ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                }
                size={'small'}
            />
        </div>
    )
}

CardBadge.propTypes = {
    icon: PropTypes.string,
    description: PropTypes.string,
}

export default CardBadge
