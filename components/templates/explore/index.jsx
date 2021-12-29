import React, { useEffect } from 'react'
import styles from './style.module.scss'
import CardEvent from '@/components/organisms/card-event'
import Carousel from '@/components/organisms/carousel'
import Label from '@/components/molecules/label'
import PropTypes from 'prop-types'
import * as colors from '@/styles/_dstoken.module.scss'
import Button from '@/components/atoms/button'
import { useRouter } from 'next/router'

const Explore = ({ user, lastlearning, fetchLastLearning }) => {
    useEffect(() => {
        fetchLastLearning()
    }, [])

    const router = useRouter()

    const renderLabel = () => {
        if (lastlearning.length > 0) {
            return (
                <Label
                    title={`Halo ${user.name}`}
                    description={
                        '<p>Lanjutkan materi yang telah kamu mulai sebelumnya</p>'
                    }
                />
            )
        } else {
            return (
                <Label
                    title={`Halo ${user.name}`}
                    description={
                        '<p>Belum ada konten yang dipelajari, yuk belajar bersama!</p>'
                    }
                />
            )
        }
    }

    const renderContent = () => {
        if (lastlearning.length <= 0) {
            return (
                <center className={styles.cta}>
                    <Button
                        label={'Mulai Sekarang'}
                        variant={'primary'}
                        cta={() => {
                            router.push('/audiolearning')
                        }}
                    />
                </center>
            )
        } else {
            return (
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
            )
        }
    }
    return (
        <div className={styles.explore}>
            {renderLabel()}
            {renderContent()}
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
