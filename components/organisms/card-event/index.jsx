import Image from 'next/image'
import Button from 'components/atoms/button'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { dateDuration } from '@/utils/helpers'
import AddToCalendar from '@/components/molecules/addtocalendar'
import { CARD_EVENT_TYPE } from '@/utils/constants'
import { DoorOpen, quiz, sertificate, share } from '@/utils/icons'
import { connect } from 'react-redux'
import { modalEvent, modalClose } from '@/redux/actions/_modal'

const CardEvent = props => {
    const { banner, event, variant, cta, label, start, end, type } = props
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
        props.modalEvent({ ...event, url: cta[0].url, banner })
        props.modalClose(!props.modal.close)
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
                            label={val.title}>
                            {' '}
                            {DoorOpen(null, null, 1)}{' '}
                        </Button>
                    ))}
                    <Button
                        variant={'secondary'}
                        size={'xsmall'}
                        cta={() => {
                            handleModal()
                        }}
                        label={'Bagikan'}
                        icon={{ name: 'Share', multiplier: 1 }}>
                        {' '}
                        {share(null, null, 1)}{' '}
                    </Button>
                </>
            )
        }
    }

    const renderLabelTime = type => {
        switch (type) {
            case CARD_EVENT_TYPE.COURSE:
                return (
                    <>
                        <div>{quiz(null, null, 1)} Quiz</div>
                        <div>
                            {sertificate(null, null, 1)}
                            Sertifikasi
                        </div>
                    </>
                )
            default:
                return <span>{event.date}</span>
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
                            {renderLabelTime(event.type)}
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

const mapStateToProps = ({ modal }) => ({ modal })

export default connect(mapStateToProps, { modalClose, modalEvent })(CardEvent)
