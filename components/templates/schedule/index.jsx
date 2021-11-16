import styles from './style.module.scss'
import React from 'react'
import Label from '@/components/molecules/label'
import Carousel from '@/components/molecules/carousel'
import CardEvent from '@/components/molecules/card-event'
import * as colors from '@/styles/_dstoken.module.scss'

const Schedule = () => {
    return (
        <div className={styles.schedule}>
            <Label
                title={'Schedule'}
                description={
                    'Lihat jadwal dan detail webinar di sini! Kelas akan dibuka setengah jam sebelum acara dimulai.'
                }></Label>
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
    )
}

export default Schedule
