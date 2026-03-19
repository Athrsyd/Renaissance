import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'

const MessageBubble = ({ message, isOwn = false, senderName = '', senderAvatar = '', time, onDelete }) => {
    const [showDeleteMenu, setShowDeleteMenu] = useState(false)

    const formatTime = (timestamp) => {
        if (!timestamp) return ''
        try {
            const date = new Date(timestamp)
            const hours = String(date.getHours()).padStart(2, '0')
            const minutes = String(date.getMinutes()).padStart(2, '0')
            return `${hours}:${minutes}`
        } catch (e) {
            return timestamp
        }
    }

    const handleDoubleClick = () => {
        if (isOwn) {
            setShowDeleteMenu(true)
        }
    }

    const handleDelete = () => {
        if (onDelete) {
            onDelete()
            setShowDeleteMenu(false)
        }
    }

    return (
        <div className={`flex gap-2 ${isOwn ? 'flex-row-reverse' : 'flex-row'} mb-4 items-end relative`}>
            <div className={`shrink-0 ${isOwn ? 'order-1' : 'order-0'}`}>
                {!isOwn && (
                    <div className='h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-bistre flex items-center justify-center text-white text-xs lg:text-sm font-bold'>
                        {senderAvatar || senderName.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            <div 
                className={`flex flex-col gap-1.5 ${isOwn ? 'items-end' : 'items-start'}`}
                onDoubleClick={handleDoubleClick}
            >
                {!isOwn && senderName && (
                    <p className='text-xs lg:text-sm font-semibold text-gray-600 px-3'>
                        {senderName}
                    </p>
                )}

                <div
                    className={`
                        px-3 lg:px-4 py-2 lg:py-2.5 rounded-2xl 
                        text-sm lg:text-base
                        max-w-xs lg:max-w-md xl:max-w-lg
                        wrap-break-words cursor-pointer
                        ${isOwn
                            ? 'bg-coffe text-white rounded-br-none hover:opacity-90'
                            : 'bg-gray-200 text-gray-800 rounded-bl-none hover:opacity-90'
                        }
                        transition-opacity
                    `}
                >
                    {message}
                </div>

                {time && (
                    <p className={`text-xs font-medium px-3 ${isOwn ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatTime(time)}
                    </p>
                )}

                {showDeleteMenu && isOwn && (
                    <div className={`absolute ${isOwn ? 'right-0' : 'left-0'} top-0 mt-8 bg-white rounded-lg shadow-lg border border-gray-300 z-50`}>
                        <button
                            onClick={handleDelete}
                            className='flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium whitespace-nowrap'
                        >
                            <Trash2 size={16} />
                            Hapus Pesan
                        </button>
                        <button
                            onClick={() => setShowDeleteMenu(false)}
                            className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium whitespace-nowrap border-t'
                        >
                            Batal
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageBubble
