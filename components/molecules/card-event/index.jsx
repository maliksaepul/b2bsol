import Image from 'next/image'
import Interweave from 'interweave'
import Button from 'components/atoms/button'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const CardEvent = ({ banner, event, varian, cta }) => {
    let contentDirection = ''
    switch (varian) {
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
                <div className={styles.cardevent_event__title}>
                    <h6>{event.title}</h6>
                </div>
                <article className={styles.cardevent_event__description}>
                    <Interweave content={event.content} />
                </article>
            </div>
            <div className={styles.cardevent_cta}>
                {cta.map((val, key) => (
                    <Button
                        key={key}
                        varian={val.disabled ? 'secondary' : 'primary'}
                        size={'xsmall'}
                        cta={() => handleCta(val.disabled, val.url)}
                        label={val.title}
                        icon={true}
                    />
                ))}
            </div>
        </div>
    )
}

CardEvent.propTypes = {
    banner: PropTypes.string,
    event: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    }),
    varian: PropTypes.string,
    cta: PropTypes.array,
}

export default CardEvent
