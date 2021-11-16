import React from 'react'
import styles from './style.module.scss'
import CardEvent from '@/components/molecules/card-event'
import Carousel from '@/components/molecules/carousel'
import Label from '@/components/molecules/label'
import PropTypes from 'prop-types'
import * as colors from '@/styles/_dstoken.module.scss'

const Explore = ({ user }) => {
    return (
        <div className={styles.explore}>
            <Label
                title={`Halo ${user.name}`}
                description={
                    '<p>Lanjutkan materi yang telah kamu mulai sebelumnya</p>'
                }
            />

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
            </Carousel>
        </div>
    )
}
Explore.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
    }),
}

export default Explore
