import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonSubAcademy = () => {
  return (
    <div className='w-4/5 mt-7 flex flex-col gap-5 justify-center items-center px-4'>
        <Skeleton height={30} width={90} style={{marginTop:'5rem'}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-85 h-70 lg:w-60 lg:h-70 md:w-50 md:h-70  rounded-2xl overflow-hidden">
                    <Skeleton height={280} width={260} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkeletonSubAcademy