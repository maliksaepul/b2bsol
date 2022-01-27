import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const clickOutsideMethod = (ref, behaviorfunc) => {
    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                behaviorfunc()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

const ClickOutside = props => {
    const wrapperRef = useRef(null)
    clickOutsideMethod(wrapperRef, props.behaviorfunc)
    return <div ref={wrapperRef}>{props.children}</div>
}

ClickOutside.propTypes = {
    children: PropTypes.element.isRequired,
    behaviorfunc: PropTypes.func,
}

export default ClickOutside
