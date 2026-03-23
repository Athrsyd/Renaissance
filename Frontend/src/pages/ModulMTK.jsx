/* eslint-disable react-hooks/exhaustive-deps */
//
import React, { useState, useEffect } from "react";
import PopUpAccount from "../components/PopUpAccount";
import NavDashboard from "../components/NavDasboard"
import Search from "../assets/icon/searchIcon.svg";
import Notif from "../assets/icon/notifIcon.svg";
import rBottom from "../assets/icon/rowBottom.svg";
import HookAuth from "../Hook/HookAuth";
import ProgressBar from "../components/ProgressBar";
import TimelineBab from "../components/PathMTK";
import ProgressHook from "../Hook/ProgressHook";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PopUpMatematika from "../components/ModulComponent/PopUpMatematika";

const ModulMTK = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMathPopupOpen, setIsMathPopupOpen] = useState(false);
  const [selectedModulIndex, setSelectedModulIndex] = useState(0);
  const { countTotalProgress, fetchProgress, isLoading, dataProgress, error } = ProgressHook();

  const { fetchUserData, userData } = HookAuth();

  useEffect(() => {
    fetchUserData();
    fetchProgress();
  }, []);

  const { totalProgress } = countTotalProgress();

  const handleStartModule = (moduleIndex) => {
    setSelectedModulIndex(moduleIndex);
    setIsMathPopupOpen(true);
  };

  return (
    <>
      <NavDashboard />
      <div className="flex flex-col lg:ml-10 md:ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-col lg:ml-10 md:ml-10 bg-white justify-center items-center">
          <div className="flex flex-col w-full ml-9 lg:ml-10 md:ml-20 mt-2 lg:justify-center md:justify-center items-center">
            <div className="flex flex-row w-full mt-5 md:gap-2 justify-center items-center">
              {/* SEARCH */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Explore Lessons"
                  className="bg-[#D5D4D4] text-center text-sm rounded-xl w-52 lg:w-150 md:w-110 h-10 outline-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src={Search} className="w-5 -mt-7 ml-2" />
              </div>

              {/* RIGHT MENU */}
              <div className="ml-5 flex flex-row items-center gap-5">
                <button>
                  <img src={Notif} className="w-6 mt-2" alt="Notifications" />
                </button>

                <div className="w-10 h-10 bg-bistre rounded-full flex items-center justify-center">
                  <h1 className="text-white font-bold">
                    {userData?.name?.charAt(0) || "U"}
                  </h1>
                </div>

                <button onClick={() => setIsAccountOpen(!isAccountOpen)}>
                  <img
                    src={rBottom}
                    className={`w-5 transition ${isAccountOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <PopUpAccount
                  Username={userData}
                  Email={userData}
                  isOpen={isAccountOpen}
                  onClose={() => setIsAccountOpen(false)}
                />
              </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-10">
              <div className="relative flex flex-col w-250 h-70 py-5 rounded-2xl px-5 bg-icon">
                <h1 className="text-[#F8F3E0] text-7xl mt-10 font-semibold font-monstserrat text-center">
                  MATEMATIKA
                </h1>
                <div className="absolute flex flex-row self-center bottom-25 gap-3 w-[75%]">
                  {isLoading ? (
                    <Skeleton width={710} height={18} style={{borderRadius:'2.5rem'}} />
                  ) : (
                    <>
                      <ProgressBar value={totalProgress} max={100} bgColor={"bg-coffe"} />
                      <p className="text-white font-semibold font-monstserrat">
                        {totalProgress}%
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {!isLoading && !dataProgress?.length && (
              <p className="mt-4 text-gray-500 font-monstserrat">
                {error || "Data progress belum tersedia."}
              </p>
            )}

            <TimelineBab
              modulProgress={dataProgress}
              isProgressLoading={isLoading}
              progressError={error}
              onStartModule={handleStartModule}
            />
          </div>
        </div>
      </div>

      {isMathPopupOpen && (
        <PopUpMatematika
          key={selectedModulIndex}
          initialModulIndex={selectedModulIndex}
          onClose={() => setIsMathPopupOpen(false)}
        />
      )}
    </>
  );
};

export default ModulMTK;