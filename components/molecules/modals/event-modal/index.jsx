import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './style.module.scss'

const EventModal = ({ illu, title, description, date, children }) => {
    return (
        <>
            <div className={styles.modal_illu}>
                <Image src={illu} width={266} height={169} />
            </div>
            <div className={styles.modal_title}>
                <h5>{title}</h5>
            </div>
            <div className={styles.modal_description}>
                <p
                    className="text-secondary"
                    dangerouslySetInnerHTML={{ __html: description }}></p>
                <p className="p0">{date}</p>
            </div>
            <div>{children}</div>
        </>
    )
}

EventModal.propTypes = {
    illu: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default EventModal
