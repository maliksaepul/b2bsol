import Interweave from 'interweave'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const About = ({ title, subtitle, description, height }) => {
    const renderSubtitle = () => {
        if (subtitle) {
            return (
                <span>
                    <br />
                    <span>{subtitle}</span>
                </span>
            )
        } else {
            return null
        }
    }
    return (
        <div className={styles.about} style={{ height: height || '' }}>
            <h1>
                <span>{title || 'Company Name'}</span>
                {renderSubtitle()}
                <br />
                <span className="p1">
                    <Interweave content={description} />
                </span>
            </h1>
        </div>
    )
}

About.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.string,
}

export default About
