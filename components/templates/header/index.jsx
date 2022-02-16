import dynamic from 'next/dynamic'
import React from 'react'
import PropTypes from 'prop-types'
import routes from '@/utils/routes'
// import Navbar from '@/components/molecules/navbar'
import styles from './style.module.scss'
// import AppbarContainer from '@/containers/components/bars/Appbar'

const Navbar = dynamic(() => import('@/components/molecules/navbar'))
const AppbarContainer = dynamic(() =>
    import('@/containers/components/bars/Appbar')
)

const Header = ({ path, navbar }) => {
    const navitem = navbar => {
        console.log(navbar)
        return (
            navbar &&
            navbar.map(val => ({
                label: val.title,
                url: routes.dynamicpath(path.path, val.path),
            }))
        )
    }
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <Navbar navitem={navitem(navbar)} align={'right'} />
                </div>
                <AppbarContainer />
            </header>
        </>
    )
}

Header.propTypes = {
    path: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    navbar: PropTypes.array,
}

export default Header
