import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import DropDown from '@/components/atoms/dropdown'
import Search from '@/components/molecules/search'
import Filter from '@/components/molecules/filter'
import Sorting from '@/components/molecules/sorting'
const Contents = ({
    children,
    activeFilter,
    activeSorting,
    sortingActive,
    filterActive,
}) => {
    const categories = [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
    ]

    const renderFilter = () => {
        if (filterActive) {
            return <Filter filterList={categories} label="Category" />
        } else {
            return null
        }
    }

    const renderSorting = () => {
        if (sortingActive) {
            return (
                <Sorting sortingList={['Most Popular', 'Newest', 'Name A-Z']} />
            )
        } else {
            return null
        }
    }

    return (
        <div className={styles.contents}>
            <div className={styles.toolbar}>
                <div className={styles.toolbar_item}>
                    <Search />
                </div>
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
            {children}
        </div>
    )
}

Contents.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
    activeFilter: PropTypes.func,
    activeSorting: PropTypes.func,
    sortingActive: PropTypes.bool,
    filterActive: PropTypes.bool,
}

export default Contents
