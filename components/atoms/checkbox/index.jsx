import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ name, onChange, checked }) => {
    const handleChange = e => {
        onChange && onChange(e.target.checked, e.target.name)
    }

    return (
        <label>
            <input
                type="checkbox"
                name={name}
                id={name}
                placeholder={name}
                onChange={handleChange}
                checked={checked}
            />
            &nbsp; <span dangerouslySetInnerHTML={{ __html: name }}></span>
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
}

export default Checkbox
