import React from 'react'
import { MoveLeft, Search, EllipsisVertical,  } from 'lucide-react';

const NavbarCommunity = () => {
    return (
        <nav className='w-78/100 fixed top-0 right-0 bg-white shadow-xl flex items-center p-4 gap-3'>
            {/* <button className='cursor-pointer h-7 hover:bg-coffe hover:text-white transition duration-300 bg-white text-coffe px-3 text-2xl rounded-full'>
                <MoveLeft size={20} />
            </button> */}

            <div className='pl-5 w-full flex items-center justify-between'>
                <div className='flex items-center min-w-0 flex-1'>
                    <div className='rounded-full h-10 w-10 bg-bistre mr-3'></div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-semibold text-gray-700'>wwkwwkwk</h3>
                        <p className='text-xs text-gray-500'>1200 members</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 shrink-0'>
                    <button className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'><Search size={20} /></button>
                    <button className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'><EllipsisVertical size={20} /></button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarCommunity