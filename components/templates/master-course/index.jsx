import CardEvent from '@/components/organisms/card-event'
import Carousel from '@/components/organisms/carousel'
import styles from './style.module.scss'
import React, { useEffect } from 'react'
import cx from 'classnames'
import * as colors from '@/styles/App.module.scss'
import Card from '@/components/organisms/card'
import PropTypes from 'prop-types'
const MasterCourse = ({ fetchCourses, courses }) => {
    useEffect(() => {
        fetchCourses()
    }, [])
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
                            icon: false,
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
                    {courses.map((course, key) => {
                        return (
                            <CardEvent
                                key={key}
                                banner={course.cover}
                                event={{
                                    title: course.name,
                                    content: course.description,
                                    date: course.dateevent,
                                }}
                                category={course.category}
                                type={course.type}
                                start={course.datetime}
                                end={course.activedatetime}
                                cta={course.actions}
                                variant={'column'}
                                label={{
                                    category: 'Course',
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
        </div>
    )
}

MasterCourse.propTypes = {
    courses: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
    fetchCourses: PropTypes.func.isRequired,
}

export default MasterCourse
