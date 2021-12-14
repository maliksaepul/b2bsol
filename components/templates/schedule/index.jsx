import styles from './style.module.scss'
import React, { useEffect } from 'react'
import Label from '@/components/molecules/label'
import Carousel from '@/components/organisms/carousel'
import CardEvent from '@/components/organisms/card-event'
import * as colors from '@/styles/_dstoken.module.scss'
import PropTypes from 'prop-types'

const Schedule = ({ fetchSchedules, events }) => {
    useEffect(() => {
        fetchSchedules()
    }, [])

    return (
        <div className={styles.schedule}>
            <Label
                title={'Schedule'}
                description={
                    'Lihat jadwal dan detail webinar di sini! Kelas akan dibuka setengah jam sebelum acara dimulai.'
                }></Label>
            <Carousel>
                {events.map((event, key) => {
                    return (
                        <CardEvent
                            key={key}
                            banner={event.cover}
                            event={{
                                title: event.name,
                                content: event.description,
                                date: event.dateevent,
                            }}
                            category={event.category}
                            type={event.type}
                            start={event.datetime}
                            end={event.activedatetime}
                            cta={event.actions}
                            variant={'column'}
                            label={{
                                category: 'Webinar',
                                style: {
                                    backgroundColor: colors.subText,
                                    color: colors.white,
                                },
                            }}
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}

Schedule.propTypes = {
    events: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    fetchSchedules: PropTypes.func.isRequired,
}

export default Schedule
