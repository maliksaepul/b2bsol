import dynamic from 'next/dynamic'
import React from 'react'
// import NotFound from '@/views/NotFound'
const NotFound = dynamic(() => import('@/views/NotFound'))

const Custom404 = () => {
    return (
        <div>
            <NotFound />
        </div>
    )
}

export default Custom404
