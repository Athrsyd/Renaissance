import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonCommunity = () => {
    return (
        <div className='mt-20 '>
            <Skeleton height={400} width={890} style={{ borderRadius: '1rem' }} />
        </div>
    )
}

export default SkeletonCommunity