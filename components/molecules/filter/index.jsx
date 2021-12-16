import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Checkbox from '@/components/atoms/checkbox'

const Filter = ({ filterList, label }) => {
    return (
        <div className={styles.filter}>
            <div className={styles.filter_header}>
                <p>{label}</p>
            </div>
            <div className={styles.filter_container}>
                {filterList.map((item, key) => {
                    return (
                        <div key={key}>
                            <Checkbox
                                name={item}
                                onChange={e => {
                                    console.log(e)
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

Filter.propTypes = {
    filterList: PropTypes.array,
    label: PropTypes.string,
}

export default Filter
