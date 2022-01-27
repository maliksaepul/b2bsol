import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const CardBadge = ({ children, description }) => {
    return (
        <div className={styles.cardBadge}>
            {children}
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
    description: PropTypes.string,
    children: PropTypes.any,
}

export default CardBadge
