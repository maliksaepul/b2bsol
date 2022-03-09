import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const Navbar = ({ navitem, align, txcolor, bgcolor, variant }) => {
    const router = useRouter()
    const renderNavItem = val => {
        return (
            <ul
                className={cx(styles.nav, styles[align], styles[variant])}
                style={{ color: txcolor, backgroundColor: bgcolor }}>
                {val.map((item, key) => (
                    <li
                        className={cx(styles.nav_item, styles[align])}
                        key={key}>
                        <Link href={item.url}>
                            <a
                                className={cx(
                                    styles.nav_link,
                                    item.url === router.asPath
                                        ? styles.highlight
                                        : null
                                )}
                                target={item.behavior || null}>
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
