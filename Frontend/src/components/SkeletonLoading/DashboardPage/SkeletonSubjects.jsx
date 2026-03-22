import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonSubjects = () => {
    return (
        <>
            {[1, 2, 3].map((i) => (
                <div key={i} className="w-85 h-70 lg:w-50 lg:h-70 md:w-50 md:h-70 rounded-3xl">
                    <Skeleton height={280} width={200} style={{borderRadius:'1rem'}} />
                </div>
            ))}
            <div className="ml-3">
                <Skeleton height={35} width={150} style={{borderRadius:'0.75rem'}} />
            </div>
        </>
    )
}

export default SkeletonSubjects