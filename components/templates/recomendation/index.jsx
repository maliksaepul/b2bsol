import Button from '@/components/atoms/button'
import Label from '@/components/molecules/label'
import Marquee from '@/components/molecules/marquee'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Recomendation = props => {
    return (
        <div className={styles.recomendation}>
            <div className={styles.label_container}>
                <Label
                    description={props.description}
                    title={props.title}
                    variant="center"
                />
            </div>
            <div className={styles.marquee}>
                <Marquee animationDuration={'32s'}>{props.children}</Marquee>
            </div>
            <div className={styles.cta}>
                <Button
                    variant={props.cta.variant || 'primary'}
                    label={props.cta.label}
                />
            </div>
        </div>
    )
}

Recomendation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
    title: PropTypes.string,
    description: PropTypes.string,
    cta: PropTypes.object,
}

export default Recomendation
