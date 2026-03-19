import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MoveLeft, Plus, } from 'lucide-react';
import CommunityHook from '../../Hook/CommunityHook'

const CommunityDisplay = ({ community, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`pl-5 cursor-pointer py-2 hover:bg-gray-200 transition-colors duration-300 container flex flex-row ${isSelected ? 'bg-gray-200 border-l-4 border-coffe' : ''} justify-start items-center mb-3`}
        >
            <div className="rounded-full h-10 w-10 bg-bistre mr-3"></div>
            <div className="communityDisplay flex flex-col justify-center items-start rounded-full mr-3">
                <h3 className='text-sm font-semibold text-gray-700'>{community.name}</h3>
                <p className='text-xs text-gray-500'>{community.members?.length || community.members_count || 0} members</p>
            </div>
        </div>
    )
}

const SidebarCommunity = ({ onCreateClick, selectedCommunityId, onSelectCommunity }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const { communities, searchResults, fetchCommunities, isLoading } = CommunityHook()

    useEffect(() => {
        fetchCommunities()
    }, [])

    return (

        <aside className="w-72 flex h-screen flex-col border-r-bistre border-r-2 shadow-xl">
            <div className="w-full h-15 gap-3 flex flex-row justify-start items-center p-4">

                <Link to='/dashboard' className='cursor-pointer bg-white w-1/6 text-coffe  px-3 py-1 hover:bg-coffe hover:text-white transition duration-300 rounded-full'>
                    <MoveLeft size={20} />
                </Link>
                <form action="" method="post" className='w-5/6'>
                    <input type="text" placeholder='Explore...' className='bg-gray-200 text-sm text-start p-3 h-8 w-full rounded-full' />
                </form>
            </div>
            <div className=" communityList container flex flex-col overflow-y-scroll h-screen">

                <div className="followedCommunities ">
                    <h2 className=' px-5 text-sm font-semibold text-bistre/40 mb-2'>Followed Communities</h2>
                    <ul>
                        {isLoading ? (
                            <p className='px-5 text-xs text-gray-400'>Loading...</p>
                        ) : communities.length > 0 ? (
                            communities.map((community) => (
                                <li key={community.id}>
                                    <CommunityDisplay
                                        community={community}
                                        isSelected={selectedCommunityId === community.id}
                                        onClick={() => onSelectCommunity(community)}
                                    />
                                </li>
                            ))
                        ) : (
                            <p className='px-5 text-xs text-gray-400'>Tidak ada komunitas</p>
                        )}
                    </ul>
                </div>
                <br />
                <div className="popularCommunities ">
                    <h2 className=' px-5 text-sm font-semibold text-bistre/40 mb-2'>Popular Communities</h2>
                    <ul>
                        {searchResults.length > 0 ? (
                            searchResults.slice(0, 3).map((community) => (
                                <li key={community.id}>
                                    <CommunityDisplay
                                        community={community}
                                        isSelected={selectedCommunityId === community.id}
                                        onClick={() => onSelectCommunity(community)}
                                    />
                                </li>
                            ))
                        ) : (
                            <p className='px-5 text-xs text-gray-400'>Tidak ada komunitas</p>
                        )}
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-0 left-4 right-0 w-60 bg-white flex justify-center items-center shadow-2xl px-1 py-3">
                <button
                    type='button'
                    onClick={onCreateClick}
                    className='bg-white hover:bg-coffe hover:text-white transition border-2 border-coffe  text-coffe duration-300 py-3 flex flex-row justify-center items-center px-2 hover: gap-3  rounded-xl'
                >
                    <Plus size={18} /> Make new Community
                </button>
            </div>
        </aside>
    )
}

export default SidebarCommunity