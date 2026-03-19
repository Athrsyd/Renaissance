import React from 'react'
import SidebarCommunity from '../components/CommunityComponents/SidebarCommunity'
import NavbarCommunity from '../components/CommunityComponents/NavbarCommunity'
import MessageSender from '../components/CommunityComponents/MessageSender'
import { MoveLeft, Search, EllipsisVertical,  } from 'lucide-react';

const Community = () => {
    return (
        <div className='flex flex-row w-full'>
            <SidebarCommunity />
            <div className=' w-4/5 h-screen relative'>
                <NavbarCommunity />
                <div className="container mt-15 overflow-y-scroll w-full h-4/5 p-6">
                    {/* Text area for messages */}
                </div>
                <MessageSender />
            </div>
        </div>
    )
}

export default Community