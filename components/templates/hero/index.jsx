import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Hero = ({ title, subtitle, description, height }) => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_card}>
                <h1>{title}</h1>
            </div>

            <div className={styles.hero_illu}>
                <Image
                    src={'/images/section/hero.png'}
                    width="645"
                    height="300"
                />
            </div>
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.string,
}

export default Hero
