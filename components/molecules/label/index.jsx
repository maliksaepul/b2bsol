import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Label = ({ title, description, size, variant, headline, style }) => {
    let sizeTitle = ''
    let sizeLabel = ''
    let align = ''
    let head = ''

    switch (size) {
        case 'large':
            sizeLabel = styles.label_lg
            sizeTitle = 'h1'
            break
        case 'small':
            sizeLabel = styles.label_sm
            sizeTitle = 'h5'
            break
        case 'supersmall':
            sizeLabel = styles.label_sm
            sizeTitle = 'p3'
            break
        default:
            sizeLabel = ''
            sizeTitle = ''
            break
    }

    switch (variant) {
        case 'right':
            align = styles.label_right
            break
        case 'center':
            align = styles.label_center
            break
        default:
            align = ''
            break
    }

    switch (headline) {
        case true:
            head = styles.label_headline
            break

        default:
            head = ''
            break
    }

    return (
        <div className={cx(styles.label, sizeLabel, align)} style={{ style }}>
            <h2 className={cx(sizeTitle, head)}>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    )
}

Label.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    headline: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Label
