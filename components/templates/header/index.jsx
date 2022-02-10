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

const Header = ({ path }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_nav}>
                    <Navbar
                        navitem={[
                            {
                                label: 'Audio Learning',
                                url: routes.audiolearning(path.path),
                            },
                            {
                                label: 'InspiBook',
                                url: routes.inspibook(path.path),
                            },
                            {
                                label: 'Meditasi',
                                url: routes.meditasi(path.path),
                            },
                        ]}
                        align={'right'}
                    />
                </div>
                <AppbarContainer />
            </header>
        </>
    )
}

Header.propTypes = {
    path: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Header
