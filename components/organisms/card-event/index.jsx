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
import { modalEvent, modalClose } from '@/redux/actions/widgets/_modal'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

const CardEvent = props => {
    const { banner, event, variant, cta, start, end, type, category } = props
    const duration = dateDuration(start)

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
        if ((type === CARD_EVENT_TYPE.EVENT) & (duration.asHours() >= 1)) {
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
                        {share(null, null, 1)}
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
                return duration.asMinutes() >= 0 ? (
                    <span>{event.date}</span>
                ) : (
                    <>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="7" fill="#FF0101" />
                        </svg>
                        &nbsp;
                        <span>
                            Sedang berlangsung sampai &nbsp;
                            {moment(end).format('hh : mm')}
                        </span>
                    </>
                )
        }
    }

    return (
        <div className={cx(styles.cardevent, styles[variant])}>
            <div className="card_event__illu">
                {banner ? (
                    <Image
                        src={banner}
                        className={styles.cardevent_illu}
                        width={1200}
                        height={600}
                    />
                ) : (
                    <div>
                        <Skeleton width={300} height={150} />
                    </div>
                )}
            </div>
            <div className={styles.cardevent_event}>
                <div>
                    <div className={styles.cardevent_event_label}>
                        <span className={styles[category?.toLowerCase()]}>
                            {category}
                        </span>
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
                    {renderLabelTime(type)}
                </div>
            </div>
            <div className={styles.cardevent_cta}>{renderButton()}</div>
        </div>
    )
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
    modalClose: PropTypes.func,
    modalEvent: PropTypes.func,
    modal: PropTypes.object,
}

CardEvent.defaultProps = {
    label: {
        category: null,
        style: null,
    },
}

const mapStateToProps = ({ modal }) => ({ modal })

export default connect(mapStateToProps, { modalClose, modalEvent })(CardEvent)
