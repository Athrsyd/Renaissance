import React, { useState } from 'react'
import { MoveLeft, Search, EllipsisVertical, UserPlus } from 'lucide-react';

const NavbarCommunity = ({ selectedCommunity, userData, onJoin, isLoading }) => {
    // Cek apakah user sudah member komunitas
    const isMember = selectedCommunity?.members?.some(m => m.user_id === userData?.id);

    const handleJoin = async () => {
        if (selectedCommunity?.id) {
            await onJoin(selectedCommunity.id)
        }
    }

    return (
        <nav className='w-78/100 fixed z-9999 top-0 right-0 bg-white shadow-xl flex items-center p-4 gap-3'>

            <div className='pl-5 w-full flex items-center justify-between'>
                <div className='flex items-center min-w-0 flex-1'>
                    <div className='rounded-full h-10 w-10 bg-bistre mr-3'></div>
                    <div className='flex flex-col'>
                        <h3 className='text-sm font-semibold text-gray-700'>{selectedCommunity?.name || 'Pilih Komunitas'}</h3>
                        <p className='text-xs text-gray-500'>{selectedCommunity?.members?.length || selectedCommunity?.members_count || 0} members</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 shrink-0'>
                    {!isMember ? (
                        // Belum join - tampil tombol Join
                        <button 
                            onClick={handleJoin}
                            disabled={isLoading}
                            className='flex items-center gap-2 px-4 py-2 bg-coffe text-white rounded-full hover:bg-coffe/80 transition duration-300 disabled:opacity-50'
                        >
                            <UserPlus size={18} />
                            <span className='text-sm font-semibold'>Join</span>
                        </button>
                    ) : (
                        // Sudah join - tampil Search & Menu
                        <>
                            <button className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'>
                                <Search size={20} />
                            </button>
                            <button className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'>
                                <EllipsisVertical size={20} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavbarCommunity