import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import cx from 'classnames'
import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'


const Navbar = ({ navitem, align, txcolor, bgcolor }) => {


    switch (align) {
        case "right":
            align = styles.nav_right; 
            break;
    
            case "center":
                align = styles.nav_center; 
                break;
        default:
            align = styles.nav_left; 
            break;
    }
    
    const renderNavItem = (val) => {
        return (
            <ul className={cx(styles.nav, align)}>
                {val.map((item, key) => (
                    <li className={cx(styles.nav_item)} key={key}  >
                        <Link href={item.url} >
                            <a className={styles.nav_link} target={item.behavior || null}> {item.label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return <div style={{color : txcolor , backgroundColor : bgcolor} } >{renderNavItem(navitem)} <Humberger/> </div>
}

Navbar.propTypes = {
    navitem : PropTypes.array, align : PropTypes.string, txcolor : PropTypes.string, bgcolor: PropTypes.string,
}

export default Navbar
