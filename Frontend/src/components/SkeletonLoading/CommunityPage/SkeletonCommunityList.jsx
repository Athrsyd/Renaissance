import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCommunityList = () => {
  return (
    <div>
        {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full h-12 m-3 pl-4 flex flex-col rounded-lg">
                <div className="flex flex-row">
                    <Skeleton circle={true} height={40} width={40} />
                    <div className="flex flex-col">
                        <Skeleton height={10} width={130} style={{marginLeft:'0.5rem'}} />
                        <Skeleton height={10} width={100} style={{marginLeft:'0.5rem', marginTop:'-0.25rem'}} />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SkeletonCommunityList