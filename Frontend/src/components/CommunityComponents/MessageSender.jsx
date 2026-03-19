import React, { useState } from 'react'
import { SendHorizontal } from 'lucide-react';

const MessageSender = ({ onSendMessage, loading = false }) => {
    const [messageText, setMessageText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!messageText.trim()) return

        await onSendMessage(messageText)
        setMessageText('')
    }

    return (
        <div className="message w-full h-15 p-6 shadow-xl absolute bottom-0 left-0 flex flex-row justify-center items-center gap-3">
            <form onSubmit={handleSubmit} className='w-9/10 flex flex-row justify-start items-center gap-3 mb-5'>
                <textarea
                    type="text"
                    placeholder='Type your message...'
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    disabled={loading}
                    className='bg-gray-200 text-sm text-start p-3 h-12 w-full rounded-xl border-2 border-coffe disabled:opacity-50'
                />
                <button
                    type="submit"
                    disabled={loading}
                    className='bg-white border-2 border-coffe hover:bg-coffe hover:text-white transition duration-300 text-coffe px-5 py-2.5 rounded-xl disabled:opacity-50'
                >
                    <SendHorizontal size={24} />
                </button>
            </form>
        </div>
    )
}

export default MessageSender