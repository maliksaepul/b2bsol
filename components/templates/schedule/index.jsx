import styles from './style.module.scss'
import React, { useEffect } from 'react'
import Label from '@/components/molecules/label'
import Carousel from '@/components/organisms/carousel'
import CardEvent from '@/components/organisms/card-event'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import routes from '@/utils/routes'

const NoContent = path => {
    return (
        <div className={styles.noschedule}>
            {' '}
            <Image
                src={'/images/no_schedule.png'}
                width={200}
                height={200}
            />{' '}
            <p className="text-disabled">
                Belum ada jadwal webinar atau live event terdekat. Yuk, terus
                belajar melalui konten{' '}
                <Link href={routes.audiolearning(path)}>
                    <a className="text-primary"> Audio Learning</a>
                </Link>
                &nbsp; dan
                <Link href={routes.audiolearning(path)}>
                    <a className="text-primary"> InspiBook!</a>
                </Link>
            </p>{' '}
        </div>
    )
}

const Schedule = ({ fetchSchedules, events, organization, path }) => {
    useEffect(() => {
        fetchSchedules(organization.id)
    }, [])

    return (
        <div className={styles.schedule}>
            <Label
                title={'Event Schedule'}
                description={
                    'Lihat jadwal dan detail webinar di sini! Kelas akan dibuka setengah jam sebelum acara dimulai.'
                }></Label>
            <Carousel>
                {events.length === 0
                    ? NoContent(path.path)
                    : events.map((event, key) => {
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
    organization: PropTypes.object,
    path: PropTypes.any,
}

export default Schedule
