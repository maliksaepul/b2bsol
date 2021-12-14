import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { google, outlook, office365, yahoo, ics } from 'calendar-link'
import Icon from '@/components/atoms/icon'
import styles from './style.module.scss'
import cx from 'classnames'

const AddToCalendar = ({ options, events, label }) => {
    const [active, setActive] = useState(false)

    const handleDropDown = () => {
        setActive(!active)
    }

    const generateLinkCalender = (name, data) => {
        try {
            switch (name) {
                case 'google':
                    return google(data)
                case 'office365':
                    return office365(data)
                case 'outlook':
                    return outlook(data)
                case 'yahoo':
                    return yahoo(data)
                case 'ics':
                    return ics(data)
                default:
                    return google(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const listOfIcon = name => {
        switch (name) {
            case 'google':
                return `https://img.icons8.com/color/48/000000/google-calendar--v2.png`
            case 'ics':
                return `https://img.icons8.com/ios-filled/50/000000/mac-os.png`
            case 'yahoo':
                return `https://img.icons8.com/color/48/000000/yahoo.png`
            case 'outlook':
                return `https://img.icons8.com/nolan/64/ms-outlook.png`
            default:
                return `https://img.icons8.com/color/48/000000/google-calendar--v2.png`
        }
    }

    const renderOptions = () => {
        try {
            return options.map((option, index) => (
                <div key={index} className={styles.list}>
                    <img
                        className={styles.list_illu}
                        src={listOfIcon(option.alias)}
                        alt={`icon-${index}`}
                    />
                    <a
                        className={styles.list_link}
                        rel="noreferrer"
                        target="_blank"
                        href={generateLinkCalender(option.alias, events)}
                        download>
                        {option.label}
                    </a>
                </div>
            ))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.addtocalendar}>
            <div
                className={styles.addtocalendar_button}
                onClick={() => {
                    handleDropDown()
                }}>
                <Icon name="calendar" multiplier={1} />
                <p>{label}</p>
                <div
                    className={
                        active ? styles.chevron_up : styles.chevron_down
                    }>
                    <Icon name={'Chevron'} multiplier={1} />
                </div>
            </div>
            <div
                className={cx(
                    styles.addtocalendar_dropdown,
                    active ? styles.addtocalendar_dropdown_active : null
                )}>
                {renderOptions()}
            </div>
        </div>
    )
}

AddToCalendar.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    events: PropTypes.object,
    label: PropTypes.string,
    active: PropTypes.bool,
}

export default AddToCalendar
