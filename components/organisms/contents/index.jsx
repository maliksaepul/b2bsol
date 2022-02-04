import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Contents = ({ children }) => {
    return <div className={styles.contents}>{children}</div>
}

Contents.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
}

export default Contents
