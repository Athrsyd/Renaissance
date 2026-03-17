import React from 'react'
import NavDasboard from "../components/NavDasboard"
import Logo from "../assets/Logo2.png"
import Search from "../assets/icon/searchIcon.svg"
import Notif from "../assets/icon/notifIcon.svg"
import CominityList from "../components/CommunityList"
import rBottom from "../assets/icon/rowBottom.svg"
import WelcomeDash from '../components/WelcomeDash'
import SubjectDash from '../components/SubjectDash'
import ContinueLearning from '../components/ContinueLearning'
import AureusAI from '../components/AureusAI'

const DashboardPage = () => {
  return (
    <>
      <NavDasboard />
      <div className="flex flex-col ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-row w-full ml-20 mt-2 justify-center items-center">
          <div className="relative justify-center items-center">
            <input
              type="search"
              placeholder="Explore Lessons"
              className="bg-[#D5D4D4] z-50 text-center text-sm rounded-xl w-150 h-10 outline-0"
            />
            <img src={Search} className="w-5 z-99 -mt-7 ml-2" />
          </div>
          <div className="ml-10 mt-6 gap-5 flex flex-row justify-between">
            <button>
              <img src={Notif} className="w-7" />
            </button>
            <div className="img h-12 w-12 mb-2 bg-bistre rounded-full"></div>
            <button>
              <img src={rBottom} className="w-5" />
            </button>
          </div>
        </div>
        <WelcomeDash />
        <SubjectDash />
        <div className="w-full pl-35 mt-7">
          <h1 className=' -mb-14 ml-7 self-start font-semibold font-monstserrat text-lg text-black'>Continue Learning</h1>

          <ContinueLearning />
        </div>

        <AureusAI />
        
        <div className="w-full flex-col flex mt-7">
          <h1 className='ml-40 self-start font-semibold font-monstserrat text-lg text-black'>Comunity</h1>
          <CominityList />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default DashboardPage
