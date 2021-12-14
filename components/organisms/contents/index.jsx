import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import DropDown from '@/components/atoms/dropdown'
import Search from '@/components/molecules/search'
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
        'Category 1',
        'Category 2',
        'Category 1',
        'Category 2',
    ]

    const renderFilter = () => {
        if (filterActive) {
            return (
                <div className={styles.filter}>
                    <div className={styles.filter_header}>
                        <p>Category</p>
                    </div>
                    <div className={styles.filter_container}>
                        {categories.map((item, key) => {
                            return (
                                <div key={key}>
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    const renderSorting = () => {
        if (sortingActive) {
            return (
                <div className={styles.sorting}>
                    <p>Most Popular</p>
                    <p>Newest</p>
                    <p>Name A-Z</p>
                </div>
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
