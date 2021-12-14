import Image from 'next/image'
import Button from 'components/atoms/button'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const CardEvent = ({
    banner,
    event,
    variant,
    cta,
    label,
    start,
    end,
    type,
}) => {
    let contentDirection = ''
    switch (variant) {
        case 'column':
            contentDirection = styles.column
            break
        case 'column-reverse':
            contentDirection = styles.column_reverse
            break
        case 'row-reverse':
            contentDirection = styles.row_reverse
            break
        default:
            contentDirection = ''
            break
    }

    const handleCta = (disabled, url) => {
        if (!disabled) {
            window.open(url)
        }
    }

    const renderButton = () => {
        return cta.map((val, key) => (
            <Button
                key={key}
                variant={val.disabled ? 'secondary' : 'primary'}
                size={'xsmall'}
                cta={() => handleCta(val.disabled, val.url)}
                label={val.title}
                icon={true}
            />
        ))
    }

    const renderCard = () => {
        if (banner !== '') {
            return (
                <div className={cx(styles.cardevent, contentDirection)}>
                    <div className="card_event__illu">
                        <Image
                            src={banner}
                            className={styles.cardevent_illu}
                            width={1200}
                            height={600}
                        />
                    </div>
                    <div className={styles.cardevent_event}>
                        <div>
                            <div className={styles.cardevent_event_label}>
                                {' '}
                                <span style={label.style}>
                                    {label.category}
                                </span>{' '}
                            </div>
                            <div className={styles.cardevent_event__title}>
                                <h6>{event.title}</h6>
                            </div>
                        </div>
                        <article
                            className={styles.cardevent_event__description}
                            dangerouslySetInnerHTML={{
                                __html: event.content,
                            }}></article>
                        <div className={styles.cardevent_event__time}>
                            {event.date}
                        </div>
                    </div>
                    <div className={styles.cardevent_cta}>{renderButton()}</div>
                </div>
            )
        } else {
            return (
                <>
                    <div className={'card_skeleton'}></div>
                    <div className={'card_skeleton'}></div>
                    <div className={'card_skeleton'}></div>
                    <div className={'card_skeleton'}></div>
                </>
            )
        }
    }

    return renderCard()
}

CardEvent.propTypes = {
    banner: PropTypes.string,
    event: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string,
    }),
    variant: PropTypes.string,
    cta: PropTypes.array,
    label: PropTypes.shape({
        category: PropTypes.string,
        style: PropTypes.object,
    }),
    start: PropTypes.string,
    end: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
}

CardEvent.defaultProps = {
    label: {
        category: null,
        style: null,
    },
}
export default CardEvent
