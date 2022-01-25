import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Button from '@/components/atoms/button'
import Image from 'next/image'
import cx from 'classnames'

const Card = ({ body, children, title, cta, align }) => {
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
                return (
                    <div className={styles.card_title}>
                        <Image
                            src={title.content}
                            width={title.width || '452.86'}
                            height={title.height || '197.74'}
                        />
                    </div>
                )
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
                    cta={() => window.open(val.url, '_self')}
                />
            )
        })
    }

    return (
        <div className={cx(styles.card, styles[align])}>
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
        width: PropTypes.any,
        height: PropTypes.any,
    }),
    cta: PropTypes.array,
    align: PropTypes.string,
}

Card.defaultProps = {
    align: 'left',
}

export default Card
