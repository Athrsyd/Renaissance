import React from 'react'
import { MoveLeft, Search, EllipsisVertical,SendHorizonal  } from 'lucide-react';


const MessageSender = () => {
    return (
        <div className="message w-full z-999 h-15 p-6 shadow-xl absolute bottom-0 left-0 flex flex-row justify-center  items-center gap-3">
            <form action="" method="post" className='w-9/10 flex flex-row justify-start items-center gap-3 mb-5'>
                <textarea type="text" placeholder='Type your message...' className='bg-gray-200 text-sm text-start p-3 h-12 w-full rounded-xl border-2 border-coffe' />
                <button type="submit" className='bg-white border-2 border-coffe hover:bg-coffe hover:text-white transition duration-300 text-coffe  px-5 py-2.5 rounded-xl'><SendHorizonal size={24} /></button>
            </form>
        </div>
    )
}

export default MessageSender