import React from 'react'

const MessageBubble = ({ message, isOwn = false, senderName = '', senderAvatar = '' }) => {
    return (
        <div className={`flex gap-2 ${isOwn ? 'flex-row-reverse' : 'flex-row'} mb-4 items-end`}>
            {/* Avatar */}
            <div className={`shrink-0 ${isOwn ? 'order-1' : 'order-0'}`}>
                {!isOwn && (
                    <div className='h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-bistre flex items-center justify-center text-white text-xs lg:text-sm font-bold'>
                        {senderAvatar || senderName.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            {/* Message Bubble */}
            <div className={`flex flex-col gap-1 ${isOwn ? 'items-end' : 'items-start'}`}>
                {/* Sender Name (for group chat) */}
                {!isOwn && senderName && (
                    <p className='text-xs lg:text-sm font-semibold text-gray-600 px-3'>
                        {senderName}
                    </p>
                )}

                {/* Bubble */}
                <div
                    className={`
                        px-3 lg:px-4 py-2 lg:py-2.5 rounded-2xl 
                        text-sm lg:text-base
                        max-w-xs lg:max-w-md xl:max-w-lg
                        break-words
                        ${isOwn
                            ? 'bg-coffe text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                        }
                    `}
                >
                    {message}
                </div>

                {/* Timestamp (optional) */}
                <p className='text-xs text-gray-500 px-3'>
                    12:34 PM
                </p>
            </div>
        </div>
    )
}

export default MessageBubble
