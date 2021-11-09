import styles from './style.module.scss'
import React from 'react'
import Label from '@/components/molecules/label'
import Carousel from '@/components/molecules/carousel'
import CardEvent from '@/components/molecules/card-event'

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
                        content:
                            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    varian={'column'}
                />
                <CardEvent
                    banner={
                        'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                    }
                    event={{
                        title: 'Collaboration A cross Generation',
                        content:
                            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    varian={'column'}
                />
                <CardEvent
                    banner={
                        'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                    }
                    event={{
                        title: 'Collaboration A cross Generation',
                        content:
                            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    varian={'column'}
                />
                <CardEvent
                    banner={
                        'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365'
                    }
                    event={{
                        title: 'Collaboration A cross Generation',
                        content:
                            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    varian={'column'}
                />
            </Carousel>
        </div>
    )
}

export default Schedule
