import React from 'react'

const CommunityList = () => {
    const communities = [
        {
            id: 1,
            name: 'Math Forum',
            participants: 1290,
        },
        {
            id: 2,
            name: 'Science Hub',
            participants: 980,
        },
        {
            id: 3,
            name: 'Literature Lounge',
            participants: 750,
        },
    ]

    return (
        <div className="community-list-container p-4  bg-bistre w-95 lg:w-225 md:w-150 mx-auto text-beige rounded-2xl mt-6 ">
            <div className="title text-md lg:text-2xl lg:text-center font-semibold px-1 lg:px-25 py-4">
                <h1 className=''>Ruang diskusi bagi para pelajar untuk bertanya,
                    berbagi pengetahuan, dan belajar bersama dalam
                    komunitas Renaissance.</h1>
            </div>
            <div className="community-list">
                {communities.map((community) => (

                    <div className="community-item flex flex-row lg:px-10 md:px-10 justify-between items-center p-4 bg-white text-bistre rounded-lg mt-4">
                        <div className="kiri flex flex-row items-center">

                            <div className="img h-10 w-10 bg-bistre rounded-full"></div>
                            <div className="ml-2 lg:ml-4">
                                <h2 className="text-md lg:text-xl font-bold">{community.name}</h2>
                                <p className="text-sm">{community.participants} participants</p>
                            </div>
                        </div>
                        <div className="kanan">
                            <button className='bg-beige text-bistre hover:bg-bistre hover:text-beige text-md font-semibold rounded-md transition duration-200 ease-in-out py-1 px-8'>join</button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default CommunityList