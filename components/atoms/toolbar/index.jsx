import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import DropDown from '@/components/atoms/dropdown'
import Search from '@/components/molecules/search'
import Filter from '@/components/molecules/filter'
import Sorting from '@/components/molecules/sorting'

const Toolbar = ({
    activeFilter,
    activeSorting,
    sortingActive,
    filterActive,
    fetchData,
    api,
}) => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [sorting, setSorting] = useState('')

    const categories = [
        'Happiness &amp; Mindfulness',
        'Work Life Balance',
        'Career Growth',
        'Leadership',
        'Communication',
        'Creativity &amp; Problem Solving',
        'Entrepreneurship',
        'Intrapreneurship',
        'Technology &amp; Innovation',
        'Sales &amp; Marketing',
        'Personal Finance',
        'Love &amp; Relationship',
        'Family &amp; Kids',
        'Lifestyle &amp; Culture',
    ]

    const renderFilter = () => {
        if (filterActive) {
            return (
                <Filter
                    filterList={categories}
                    label="Category"
                    onChange={val => {
                        console.log(val)
                        setFilter(val)
                        fetchData(search, val, sorting, api)
                    }}
                    filter={filter.trim().split(',')}
                />
            )
        } else {
            return null
        }
    }

    const renderSearch = () => {
        return (
            <Search
                onChange={val => {
                    setSearch(val)
                    fetchData(val, filter, sorting, api)
                }}
            />
        )
    }

    const renderSorting = () => {
        if (sortingActive) {
            return (
                <Sorting
                    onChange={val => {
                        setSorting(val)
                        fetchData(search, filter, val, api)
                    }}
                    sortingList={[
                        { label: 'Most Popular', key: 'Most Popular' },
                        { label: 'Newest', key: 'created_at' },
                        { label: 'Name A-Z', key: 'title' },
                    ]}
                />
            )
        } else {
            return null
        }
    }

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbar_item}>{renderSearch()}</div>
            <div className={styles.toolbar_item}>
                <DropDown
                    label={'Filter'}
                    action={() => activeFilter(!filterActive)}
                    active={filterActive}>
                    {renderFilter()}
                </DropDown>
                <DropDown
                    label="Urutkan"
                    action={() => activeSorting(!sortingActive)}
                    active={sortingActive}>
                    {renderSorting()}
                </DropDown>
            </div>
        </div>
    )
}

Toolbar.propTypes = {
    activeFilter: PropTypes.func,
    activeSorting: PropTypes.func,
    sortingActive: PropTypes.bool,
    filterActive: PropTypes.bool,
    fetchData: PropTypes.func,
    api: PropTypes.string,
}

export default Toolbar
