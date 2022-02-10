// import CardBadge from '@/components/molecules/card-badge'
import styles from './style.module.scss'
import React from 'react'
import Card from '@/components/organisms/card'
import routes from '@/utils/routes'
import Image from 'next/image'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Button from '@/components/atoms/button'
import router from 'next/router'
const InspiBook = ({ path }) => {
    return (
        <div className={styles.inspibook}>
            <div className={styles.inspibook_item}>
                <div className={styles.inspibook_card}>
                    <Card
                        title={{
                            type: 'string',
                            content: 'InspiBook',
                        }}
                        body="<p>Dengarkan dan baca ringkasan buku terbaik</p>"
                        cta={[]}>
                        <div className={styles.cta}>
                            <Button
                                variant="secondary"
                                label="explore"
                                cta={() => router.push(routes.inspibook(path))}
                            />
                        </div>
                    </Card>
                </div>
            </div>
            <div className={cx(styles.inspibook_item, styles.illu)}>
                <Image
                    src={'/images/section/inspibook/asset.png'}
                    width={477}
                    height={362}
                />
            </div>
        </div>
    )
}

InspiBook.propTypes = {
    path: PropTypes.string,
}

export default InspiBook
