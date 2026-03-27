import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HookAuth from '../Hook/HookAuth'
import { Pencil } from 'lucide-react'

const PopUpAccount = ({ isOpen, onClose, Username, Email, onProfileUpdated }) => {
  const { handleLogout, isLoading,  } = HookAuth()


  if (!isOpen) return null


  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="absolute right-2 top-14 w-[88vw] max-w-70 lg:right-40 lg:top-20 md:top-20 md:w-105 rounded-2xl bg-[#A88663] text-white shadow-2xl p-4 md:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full bg-bistre shrink-0 flex items-center justify-center cursor-pointer group ">

            <h1 className="text-white text-lg md:text-2xl font-bold">
              {Username?.name?.charAt(0) || 'U'}
            </h1>


          </div>

          <div className="min-w-0 ml-2 mt-3">
            <h3 className="font-semibold text-sm md:text-sm leading-tight">
              {Username?.name || 'User'}
            </h3>
            <p className="text-xs md:text-sm text-white/95 break-all">
              {Email?.email || 'email@example.com'}
            </p>
          </div>
        </div>

        <div className="my-3 h-px bg-white/40"></div>

        <p className="text-sm md:text-base text-white/95">Your Accounts</p>
        <Link to="/login">
          <button
            type="button"
            className="mt-1 text-left text-xl hover:underline font-medium hover:text-bistre transition duration-300"
          >
            Change account
          </button>
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 block text-left text-xl font-medium hover:text-bistre transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default PopUpAccount
