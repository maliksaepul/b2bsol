import Button from '@/components/atoms/Button'
import CardEvent from '@/components/molecules/card-event'
import Carousel from '@/components/molecules/carousel'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'

const MasterCourse = () => {
    return (
        <div className={styles.masterCourse}>
            <div className={styles.masterCourse_item}>
                <Label
                    headline={true}
                    title={'Master Course'}
                    description={
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus fringilla nunc efficitur dignissim a id nibh. Fusce ac felis erat placerat.</p>'
                    }
                />
                <Button
                    varian={'secondary'}
                    cta={() => {
                        console.log('Button')
                    }}
                    label={'Explore'}
                />
            </div>
            <div className={cx(styles.masterCourse_item, styles.masterCourse_courses)}>
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
        </div>
    )
}

export default MasterCourse
