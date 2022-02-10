import Spinner from '@/components/atoms/spinner'
import React from 'react'
import styles from './style.module.scss'
import * as colors from '@/styles/App.module.scss'
import PropTypes from 'prop-types'
const Loader = ({ loading }) => {
    if (loading.state) {
        return (
            <div className={styles.loader}>
                <div className={styles.loader_container}>
                    <Spinner size={'10rem'} color={colors.secondary10} />
                    <div className={styles.message}>
                        <span>{loading.message}</span>
                        <span className={`${styles.dot} ${styles.one}`}>.</span>
                        <span className={`${styles.dot} ${styles.two}`}>.</span>
                        <span className={`${styles.dot} ${styles.three}`}>
                            .
                        </span>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

Loader.propTypes = {
    loading: PropTypes.object,
}

export default Loader
