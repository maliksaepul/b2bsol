import * as icons from '@/utils/icons'
import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, fill, stroke, multiplier }) => {
    const renderIcon = () => {
        return icons[name](fill, stroke, multiplier)
    }

    return <>{renderIcon()}</>
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    multiplier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fill: PropTypes.string,
    stroke: PropTypes.string,
}

export default Icon
