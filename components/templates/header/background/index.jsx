import React from 'react'
import PropTypes from 'prop-types'
import { mediaMaxWidth, MobileBreakpoint } from '@/utils/breakpoint'
import styles from './style.module.scss'

const HeaderBackground = ({
    background,
    foreground,
    foregroundMobile,
    height,
}) => {
    const backgroundImageFg = () => {
        if (!mediaMaxWidth(MobileBreakpoint)) {
            return foreground || ''
        } else {
            return foregroundMobile || ''
        }
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.container_bg}
                style={{
                    backgroundColor: background || '',
                    height: height || '',
                }}>
                <div
                    className={styles.container_fg}
                    style={{
                        backgroundImage: `url(${backgroundImageFg()})`,
                    }}></div>
            </div>
        </div>
    )
}

HeaderBackground.propTypes = {
    background: PropTypes.string,
    foreground: PropTypes.string,
    foregroundMobile: PropTypes.string,
    height: PropTypes.string,
}

export default HeaderBackground
