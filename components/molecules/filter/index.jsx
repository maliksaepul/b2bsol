import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Checkbox from '@/components/atoms/checkbox'

const Filter = ({ filterList, label, onChange, filter }) => {
    const [filterApi, setFilterApi] = useState(filter)

    const fetchApi = (val, name) => {
        const listOf = [...filterApi].filter(val => val !== '')
        if (val) {
            listOf.push(name)
            setFilterApi(listOf)
            onChange && onChange(listOf.toString())
        } else {
            const data = listOf.filter(val => val !== name)
            setFilterApi(data)
            onChange && onChange(data.toString())
        }
    }
    return (
        <div className={styles.filter}>
            <div className={styles.filter_header}>
                <p className="p2">
                    <b>{label}</b>{' '}
                </p>
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
                                checked={filterApi.includes(item)}
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
    onChange: PropTypes.func,
    filter: PropTypes.array,
}

export default Filter
