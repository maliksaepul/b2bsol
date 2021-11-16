import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@/components/atoms/icon'

const CardBadge = ({ icon, description }) => {
    return (
        <div className={styles.cardBadge}>
            <Icon name={icon} multiplier={1} />
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
