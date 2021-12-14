import React, { useEffect } from 'react'
import styles from './style.module.scss'
import CardEvent from '@/components/organisms/card-event'
import Carousel from '@/components/organisms/carousel'
import Label from '@/components/molecules/label'
import PropTypes from 'prop-types'
import * as colors from '@/styles/_dstoken.module.scss'

const Explore = ({ user, lastlearning, fetchLastLearning }) => {
    useEffect(() => {
        fetchLastLearning()
    }, [])
    return (
        <div className={styles.explore}>
            <Label
                title={`Halo ${user.name}`}
                description={
                    '<p>Lanjutkan materi yang telah kamu mulai sebelumnya</p>'
                }
            />

            <Carousel>
                {lastlearning.map((course, key) => {
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
                                category: course.category,
                                style: {
                                    backgroundColor:
                                        course.type === 'event'
                                            ? colors.subText
                                            : colors.secondaryPeach,
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
Explore.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
    }),
    lastlearning: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
    fetchLastLearning: PropTypes.func.isRequired,
}

export default Explore
