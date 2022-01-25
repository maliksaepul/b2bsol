import Button from '@/components/atoms/button'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const Recomendation = props => {
    const router = useRouter()
    return (
        <div className={styles.recomendation}>
            <div className={styles.label_container}>
                <Label
                    description={props.description}
                    title={props.title}
                    variant="center"
                />
            </div>
            <div className={styles.marquee}>{props.children}</div>
            <div className={styles.cta}>
                <Button
                    variant={props.cta.variant || 'primary'}
                    label={props.cta.label}
                    cta={() => router.push(props.cta.url)}
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
