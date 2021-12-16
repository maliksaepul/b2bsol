import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/function'

const ApbGrid = ({ apb, fetchApb }) => {
    useEffect(() => {
        fetchApb()
    }, [])

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_blank')
        }
    }

    const renderApbCard = () => {
        return apb.map((c, i) => (
            <div key={i} className={styles.object}>
                <img
                    src={c.image}
                    alt={c.title}
                    onClick={() => renderLink(c.image)}
                />
                <div>
                    <h6>{maxTitlesLength(c.title)}</h6>
                    <p className={'p2'}>{c.author}</p>
                </div>
            </div>
        ))
    }

    return <div className={styles.apb}>{renderApbCard()}</div>
}

ApbGrid.propTypes = {
    apb: PropTypes.array,
    fetchApb: PropTypes.func,
}

export default ApbGrid
