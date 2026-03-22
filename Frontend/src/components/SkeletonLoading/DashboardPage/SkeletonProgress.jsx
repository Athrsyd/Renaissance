import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonProgress = () => {
    return (
        <div className='mt-20 flex w-full gap-5 px-5 '>
            {[1, 2, 3].map((i) => (
                <div key={i} className="">
                    <Skeleton height={150} width={360} style={{ borderRadius: '0.75rem' }} />
                </div>
            ))}
        </div>
    )
}

export default SkeletonProgress