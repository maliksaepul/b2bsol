import React, { Component } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import Icon from '../icon'
import PropTypes from 'prop-types'

class Input extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onChange && this.props.onChange(e.target.value)
    }

    render() {
        const { type, value, label, icon, disabled } = this.props
        return (
            <div className={cx(styles.inputgroup)}>
                <div className={styles.inputgroup_illu}>
                    <Icon name={icon} multiplier={1} />
                </div>
                <input
                    type={type}
                    value={value}
                    name={label}
                    placeholder={label}
                    onChange={this.handleChange}
                    disabled={disabled}
                />
            </div>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Input
