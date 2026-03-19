import React, { useMemo, useState, useEffect, useRef } from 'react'
import SidebarCommunity from '../components/CommunityComponents/SidebarCommunity'
import NavbarCommunity from '../components/CommunityComponents/NavbarCommunity'
import MessageSender from '../components/CommunityComponents/MessageSender'
import CreateCommunity from '../components/CommunityComponents/CreateCommunity'
import MessageBubble from '../components/CommunityComponents/MessageBubble'
import MessageHook from '../Hook/MessageHook'
import HookAuth from '../Hook/HookAuth'
import CommunityHook from '../Hook/CommunityHook'
import { MoveLeft, Search, EllipsisVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const { messages, loading, getMessages, sendMessage, deleteMessage } = MessageHook()
    const { userData, fetchUserData } = HookAuth()
    const { communities, joinCommunity } = CommunityHook()  // Tambah joinCommunity
    const messagesEndRef = useRef(null)

    // Fetch user data on mount to ensure userData is available
    useEffect(() => {
        if (!userData) {
            fetchUserData()
        }
    }, [])

    // Auto-scroll ke bawah saat ada message baru
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Fetch messages saat komunitas berubah
    useEffect(() => {
        if (selectedCommunity?.id) {
            getMessages(selectedCommunity.id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCommunity?.id])

    const handleSendMessage = async (text) => {
        if (selectedCommunity?.id) {
            await sendMessage(selectedCommunity.id, text)
        }
    }

    const handleSelectCommunity = (community) => {
        setSelectedCommunity(community)
    }

    const handleJoinCommunity = async (communityId) => {
        await joinCommunity(communityId)
        // Refresh messages dan update sidebar
        if (selectedCommunity?.id === communityId) {
            getMessages(communityId)
        }
    }

    const handleDeleteMessage = async (messageId) => {
        await deleteMessage(messageId)
    }
    return (
        <>
            <div className='hidden lg:flex flex-row w-full'>
                <SidebarCommunity 
                    onCreateClick={() => setIsCreateOpen(true)}
                    selectedCommunityId={selectedCommunity?.id}
                    onSelectCommunity={handleSelectCommunity}
                />
                <div className='w-4/5 h-screen relative'>
                    <NavbarCommunity 
                        selectedCommunity={selectedCommunity}
                        userData={userData}
                        onJoin={handleJoinCommunity}
                        isLoading={loading}
                    />
                    <div className="overflow-y-auto w-full h-4/5 p-6 lg:p-8 bg-white">
                        <div className='space-y-2 mt-15'>
                            {messages.length === 0 ? (
                                <div className='text-center text-gray-400 py-8'>
                                    <p>{selectedCommunity ? 'Tidak ada pesan. Mulai obrolan!' : 'Pilih komunitas untuk memulai chat'}</p>
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <MessageBubble
                                        key={msg.id}
                                        message={msg.chat}
                                        isOwn={msg.sender_id === userData?.id}
                                        senderName={msg.sender?.name}
                                        time={msg.created_at}
                                        onDelete={() => handleDeleteMessage(msg.id)}
                                    />
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <MessageSender onSendMessage={handleSendMessage} loading={loading} />
                </div>
            </div>

            <div className='lg:hidden w-full h-screen bg-white'>
                {!selectedCommunity && (
                    <section className='h-screen flex flex-col'>
                        <header className='sticky top-0 z-20 bg-white shadow-sm px-4 py-4 space-y-3'>
                            <div className='flex items-center gap-3'>
                                <Link
                                    to='/dashboard'
                                    className='cursor-pointer bg-white text-coffe p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'
                                    aria-label='Kembali ke dashboard'
                                >
                                    <MoveLeft size={20} />
                                </Link>
                                <h1 className='text-lg font-semibold text-bistre'>Pilih Komunitas</h1>
                            </div>
                            <div className='relative'>
                                <Search size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                                <input
                                    type='text'
                                    placeholder='Explore...'
                                    className='w-full rounded-full bg-gray-100 pl-9 pr-3 py-2 text-sm outline-none border border-transparent focus:border-coffe'
                                />
                            </div>
                        </header>

                        <div className='px-4 py-4 pb-24 overflow-y-auto'>
                            <div className='space-y-2'>
                                {/* Mobile communities list will be fetched from CommunityHook in SidebarCommunity */}
                            </div>
                        </div>

                        <div className='fixed bottom-4 left-4 right-4 z-20'>
                            <button
                                type='button'
                                onClick={() => setIsCreateOpen(true)}
                                className='w-full bg-white hover:bg-coffe hover:text-white transition border-2 border-coffe text-coffe duration-300 py-3 flex justify-center items-center gap-3 rounded-xl shadow-lg'
                            >
                                <Plus size={18} />
                                Make new Community
                            </button>
                        </div>
                    </section>
                )}

                {selectedCommunity && (
                    <section className='h-screen relative'>
                        <nav className='w-full fixed top-0 left-0 bg-white shadow-sm flex items-center p-4 gap-3 z-20'>
                            <button
                                type='button'
                                onClick={() => setSelectedCommunity(null)}
                                className='cursor-pointer bg-white text-coffe p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'
                                aria-label='Kembali ke daftar komunitas'
                            >
                                <MoveLeft size={20} />
                            </button>

                            <div className='w-full flex items-center justify-between'>
                                <div className='flex items-center min-w-0'>
                                    <div className='rounded-full h-10 w-10 bg-bistre mr-3 shrink-0'></div>
                                    <div className='min-w-0'>
                                        <h3 className='text-sm font-semibold text-gray-700 truncate'>{selectedCommunity?.name}</h3>
                                        <p className='text-xs text-gray-500'>{selectedCommunity?.members?.length || selectedCommunity?.members_count || 0} members</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-1 shrink-0'>
                                    <button type='button' className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'>
                                        <Search size={18} />
                                    </button>
                                    <button type='button' className='p-2 rounded-full hover:bg-coffe hover:text-white transition duration-300'>
                                        <EllipsisVertical size={18} />
                                    </button>
                                </div>
                            </div>
                        </nav>

                        <div className='pt-20 pb-28 h-full overflow-y-auto px-3 lg:px-4'>
                            <div className='space-y-2'>
                                {messages.length === 0 ? (
                                    <div className='text-center text-gray-400 py-8'>
                                        <p>Tidak ada pesan belum. Mulai obrolan!</p>
                                    </div>
                                ) : (
                                    messages.map((msg) => (
                                        <MessageBubble
                                            key={msg.id}
                                            message={msg.chat}
                                            isOwn={msg.sender_id === userData?.id}
                                            senderName={msg.sender?.name}
                                            time={msg.created_at}
                                            onDelete={() => handleDeleteMessage(msg.id)}
                                        />
                                    ))
                                )}}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        <MessageSender onSendMessage={handleSendMessage} loading={loading} />
                    </section>
                )}
            </div>

            <CreateCommunity
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
            />
        </>
    )
}

export default Community