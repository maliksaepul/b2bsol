import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import DropDown from '@/components/atoms/dropdown'
import Search from '@/components/molecules/search'
import Filter from '@/components/molecules/filter'
import Sorting from '@/components/molecules/sorting'
import ClickOutside from '../clickoutside'

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
        'Happiness & Mindfulness',
        'Work Life Balance',
        'Career Growth',
        'Leadership',
        'Communication',
        'Creativity & Problem Solving',
        'Entrepreneurship',
        'Intrapreneurship',
        'Technology & Innovation',
        'Sales & Marketing',
        'Personal Finance',
        'Love & Relationship',
        'Family & Kids',
        'Lifestyle & Culture',
    ]

    const renderFilter = () => {
        if (filterActive) {
            return (
                <Filter
                    filterList={categories}
                    label="Category"
                    onChange={val => {
                        setFilter(val)
                        fetchData({ search, filter: val, sort: sorting }, api)
                        console.log('hallo')
                        activeFilter(false)
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
                    fetchData({ search: val, filter, sort: sorting }, api)
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
                        fetchData({ search, filter, sort: val }, api)
                        activeSorting(false)
                    }}
                    sortingList={[
                        { label: 'Newest', key: 'date' },
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
                <ClickOutside
                    behaviorfunc={() => {
                        activeFilter(false)
                    }}>
                    <DropDown
                        label={'Filter'}
                        action={() => activeFilter(!filterActive)}
                        active={filterActive}>
                        {renderFilter()}
                    </DropDown>
                </ClickOutside>
                <ClickOutside
                    behaviorfunc={() => {
                        activeSorting(false)
                    }}>
                    <DropDown
                        label="Urutkan"
                        action={() => activeSorting(!sortingActive)}
                        active={sortingActive}>
                        {renderSorting()}
                    </DropDown>
                </ClickOutside>
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
    api: PropTypes.any,
}

export default Toolbar
