import Image from 'next/image'
import Button from 'components/atoms/button'
import styles from './style.module.scss'
import React, { useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { dateDuration } from '@/utils/helpers'
import AddToCalendar from '@/components/molecules/addtocalendar'
import Modal from '@/components/molecules/modals/modal'
import EventModal from '@/components/molecules/modals/event-modal'
import Share from '@/components/molecules/share'
import Copy from '@/components/atoms/copy'

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
    const [modal, setModal] = useState(false)

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

    const handleModal = () => {
        setModal(!modal)
    }

    const renderButton = () => {
        const duration = dateDuration(start).asHours()
        if ((type === 'event') & (duration >= 1)) {
            return (
                <AddToCalendar
                    options={[
                        { label: 'Google Calender', alias: 'google' },
                        { label: 'Apple', alias: 'ics' },
                    ]}
                    events={{
                        title: event.title,
                        description: event.content,
                        start: start,
                        end: end,
                    }}
                    label={'Tambahkan Jadwal'}
                />
            )
        } else {
            return (
                <>
                    {cta.map((val, key) => (
                        <Button
                            key={key}
                            variant={val.disabled ? 'secondary' : 'primary'}
                            size={'xsmall'}
                            cta={() => handleCta(val.disabled, val.url)}
                            label={val.title}
                            icon={true}
                        />
                    ))}
                    <Button
                        variant={'secondary'}
                        size={'xsmall'}
                        cta={() => {
                            handleModal()
                        }}
                        label={'Bagikan'}
                        icon={{ name: 'Share', multiplier: 1 }}
                    />
                </>
            )
        }
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
                    <Modal close={!modal} handleClose={handleModal}>
                        <EventModal
                            illu={banner}
                            title={event.title}
                            description={event.content}
                            date={event.date}>
                            <Share
                                align={'center'}
                                url={cta[0].url}
                                description={event.description}
                            />

                            <Copy url={cta[0].url} label="Copy" />
                        </EventModal>
                    </Modal>
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
