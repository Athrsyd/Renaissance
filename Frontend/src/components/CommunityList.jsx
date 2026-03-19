import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CommunityList = ({ communities = [], onJoin, isSearchPage = false }) => {
    const [loading, setLoading] = useState(false)

    const handleJoin = async (communityId) => {
        setLoading(true)
        await onJoin(communityId)
        setLoading(false)
    }

    return (
        <div className="community-list-container p-4 bg-bistre w-95 lg:w-225 md:w-150 mx-auto text-beige rounded-2xl mt-6">
            <div className="title text-md lg:text-2xl lg:text-center font-semibold px-1 lg:px-25 py-4">
                <h1>Ruang diskusi bagi para pelajar untuk bertanya, berbagi pengetahuan, dan belajar bersama dalam komunitas Renaissance.</h1>
            </div>
            <div className="community-list max-h-75 overflow-scroll">
                {communities.length > 0 ? (
                    communities.map((community, idx) => (
                        <div key={idx} className="community-item flex flex-row lg:px-10 md:px-10 justify-between items-center p-4 bg-white text-bistre rounded-lg mt-4">
                            <div className="kiri flex flex-row items-center">
                                <div className="img h-10 w-10 bg-bistre rounded-full"></div>
                                <div className="ml-2 lg:ml-4">
                                    <h2 className="text-md lg:text-xl font-bold">{community.name}</h2>
                                    <p className="text-sm">
                                        {isSearchPage
                                            ? `${community.members_count || 0} participants`
                                            : `${community.members?.length || 0} participants`
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="kanan">
                                <Link to='/community' >
                                    <button
                                        disabled={loading}
                                        className='bg-beige text-bistre hover:bg-bistre hover:text-beige text-md font-semibold rounded-md transition duration-200 ease-in-out py-1 px-8 disabled:opacity-50'
                                    >
                                        {loading ? 'Loading...' : 'join'}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-beige py-4">Tidak ada komunitas</p>
                )}
            </div>
        </div>
    )
}

export default CommunityList