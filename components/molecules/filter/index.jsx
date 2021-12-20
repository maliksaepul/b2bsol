import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Checkbox from '@/components/atoms/checkbox'

const Filter = ({ filterList, label }) => {
    const [filterApi, setFilterApi] = useState([])

    const fetchApi = (val, name) => {
        const listOf = [...filterApi]
        if (val) {
            listOf.push(name)
            setFilterApi(listOf)
        } else {
            const data = listOf.filter(val => val !== name)
            setFilterApi(data)
        }
    }
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
                                onChange={(val, name) => {
                                    fetchApi(val, name)
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
