import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Navbar = ({ navitem, align, txcolor, bgcolor, variant }) => {
    let direction = 'row'
    let aligned = ''
    switch (align) {
        case 'right':
            aligned = styles.nav_right
            break

        case 'center':
            aligned = styles.nav_center
            break
        default:
            aligned = styles.nav_left
            break
    }

    switch (variant) {
        case 'column':
            direction = styles.nav_column
            break
        default:
            direction = ''
            break
    }

    const renderNavItem = val => {
        return (
            <ul
                className={cx(styles.nav, aligned, direction)}
                style={{ color: txcolor, backgroundColor: bgcolor }}>
                {val.map((item, key) => (
                    <li className={cx(styles.nav_item)} key={key}>
                        <Link href={item.url}>
                            <a
                                className={styles.nav_link}
                                target={item.behavior || null}>
                                {' '}
                                {item.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div style={{ color: txcolor, backgroundColor: bgcolor }}>
            {renderNavItem(navitem)}
        </div>
    )
}

Navbar.propTypes = {
    navitem: PropTypes.array,
    align: PropTypes.string,
    txcolor: PropTypes.string,
    bgcolor: PropTypes.string,
    variant: PropTypes.string,
}

export default Navbar
