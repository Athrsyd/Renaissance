import React, { useMemo, useState } from 'react'
import SidebarCommunity from '../components/CommunityComponents/SidebarCommunity'
import NavbarCommunity from '../components/CommunityComponents/NavbarCommunity'
import MessageSender from '../components/CommunityComponents/MessageSender'
import CreateCommunity from '../components/CommunityComponents/CreateCommunity'
import { MoveLeft, Search, EllipsisVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const mobileCommunities = useMemo(() => ([
        { id: 1, name: 'React Developers', members: 1200 },
        { id: 2, name: 'JavaScript Enthusiasts', members: 800 },
        { id: 3, name: 'Python Programmers', members: 1500 },
        { id: 4, name: 'Data Science', members: 1300 },
        { id: 5, name: 'Machine Learning', members: 1100 },
    ]), []);

    return (
        <>
            <div className='hidden lg:flex flex-row w-full'>
                <SidebarCommunity onCreateClick={() => setIsCreateOpen(true)} />
                <div className='w-4/5 h-screen relative'>
                    <NavbarCommunity />
                    <div className="container mt-15 overflow-y-scroll w-full h-4/5 p-6">
                        {/* Text area for messages */}
                    </div>
                    <MessageSender />
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
                                {mobileCommunities.map((community) => (
                                    <button
                                        key={community.id}
                                        type='button'
                                        onClick={() => setSelectedCommunity(community)}
                                        className='w-full text-left p-3 rounded-xl border border-gray-200 hover:border-coffe hover:bg-coffe/5 transition duration-300 flex items-center justify-between'
                                    >
                                        <div className='flex items-center gap-3 min-w-0'>
                                            <div className='h-10 w-10 rounded-full bg-bistre shrink-0'></div>
                                            <div className='min-w-0'>
                                                <p className='text-sm font-semibold text-gray-800 truncate'>{community.name}</p>
                                                <p className='text-xs text-gray-500'>{community.members} members</p>
                                            </div>
                                        </div>
                                        {/* <span className='text-xs text-gray-400 shrink-0'>Buka</span> */}
                                    </button>
                                ))}
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
                                        <h3 className='text-sm font-semibold text-gray-700 truncate'>{selectedCommunity.name}</h3>
                                        <p className='text-xs text-gray-500'>{selectedCommunity.members} members</p>
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

                        <div className='pt-20 pb-28 h-full overflow-y-auto px-4'>
                            <div className='space-y-3'>
                                <div className='max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2 text-sm text-gray-700'>
                                    Selamat datang di {selectedCommunity.name}
                                </div>
                                <div className='ml-auto max-w-[80%] rounded-2xl bg-coffe text-white px-4 py-2 text-sm'>
                                    Halo semuanya!
                                </div>
                            </div>
                        </div>

                        <MessageSender />
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