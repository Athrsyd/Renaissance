import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonNavbar = () => {
  return (
    <div className="flex flex-row w-full ml-9 lg:ml-20 md:ml-20 mt-8 lg:justify-center md:justify-center items-center gap-5">
      {/* Search Bar */}
      <div className="rounded-xl overflow-hidden">
        <Skeleton height={45} width={620} style={{ borderRadius: '0.75rem' }} />
      </div>

      {/* Notification & Profile Section */}
      <div className="flex flex-row ml-2 gap-4 items-center">
        {/* Notification Icon */}
        <Skeleton height={24} width={24} circle />

        {/* Profile Avatar */}
        <Skeleton height={40} width={40} circle />

        {/* Dropdown Button */}
        <Skeleton height={20} width={20} />
      </div>
    </div>
  )
}

export default SkeletonNavbar