import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import ReactPaginate from 'react-paginate'
import cx from 'classnames'
const Pagination = ({ limit, pages, skip, toPage }) => {
    const getSkip = page => {
        return page * limit
    }

    const toCurrentPage = event => {
        // toPage(getSkip(val))
        // setCurrentPage(val)
        toPage(getSkip(event.selected))
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={toCurrentPage}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(pages)}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                className={styles.page}
                pageClassName={cx(styles.page_button)}
                nextClassName={cx(styles.page_button, styles.primary)}
                previousClassName={cx(styles.page_button, styles.primary)}
                activeClassName={cx(styles.page_button, styles.primary)}
                disabledClassName={cx(styles.page_button, styles.disabled)}
                initialPage={0}
            />
        </>
    )
}

Pagination.propTypes = {
    limit: PropTypes.number,
    pages: PropTypes.number,
    toPage: PropTypes.func,
    skip: PropTypes.number,
}

Pagination.defaultProps = {
    skip: 0,
}

export default Pagination
