import React from 'react'
import NavDasboard from "../components/NavDasboard"

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col bg-white justify-center items-center">
        <NavDasboard />
        <div className="flex flex-row w-full ml-20 mt-5 justify-center items-center">
          <div className="relative justify-center items-center">
            <input
              type="search"
              id="site-search"
              name="q"
              placeholder="Explore Lessons"
              className="bg-[#D5D4D4] text-center text-sm rounded-xl w-100 h-10 outline-0"
            />
          </div>
          <div className="ml-30">
            <button>
              <img src="Logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage
