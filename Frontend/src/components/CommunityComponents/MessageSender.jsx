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

    const handleKeyDown = (e) => {
        // Enter = send, Shift + Enter = newline
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    return (
        <div className="message w-full h-15 p-6 shadow-xl absolute bottom-0 left-0 flex flex-row justify-center items-center gap-3">
            <form onSubmit={handleSubmit} className='w-9/10 flex flex-row justify-start items-center gap-3 mb-5'>
                <textarea
                    type="text"
                    placeholder='Type your message... (Enter to send, Shift+Enter for newline)'
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    className='bg-gray-200 text-sm text-start p-3 h-12 w-full rounded-xl border-2 border-coffe disabled:opacity-50 resize-none'
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