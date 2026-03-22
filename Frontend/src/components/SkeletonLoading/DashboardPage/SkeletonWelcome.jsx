import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWelcome = () => {
    return (
        <div className="w-94 lg:w-225 md:w-160 mt-5 mx-auto rounded-2xl">
            <Skeleton height={263}  style={{borderRadius:'1rem'}} />
        </div>
    )
}

export default SkeletonWelcome