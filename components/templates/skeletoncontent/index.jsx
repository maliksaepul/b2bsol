import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonContent = props => {
    return (
        <>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
            <div>
                <Skeleton width="11rem" height={'11rem'} />
                <p>
                    <Skeleton width="11rem" />
                </p>
            </div>
        </>
    )
}

SkeletonContent.propTypes = {
    variant: PropTypes.string,
    unit: PropTypes.number,
}

SkeletonContent.defaultProps = {
    variant: 'rectangle',
    unit: 10,
}

export default SkeletonContent
