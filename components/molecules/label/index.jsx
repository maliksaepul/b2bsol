import Interweave from 'interweave'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Label = ({ title, description, size, varian, headline }) => {
 
   let sizeTitle = "";
   let sizeLabel = "";
   let align="";
   let head = "";

    switch (size) {
        case 'large':
            sizeLabel = styles.label_lg
            sizeTitle = "h1"
            break
        case 'small':
            sizeLabel = styles.label_sm
            sizeTitle = "h5"
            break
        default:
            sizeLabel=""
            sizeTitle=""
            break
    }

    switch (varian) {
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
        head = styles.label_headline;
            break;
    
        default:
            head = "";
            break;
    }

    return (
        <div className={cx(styles.label, sizeLabel, align)}>
            <h2 className={cx(sizeTitle, head)}>{title}</h2>
            <Interweave content={description} />
        </div>
    )
}

Label.propTypes = {
     title : PropTypes.string, description : PropTypes.string, size : PropTypes.string, varian : PropTypes.string , headline : PropTypes.bool 
}

export default Label
