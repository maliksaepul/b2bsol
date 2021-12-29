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
                defaultChecked={false}
                placeholder={name}
                onChange={handleChange}
                checked={checked}
            />
            {name}
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
}

export default Checkbox
