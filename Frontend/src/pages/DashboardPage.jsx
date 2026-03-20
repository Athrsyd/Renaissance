/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavDasboard from "../components/NavDasboard"
import Search from "../assets/icon/searchIcon.svg"
import Notif from "../assets/icon/notifIcon.svg"
import CommunityList from "../components/CommunityList"
import rBottom from "../assets/icon/rowBottom.svg"
import WelcomeDash from '../components/WelcomeDash'
import SubjectDash from '../components/SubjectDash'
import ContinueLearning from '../components/ContinueLearning'
import AureusAI from '../components/AureusAI'
import PopUpAccount from '../components/PopUpAccount'
import HookAuth from '../Hook/HookAuth'
import CommunityHook from '../Hook/CommunityHook'
import ProgressHook from '../Hook/ProgressHook'

const DashboardPage = () => {
  const { fetchCommunities, communities } = CommunityHook()
  const { fetchUserData, userData } = HookAuth()
  const { fetchProgress, dataProgress, isLoading } = ProgressHook()
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const { searchResults, searchCommunities, joinCommunity, loading } = CommunityHook()

  useEffect(() => {
    fetchUserData()
    fetchCommunities()
    searchCommunities()
    fetchProgress()
  }, [])

  const handleProfileUpdated = async () => {
    console.log('Profile updated, fetching new data...')
    await fetchUserData()
    setIsAccountOpen(false)
  }

  if (!userData) return <div>Loading...</div>

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-10 md:ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-row w-full ml-9 lg:ml-20 md:ml-20 mt-2 lg:justify-center md:justify-center items-center">
          <div className="relative justify-center items-center">
            <input
              type="search"
              placeholder="Explore Lessons"
              className="bg-[#D5D4D4] z-50 text-center text-sm rounded-xl w-52 lg:w-150 md:w-110 h-10 outline-0"
            />
            <img src={Search} className="w-5 z-99 -mt-7 ml-2" />
          </div>
          <div className="relative ml-5 lg:ml-10 md:ml-10 mt-6 gap-5 flex flex-row justify-between items-center">
            <button>
              <img src={Notif} className="w-6 lg:w-7 md:w-7" alt="Notifications" />
            </button>

            <div className="img w-9 h-9 lg:h-12 lg:w-12 md:h-12 md:w-12 mb-2 bg-bistre rounded-full overflow-hidden">

              <h1 className="text-white text-center text-2xl font-bold mt-2">
                {userData?.name?.charAt(0) || 'U'}
              </h1>

            </div>

            <button
              type="button"
              onClick={() => setIsAccountOpen((prev) => !prev)}
              aria-expanded={isAccountOpen}
              aria-label="Open account menu"
            >
              <img
                src={rBottom}
                className={`w-5 transition-transform duration-300 ${isAccountOpen ? 'rotate-180' : ''}`}
                alt="Account menu"
              />
            </button>

            {/* ========== PASS CALLBACK KE POPUPACCOUNT ========== */}
            <PopUpAccount
              Username={userData}
              Email={userData}
              isOpen={isAccountOpen}
              onClose={() => setIsAccountOpen(false)}
            />
          </div>
        </div>

        <WelcomeDash user={userData} />
        <SubjectDash />
        <div className="w-full lg:pl-35 md:pl-10 mt-7">
          <h1 className="-mb-14 ml-7 self-start font-semibold font-monstserrat text-lg text-black">
            Continue Learning
          </h1>
          {dataProgress ? (
            <ContinueLearning dataProgress={dataProgress} />
          ) :
            <div className=" mt-30 mb-10 container mx-auto h-20">
              <p className="text-center text-gray-500 mt-10">
                You haven't started any lessons yet. Explore and start learning!
              </p>
            </div>
          }
        </div>

        <AureusAI />

        {communities.length > 0 && (
          <div className="w-full flex-col flex mt-7">
            <h1 className="ml-5 lg:ml-40 md:ml-20 self-start font-semibold font-monstserrat text-lg text-black">
              Explore Communities
            </h1>
            <CommunityList
              communities={communities}
              onJoin={joinCommunity}
              isSearchPage={true}
            />
          </div>
        )}
      </div>
      <br />
      <br />
    </>
  )
}

export default DashboardPage
