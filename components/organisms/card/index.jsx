import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Button from '@/components/atoms/button'

const Card = ({ body, children, title, cta }) => {
    const renderTitle = () => {
        switch (title.type) {
            case 'string':
                return (
                    <div className={styles.card_title}>
                        {' '}
                        <h1>{title.content}</h1>{' '}
                    </div>
                )
            case 'image':
                return <div className={styles.card_illu}>{title.content}</div>
            default:
                return (
                    <div className={styles.card_title}>
                        <h1>{title.content}</h1>
                    </div>
                )
        }
    }

    const renderCta = () => {
        return cta.map((val, key) => {
            return (
                <Button
                    key={key}
                    label={val.label}
                    icon={val.icon}
                    variant={'secondary'}
                />
            )
        })
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>{renderTitle()}</div>
            <div className={styles.card_body}>
                <article dangerouslySetInnerHTML={{ __html: body }}></article>
                <article>{children}</article>
                <div className={styles.cta}>{renderCta()}</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    body: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.object,
    ]),
    title: PropTypes.shape({
        type: PropTypes.string,
        content: PropTypes.string,
    }),
    cta: PropTypes.array,
}

export default Card
