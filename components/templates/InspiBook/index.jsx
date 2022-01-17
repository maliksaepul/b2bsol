import React from 'react'
// import PropTypes from 'prop-types'
import WithIllu from '../with-illu'
import Card from '@/components/organisms/card'
import cx from 'classnames'
import styles from './style.module.scss'
import Images from 'next/image'

const InspiBook = props => {
    return (
        <WithIllu
            className={cx('bg-primary', 'text-white', styles.inspibook)}
            illu={{
                src: '/images/agenda/inspibook-section.png',
                width: '600',
                height: '600',
            }}>
            <div className={styles.inspibook_desc}>
                <div className={styles.inspibook_desc_dec1}>
                    <Images
                        src={'/images/sticker/icon-04.png'}
                        width={'221'}
                        height={'221'}
                    />
                </div>
                <div className={styles.inspibook_desc_dec2}>
                    <Images
                        src={'/images/sticker/fold-04.png'}
                        width="100"
                        height="100"
                    />
                </div>
                <Card
                    title={{ type: 'text', content: 'Inspibook' }}
                    body={
                        'Belajar langsung dari para ahli. Master Course hadir dengan pembahasan mendalam hanya untukmu! Telusuri lebih lanjut dan mulai ikuti kursus.'
                    }
                    cta={[{ label: 'explore', variant: 'secondary' }]}
                />
            </div>
        </WithIllu>
    )
}

// InspiBook.propTypes = {

// }

export default InspiBook
