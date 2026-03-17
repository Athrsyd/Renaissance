import React from 'react'

const ProgressBar = ({ value, max, bgColor }) => {
  const percentage = (value / max) * 100 ;

  return (
    <div className="container w-full mx-auto flex flex-row items-center justify-center ">
      <div className='bg-neutral-300 transition-all duration-300 ease-in-out h-4 w-full rounded-full'>
        <div className={`${bgColor } h-4 transition-all duration-300 ease-in-out rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar