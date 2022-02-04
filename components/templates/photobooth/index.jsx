import React from 'react'
// import PropTypes from 'prop-types'

import styles from './style.module.scss'
import Button from '@/components/atoms/button'
import PropTypes from 'prop-types'
import Section from '@/components/atoms/section'

const Photobooth = ({ children, title, description, url, id }) => {
    return (
        <div className={styles.photobooth} id={id}>
            <div className={styles.photobooth_container}>
                <Section>
                    <div className={styles.photobooth_card}>
                        <div className={styles.photobooth_card_header}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <div className={styles.photobooth_card_body}>
                            {children}
                        </div>
                        <div className={styles.photobooth_card_footer}>
                            <Button
                                label="Take Photo"
                                cta={() => {
                                    window.open(url, '_blank')
                                }}
                                variant={'primary'}
                                id={'photobooth_btn'}
                            />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    )
}

Photobooth.propTypes = {
    url: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
}

export default Photobooth
