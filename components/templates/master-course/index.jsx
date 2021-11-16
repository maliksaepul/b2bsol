import CardEvent from '@/components/molecules/card-event'
import Carousel from '@/components/molecules/carousel'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import * as colors from '@/styles/_dstoken.module.scss'
import Card from '@/components/molecules/card'
const MasterCourse = () => {
    return (
        <div className={styles.masterCourse}>
            <div
                className={cx(
                    styles.masterCourse_item,
                    styles.masterCourse_card
                )}>
                <Card
                    title={{ type: 'string', content: 'Master Course' }}
                    body="<p>Belajar langsung dari para ahli. Master Course hadir dengan pembahasan mendalam hanya untukmu! Telusuri lebih lanjut dan mulai ikuti kursus.</p>"
                    cta={[
                        {
                            variant: 'secondary',
                            url: 'google.com',
                            label: 'Explore',
                        },
                    ]}
                />
            </div>
            <div
                className={cx(
                    styles.masterCourse_item,
                    styles.masterCourse_courses
                )}>
                <Carousel>
                    <CardEvent
                        banner={
                            'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                        }
                        event={{
                            title: 'Collaboration A cross Generation',
                            content: '<p>Harry Prasetyo</p>',
                            date: '3 Desember 2021, 15.00 - 17:00',
                        }}
                        cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                        variant={'column'}
                        label={{
                            category: 'Webinar',
                            style: {
                                backgroundColor: colors.subText,
                                color: colors.white,
                            },
                        }}
                    />
                    <CardEvent
                        banner={
                            'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                        }
                        event={{
                            title: 'Collaboration A cross Generation',
                            content: '<p>Harry Prasetyo</p>',
                            date: '3 Desember 2021, 15.00 - 17:00',
                        }}
                        cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                        variant={'column'}
                        label={{
                            category: 'Webinar',
                            style: {
                                backgroundColor: colors.subText,
                                color: colors.white,
                            },
                        }}
                    />
                    <CardEvent
                        banner={
                            'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                        }
                        event={{
                            title: 'Collaboration A cross Generation',
                            content: '<p>Harry Prasetyo</p>',
                            date: '3 Desember 2021, 15.00 - 17:00',
                        }}
                        cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                        variant={'column'}
                        label={{
                            category: 'Webinar',
                            style: {
                                backgroundColor: colors.subText,
                                color: colors.white,
                            },
                        }}
                    />
                    <CardEvent
                        banner={
                            'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                        }
                        event={{
                            title: 'Collaboration A cross Generation',
                            content: '<p>Harry Prasetyo</p>',
                            date: '3 Desember 2021, 15.00 - 17:00',
                        }}
                        cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                        variant={'column'}
                        label={{
                            category: 'Webinar',
                            style: {
                                backgroundColor: colors.subText,
                                color: colors.white,
                            },
                        }}
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default MasterCourse
