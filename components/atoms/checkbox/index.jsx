import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ name, onChange }) => {
    const handleChange = e => {
        onChange && onChange(e.target.checked)
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
            />
            {name}
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
}

export default Checkbox
