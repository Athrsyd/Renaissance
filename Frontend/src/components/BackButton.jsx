// import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";



const BackButton = () => {
    return (
        <div className='absolute top-7 left-7 z-50'>
            <Link to="/" >
                <button className="bg-coffe flex justify-center items-center text-center rounded-4xl h-10 w-10 md:w-15 md:h-15 text-3xl p-2 text-white hover:bg-coffee transition-colors">
                    <FaHome className=" text-white" /> 
                </button>
            </Link>
        </div>
    )
}

export default BackButton